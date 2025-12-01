# Requirements Document

## Introduction

Tekyra es una landing page moderna y premium para una agencia de soluciones digitales potenciadas por IA. El proyecto utiliza una arquitectura híbrida Next.js 14 + Astro para combinar interactividad con rendimiento óptimo en secciones estáticas. El diseño sigue una estética tecnológica minimalista con una paleta de azul profundo, cian y tonos neutros.

## Glossary

- **Tekyra_System**: La aplicación web completa que incluye la landing page y todos sus componentes
- **Hero_Section**: Sección principal de pantalla completa con mensaje de valor y CTAs
- **Services_Grid**: Componente que muestra los servicios en formato de grid de 3 columnas
- **Testimonials_Carousel**: Componente que muestra testimonios de clientes en formato carrusel o grid
- **Pricing_Preview**: Sección que muestra tarjetas con precios de servicios
- **CTA_Section**: Sección de llamada a la acción final
- **Footer_Component**: Pie de página con información de contacto y enlaces
- **Static_Section**: Sección renderizada por Astro para máximo rendimiento
- **Dynamic_Component**: Componente renderizado por Next.js para interactividad

## Requirements

### Requirement 1: Arquitectura Híbrida del Proyecto

**User Story:** As a developer, I want a hybrid architecture combining Next.js and Astro, so that I can leverage dynamic interactivity and static optimization where appropriate.

#### Acceptance Criteria

1. WHEN the project is initialized THEN the Tekyra_System SHALL contain a `/app` directory for Next.js App Router components
2. WHEN the project is initialized THEN the Tekyra_System SHALL contain an `/astro` directory for static sections
3. WHEN components are created THEN the Tekyra_System SHALL store reusable components in a `/components` directory
4. WHEN utility functions are created THEN the Tekyra_System SHALL store them in a `/lib` directory
5. WHEN the project is built THEN the Tekyra_System SHALL compile TypeScript without errors

### Requirement 2: Hero Section

**User Story:** As a visitor, I want to see an impactful full-screen hero section, so that I immediately understand Tekyra's value proposition.

#### Acceptance Criteria

1. WHEN the Hero_Section renders THEN the Tekyra_System SHALL display a full-screen section with a gradient background from azul profundo (#0A2A43) to cian (#00C6E6)
2. WHEN the Hero_Section renders THEN the Tekyra_System SHALL display the title "AI-Powered Digital Solutions For Modern Businesses."
3. WHEN the Hero_Section renders THEN the Tekyra_System SHALL display the subtitle "Websites • AI Chatbots • Automations"
4. WHEN the Hero_Section renders THEN the Tekyra_System SHALL display a primary "View Services" button and a ghost "Get a Free Quote" button
5. WHEN the Hero_Section loads THEN the Tekyra_System SHALL animate content with fade-up, blur-out, and parallax effects using Framer Motion

### Requirement 3: Services Section

**User Story:** As a visitor, I want to see Tekyra's services clearly organized, so that I can understand what solutions are offered.

#### Acceptance Criteria

1. WHEN the Services_Grid renders THEN the Tekyra_System SHALL display services in a 3-column grid layout
2. WHEN the Services_Grid renders THEN the Tekyra_System SHALL display an "AI Chatbots" card with Bot icon from lucide-react and examples: Customer Support Chatbot, Lead Qualification Bot, Website Embedded Troubleshooter, FAQ Automation Bot
3. WHEN the Services_Grid renders THEN the Tekyra_System SHALL display a "Business Automations" card with Workflow icon and examples: CRM automation, Email sequences, Booking + payments automation, Data scraping + reporting
4. WHEN the Services_Grid renders THEN the Tekyra_System SHALL display a "Web Development" card with Laptop icon and examples: Landing pages, E-commerce, Business websites, SaaS dashboards
5. WHEN the user scrolls to Services_Grid THEN the Tekyra_System SHALL animate cards with staggered fade-in effect
6. WHEN the user hovers over a service card THEN the Tekyra_System SHALL apply elevation and cian border glow effects

### Requirement 4: Testimonials Section

**User Story:** As a visitor, I want to see client testimonials, so that I can trust Tekyra's quality and reliability.

#### Acceptance Criteria

1. WHEN the Testimonials_Carousel renders THEN the Tekyra_System SHALL display testimonials in a carousel or grid format
2. WHEN a testimonial renders THEN the Tekyra_System SHALL display a round avatar, client name, occupation, 5-star rating, and quote
3. WHEN the Testimonials_Carousel renders THEN the Tekyra_System SHALL include testimonials from Linda (Yoga Studio Owner), Kyle (Sales Consultant), Mickey (Martial Arts School), and Joaquín (Organic Farm Owner)
4. WHEN the user interacts with the carousel THEN the Tekyra_System SHALL allow navigation between testimonials

### Requirement 5: Pricing Preview Section

**User Story:** As a visitor, I want to see pricing information, so that I can evaluate if Tekyra's services fit my budget.

#### Acceptance Criteria

1. WHEN the Pricing_Preview renders THEN the Tekyra_System SHALL display pricing cards for: Landing Pages (from $700), Websites (from $1500), AI Chatbots (from $1200), Automation Systems ($1500–$3000), Monthly Maintenance ($200–$350)
2. WHEN pricing cards render THEN the Tekyra_System SHALL use shadcn/ui Card components with consistent styling
3. WHEN the user views pricing THEN the Tekyra_System SHALL display prices clearly with service names

### Requirement 6: Final CTA Section

**User Story:** As a visitor, I want a clear final call-to-action, so that I can easily take the next step to contact Tekyra.

#### Acceptance Criteria

1. WHEN the CTA_Section renders THEN the Tekyra_System SHALL display the text "Let's build something powerful together."
2. WHEN the CTA_Section renders THEN the Tekyra_System SHALL display a prominent "Book a Free Consultation" button
3. WHEN the CTA_Section renders THEN the Tekyra_System SHALL use a negro suave (#0B0B0B) background with white and cian text

### Requirement 7: Footer

**User Story:** As a visitor, I want access to contact information and useful links, so that I can connect with Tekyra through various channels.

#### Acceptance Criteria

1. WHEN the Footer_Component renders THEN the Tekyra_System SHALL display the Tekyra logo
2. WHEN the Footer_Component renders THEN the Tekyra_System SHALL display the contact email: contact@tekyra.net
3. WHEN the Footer_Component renders THEN the Tekyra_System SHALL display useful navigation links
4. WHEN the Footer_Component renders THEN the Tekyra_System SHALL display social media icons using lucide-react

### Requirement 8: Visual Design System

**User Story:** As a brand manager, I want consistent visual styling across all components, so that Tekyra maintains a cohesive premium identity.

#### Acceptance Criteria

1. WHEN any component renders THEN the Tekyra_System SHALL use the color palette: Azul profundo (#0A2A43), Cian (#00C6E6), White, Negro suave (#0B0B0B)
2. WHEN styling components THEN the Tekyra_System SHALL use TailwindCSS for all styling
3. WHEN building UI elements THEN the Tekyra_System SHALL use shadcn/ui as the base component library
4. WHEN adding icons THEN the Tekyra_System SHALL use lucide-react as the icon pack
5. WHEN adding animations THEN the Tekyra_System SHALL use Framer Motion for all transitions and effects

### Requirement 9: Responsive Design

**User Story:** As a mobile user, I want the landing page to work perfectly on all devices, so that I can access Tekyra from anywhere.

#### Acceptance Criteria

1. WHEN the page renders on mobile devices THEN the Tekyra_System SHALL adapt layouts to single-column format
2. WHEN the page renders on tablet devices THEN the Tekyra_System SHALL adapt layouts appropriately for medium screens
3. WHEN the page renders on desktop devices THEN the Tekyra_System SHALL display full multi-column layouts
4. WHEN navigation is accessed on mobile THEN the Tekyra_System SHALL provide a mobile-friendly navigation experience

### Requirement 10: Performance Optimization

**User Story:** As a visitor, I want the page to load quickly, so that I have a smooth browsing experience.

#### Acceptance Criteria

1. WHEN static sections are built THEN the Tekyra_System SHALL render Hero_Section, Services_Grid, Testimonials_Carousel, and Pricing_Preview as Astro static components
2. WHEN interactive elements are needed THEN the Tekyra_System SHALL use Next.js only for forms and dynamic functionality
3. WHEN images are loaded THEN the Tekyra_System SHALL optimize images for web delivery
