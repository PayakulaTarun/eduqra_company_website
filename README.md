# Eduqra - AI-Powered Educational Technology Solutions

## Project Overview
This repository contains the official website for Eduqra, built as a premium AI EdTech brand. 

### 1. Full Project Structure
Currently split into two fundamental layers:

```
/eduqra_company_website/
├── /frontend/          # Next.js 15, React 19, Tailwind CSS v4, Framer Motion
│   ├── src/app/        # App Router, Layouts, Pages, Globals
│   ├── src/components/ # Reusable UI Components & Sections
│   │   ├── ui/         # Base UI components (Buttons, Inputs - scalability ready)
│   │   ├── sections/   # Major page blocks (Hero, About, Solutions, etc.)
│   │   └── Navbar.tsx, Footer.tsx, ThemeToggle.tsx
│   ├── public/         # Static assets (fonts, icons, images)
│   ├── tailwind.css    # v4 style imports & custom glassy utility classes
│   └── package.json    # Dependencies
├── /backend/           # Node.js, Express, MongoDB (for scaling future features)
│   ├── /controllers/   # Request logic handling
│   ├── /models/        # Mongoose schema definitions
│   ├── /routes/        # API route definitions
│   ├── /middlewares/   # Auth (JWT) & validation middlewares
│   ├── .env            # Environment variables
│   └── server.js       # Entry point
```

### 2. UI Design Concept
- **Vibe:** Silicon Valley startup, "Stripe-meets-OpenAI", ultra-modern, highly trusted.
- **Color Palette:** 
  - Primary: Deep Blues (`#3b82f6`) & Violets (`#8b5cf6`) to signify trust, intelligence, and modern AI.
  - Backgrounds: `Slate 50` (Light) to `Slate 950` (Dark) for deep contrast and premium feel.
- **Typography:** 
  - `Inter` for hyper-legible body text.
  - `Outfit` for bold, futuristic, and friendly headings.
- **Visuals:** 
  - Heavy use of Glassmorphism (blurred translucent backgrounds).
  - Animated, breathing background gradients using Framer Motion.
  - Bento-grid layouts for feature highlighting.

### 3. Suggested Improvements for Scaling
1. **Frontend Architecture:**
   - Introduce Zustand or Redux Toolkit as the application grows from a landing page to a full Learning Management System (LMS).
   - Integrate `next-intl` if targeting global students (i18n).
   - Pre-render static content using Next.js ISR (Incremental Static Regeneration) for lightning-fast SEO.
2. **Backend & Database:**
   - As you scale to thousands of students, migrate off general REST endpoints towards GraphQL or tRPC for strongly typed, tailored data fetching.
   - Use Redis for caching heavy AI model responses or frequently accessed user states.
   - Implement rate limiting (e.g., `express-rate-limit`) to prevent API abuse, especially on email forms or AI prompts.
3. **Authentication & Security:**
   - Utilize NextAuth.js on the frontend connected to your JWT backend, enabling seamless OAuth (Google, GitHub) logins.
   - Store user sessions securely in HttpOnly cookies to prevent XSS attacks.
4. **DevOps:**
   - Set up GitHub Actions for CI/CD.
   - Automate database backups using MongoDB Atlas features.
   - Consider containerizing the Node application via Docker for vendor-agnostic deployments.
# eduqra_company_website
