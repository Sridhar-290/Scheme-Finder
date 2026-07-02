# AI Public Benefits Navigator

A full-stack web app helping Indian citizens discover and apply for government welfare schemes they're eligible for. Features 44+ real schemes, AI assistant, eligibility wizard, authentication, and saved schemes.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 8080, served at `/api`)
- `pnpm --filter @workspace/navigator run dev` — run the frontend (port 22968, served at `/`)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string, `SESSION_SECRET` — JWT signing secret

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5 (port 8080, base path `/api`)
- DB: PostgreSQL + Drizzle ORM
- Auth: bcryptjs + jsonwebtoken (30-day JWT, stored in localStorage key `auth_token`)
- AI: OpenAI gpt-4o-mini (falls back to mock responses when `OPENAI_API_KEY` absent)
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Frontend: React + Vite, wouter routing, TanStack Query, shadcn/ui, next-themes, lucide-react

## Where things live

- `lib/api-spec/openapi.yaml` — OpenAPI spec (source of truth for all API contracts)
- `lib/api-client-react/src/generated/api.ts` — generated React Query hooks
- `lib/api-zod/src/generated/api.ts` — generated Zod schemas
- `lib/db/src/schema/index.ts` — database schema (users, user_profiles, saved_schemes, conversations, messages)
- `artifacts/api-server/src/data/schemes.ts` — 44 real government schemes (static, in-memory)
- `artifacts/api-server/src/routes/` — all API route handlers
- `artifacts/api-server/src/services/ai.ts` — OpenAI integration + eligibility checker
- `artifacts/api-server/src/middlewares/auth.ts` — JWT auth middleware
- `artifacts/navigator/src/pages/` — all frontend pages
- `artifacts/navigator/src/contexts/auth-context.tsx` — auth state management
- `artifacts/navigator/src/components/` — shared UI components

## Architecture decisions

- Schemes are static in-memory data (no DB table) — 44 real schemes covering 9 categories
- JWT auth: 30-day tokens, `SESSION_SECRET` env var for signing
- API routes: `/api/v1/auth`, `/api/v1/schemes`, `/api/v1/profile`, `/api/v1/saved-schemes`, `/api/v1/eligibility`, `/api/v1/conversations`
- Route ordering in `schemes.ts`: `/stats`, `/featured`, `/categories` MUST come before `/:id`
- OpenAPI spec field name `schemes` (not `items`) in list response — must match generated types
- AI falls back to hardcoded mock responses when `OPENAI_API_KEY` is absent

## Product

- **Homepage**: Hero with CTAs, stats bar, featured schemes, category grid
- **Browse Schemes** (`/schemes`): 44 schemes with sidebar filters (category, state, type, gender, age)
- **Scheme Detail** (`/schemes/:id`): Full scheme page with eligibility, benefits, documents, steps, FAQs, save/share
- **Find Benefits** (`/find`): Multi-step eligibility wizard → personalized results
- **AI Assistant** (`/ai`): ChatGPT-style interface with conversation history (uses OpenAI or mock)
- **Saved Schemes** (`/saved`): Bookmarked schemes with remove capability
- **Profile** (`/profile`): User details form (age, state, income, occupation, gender, caste category)
- **Auth**: Register/Login with JWT, session restored on page load

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- Always run `pnpm --filter @workspace/api-spec run codegen` after changing `openapi.yaml`
- Check generated type field names before using them in the frontend (e.g. `schemes` not `items`)
- Route order in `schemesRouter`: static routes (`/stats`, `/featured`, `/categories`) BEFORE `/:id`
- `req.params["id"]` needs `String()` cast in TypeScript for Drizzle/Express compatibility

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
