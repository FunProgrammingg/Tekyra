# Implementation Plan

## Phase 1: Project Setup & Configuration

- [x] 1. Initialize Next.js 14 project with TypeScript and TailwindCSS





  - [x] 1.1 Create Next.js 14 project with App Router, TypeScript, TailwindCSS, and ESLint


    - Run `npx create-next-app@latest` with appropriate flags
    - Configure `tailwind.config.ts` with Tekyra color palette (#0A2A43, #00C6E6, #0B0B0B)
    - _Requirements: 1.1, 1.5, 8.2_

  - [x] 1.2 Install and configure shadcn/ui

    - Run `npx shadcn-ui@latest init`
    - Install Button and Card components
    - _Requirements: 8.3_
  - [x] 1.3 Install additional dependencies


    - Install Framer Motion: `npm install framer-motion`
    - Install lucide-react: `npm install lucide-react`
    - _Requirements: 8.4, 8.5_
  - [x] 1.4 Create project directory structure


    - Create `/components/sections/` for page sections
    - Create `/components/animations/` for Framer Motion wrappers
    - Create `/lib/` for utilities, types, and constants
    - _Requirements: 1.3, 1.4_

## Phase 2: Core Utilities & Types

- [x] 2. Create TypeScript types and constants






  - [x] 2.1 Create type definitions in `/lib/types.ts`

    - Define Service, Testimonial, PricingItem, FooterLink, SocialLink interfaces
    - _Requirements: 1.5_

  - [x] 2.2 Create constants in `/lib/constants.ts`

    - Define services data array with AI Chatbots, Business Automations, Web Development
    - Define testimonials data array with Linda, Kyle, Mickey, Joaquín
    - Define pricing items array
    - Define color tokens
    - _Requirements: 3.2, 3.3, 3.4, 4.3, 5.1_

  - [x] 2.3 Create utility functions in `/lib/utils.ts`

    - Add cn() helper for className merging (from shadcn)
    - _Requirements: 1.4_

## Phase 3: Animation Components

- [x] 3. Create Framer Motion animation wrappers







  - [x] 3.1 Create FadeUp animation component


    - Implement fade-up animation with configurable delay and duration
    - _Requirements: 2.5, 8.5_
  - [x] 3.2 Create StaggerChildren animation component


    - Implement staggered animation for child elements
    - _Requirements: 3.5, 8.5_

  - [x] 3.3 Create ScrollReveal animation component

    - Implement scroll-triggered animations using useInView
    - _Requirements: 3.5_

## Phase 4: Hero Section

- [x] 4. Implement Hero Section





  - [x] 4.1 Create Hero component with full-screen layout


    - Implement gradient background from #0A2A43 to #00C6E6
    - Add title: "AI-Powered Digital Solutions For Modern Businesses."
    - Add subtitle: "Websites • AI Chatbots • Automations"
    - _Requirements: 2.1, 2.2, 2.3_

  - [x] 4.2 Add CTA buttons to Hero
    - Add primary "View Services" button
    - Add ghost "Get a Free Quote" button
    - _Requirements: 2.4_

  - [x] 4.3 Add animations to Hero
    - Apply FadeUp animation to title and subtitle
    - Apply parallax effect to background
    - _Requirements: 2.5_

  - [x] 4.4 Write unit tests for Hero section

    - Test that title and subtitle render correctly
    - Test that both CTA buttons are present
    - _Requirements: 2.2, 2.3, 2.4_

## Phase 5: Services Section

- [x] 5. Implement Services Grid Section





  - [x] 5.1 Create ServiceCard component


    - Display icon, title, description, and examples list
    - Add hover effects: elevation and cyan border glow
    - _Requirements: 3.2, 3.3, 3.4, 3.6_


  - [x] 5.2 Create ServicesGrid component

    - Implement 3-column responsive grid layout
    - Map services data to ServiceCard components
    - _Requirements: 3.1_
  - [x] 5.3 Add scroll animations to Services


    - Apply StaggerChildren animation on scroll
    - _Requirements: 3.5_
  - [x] 5.4 Write unit tests for Services section


    - Test that all 3 service cards render
    - Test that each card has correct icon and examples
    - _Requirements: 3.1, 3.2, 3.3, 3.4_

## Phase 6: Testimonials Section

- [x] 6. Implement Testimonials Section





  - [x] 6.1 Create TestimonialCard component

    - Display round avatar, name, occupation
    - Display 5-star rating using lucide Star icons
    - Display quote text
    - _Requirements: 4.2_
  - [x] 6.2 Create TestimonialsCarousel component


    - Implement carousel/grid layout for testimonials
    - Add navigation controls
    - _Requirements: 4.1, 4.4_
  - [x] 6.3 Integrate testimonials data


    - Load testimonials from constants
    - Render all 4 testimonials (Linda, Kyle, Mickey, Joaquín)
    - _Requirements: 4.3_
  - [x] 6.4 Write property test for testimonial rendering


    - **Property 2: Testimonial Rendering Completeness**
    - **Validates: Requirements 4.2**
  - [x] 6.5 Write unit tests for Testimonials section


    - Test that all testimonials render
    - Test that each testimonial shows all required fields
    - _Requirements: 4.1, 4.2, 4.3_

- [x] 7. Checkpoint - Ensure all tests pass





  - Ensure all tests pass, ask the user if questions arise.

## Phase 7: Pricing Section

- [x] 8. Implement Pricing Preview Section





  - [x] 8.1 Create PricingCard component


    - Use shadcn/ui Card component
    - Display service name and price
    - _Requirements: 5.2, 5.3_
  - [x] 8.2 Create PricingPreview component


    - Implement responsive grid layout for pricing cards
    - Map pricing data to PricingCard components
    - _Requirements: 5.1_
  - [x] 8.3 Write property test for pricing card rendering


    - **Property 3: Pricing Card Data Integrity**
    - **Validates: Requirements 5.3**
  - [x] 8.4 Write unit tests for Pricing section


    - Test that all 5 pricing cards render
    - Test that each card shows service and price
    - _Requirements: 5.1, 5.3_

## Phase 8: CTA & Footer Sections

- [x] 9. Implement CTA Section





  - [x] 9.1 Create CTA component


    - Implement dark background (#0B0B0B)
    - Add headline: "Let's build something powerful together."
    - Add prominent "Book a Free Consultation" button
    - _Requirements: 6.1, 6.2, 6.3_

  - [x] 9.2 Write unit tests for CTA section

    - Test that headline and button render correctly
    - _Requirements: 6.1, 6.2_

- [x] 10. Implement Footer Section





  - [x] 10.1 Create Footer component


    - Display Tekyra logo
    - Display contact email: contact@tekyra.net
    - Display navigation links
    - Display social media icons using lucide-react
    - _Requirements: 7.1, 7.2, 7.3, 7.4_
  - [x] 10.2 Write unit tests for Footer section


    - Test that logo, email, links, and social icons render
    - _Requirements: 7.1, 7.2, 7.3, 7.4_

## Phase 9: Page Assembly & Responsive Design

- [x] 11. Assemble main landing page





  - [x] 11.1 Create main page layout in `/app/page.tsx`


    - Import and compose all sections in order: Hero, Services, Testimonials, Pricing, CTA, Footer
    - _Requirements: 1.1_

  - [x] 11.2 Create root layout in `/app/layout.tsx`

    - Configure metadata (title, description)
    - Set up font configuration
    - _Requirements: 1.1_
  - [x] 11.3 Implement responsive breakpoints


    - Ensure mobile single-column layouts
    - Ensure tablet medium-screen adaptations
    - Ensure desktop multi-column layouts
    - _Requirements: 9.1, 9.2, 9.3_

## Phase 10: Final Polish & Optimization

- [x] 12. Final optimizations and polish



  - [x] 12.1 Add image optimization


    - Configure Next.js Image component for avatars
    - Add placeholder images for testimonials
    - _Requirements: 10.3_


  - [x] 12.2 Add reduced motion support
    - Respect `prefers-reduced-motion` media query
    - _Requirements: 8.5_
  - [x] 12.3 Verify TypeScript compilation


    - Run `npm run build` to ensure zero TypeScript errors
    - _Requirements: 1.5_
  - [x] 12.4 Write build verification test



    - **Property 1: TypeScript Compilation Success**
    - **Validates: Requirements 1.5**

- [x] 13. Final Checkpoint - Ensure all tests pass





  - Ensure all tests pass, ask the user if questions arise.
