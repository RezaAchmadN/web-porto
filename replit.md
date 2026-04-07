# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Portfolio website for Reza Achmad Naufal, a Senior Backend & Systems Architect.

## Artifacts

### Portfolio (`artifacts/portfolio`)
- React + Vite, single-page portfolio, served at `/` (port 21113)
- Dark theme (near-black #050508 background, blue #3b82f6 accent)
- framer-motion scroll animations, parallax, sticky frosted-glass nav
- Sections: Hero, Marquee ticker, Impact stats, Projects (4), Experience (3 roles), Websites Built (3 clients), Contact, Footer
- SEO: Open Graph, JSON-LD structured data, meta descriptions in index.html
- Client website images generated in `artifacts/portfolio/public/` (jakartagardencity.png, simelaproklim.png, inaagro.png)

### API Server (`artifacts/api-server`)
- Express 5, health check endpoint at /api/healthz

### Mockup Sandbox (`artifacts/mockup-sandbox`)
- Component preview server for design explorations
- Contains original portfolio mockup at `src/components/mockups/reza-portfolio/Portfolio.tsx`

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Frontend**: React 19, Vite 7, Tailwind CSS v4, framer-motion
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

## Person Details (Reza Achmad Naufal)
- Email: reza.achmad.naufal@gmail.com
- LinkedIn: https://www.linkedin.com/in/rezaachmadnaufal/
- Skills: Node.js, NestJS, Microservices, PostgreSQL, Redis, Elasticsearch, AWS, Docker, Kong, CI/CD, Prisma, TypeScript, NX Monorepo

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
