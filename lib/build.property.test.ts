import { describe, it, expect } from "vitest";
import { execSync } from "child_process";
import * as fc from "fast-check";
import * as fs from "fs";
import * as path from "path";

/**
 * **Feature: tekyra-landing, Property 1: TypeScript Compilation Success**
 * 
 * *For any* source file in the project, the TypeScript compiler should
 * produce zero errors when building the project.
 * 
 * **Validates: Requirements 1.5**
 */
describe("Property Test: TypeScript Compilation Success", () => {
  // Get all TypeScript source files in the project
  const getTypeScriptFiles = (dir: string, files: string[] = []): string[] => {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      // Skip node_modules, .next, and other build directories
      if (entry.isDirectory()) {
        if (!["node_modules", ".next", ".git", "dist", "coverage"].includes(entry.name)) {
          getTypeScriptFiles(fullPath, files);
        }
      } else if (entry.isFile() && /\.(ts|tsx)$/.test(entry.name) && !entry.name.includes(".test.")) {
        files.push(fullPath);
      }
    }
    
    return files;
  };

  it("should compile all TypeScript files without errors", () => {
    // Run TypeScript compiler in check mode (no emit)
    let compileResult: { success: boolean; output: string };
    
    try {
      execSync("npx tsc --noEmit", {
        cwd: process.cwd(),
        encoding: "utf-8",
        stdio: ["pipe", "pipe", "pipe"],
      });
      compileResult = { success: true, output: "" };
    } catch (error) {
      const execError = error as { stdout?: string; stderr?: string };
      compileResult = {
        success: false,
        output: execError.stdout || execError.stderr || "Unknown compilation error",
      };
    }

    expect(compileResult.success, `TypeScript compilation failed:\n${compileResult.output}`).toBe(true);
  });

  it("should have valid TypeScript files in all source directories", () => {
    const sourceFiles = getTypeScriptFiles(process.cwd());
    
    // Property: For any TypeScript file, it should be parseable
    fc.assert(
      fc.property(
        fc.constantFrom(...sourceFiles),
        (filePath: string) => {
          // Check file exists and is readable
          expect(fs.existsSync(filePath)).toBe(true);
          
          const content = fs.readFileSync(filePath, "utf-8");
          
          // Basic syntax checks - file should not be empty and should have valid structure
          expect(content.length).toBeGreaterThan(0);
          
          // Check for common TypeScript syntax issues
          // Balanced braces (simple check)
          const openBraces = (content.match(/{/g) || []).length;
          const closeBraces = (content.match(/}/g) || []).length;
          expect(openBraces).toBe(closeBraces);
          
          // Balanced parentheses
          const openParens = (content.match(/\(/g) || []).length;
          const closeParens = (content.match(/\)/g) || []).length;
          expect(openParens).toBe(closeParens);
          
          return true;
        }
      ),
      { numRuns: 100 }
    );
  });
});
