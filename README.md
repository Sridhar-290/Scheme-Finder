# AI Public Benefits Navigator

A full-stack web app helping Indian citizens discover and apply for government welfare schemes they're eligible for.

## What this project does

- Browse 150+ real government welfare schemes (static data)
- Run an eligibility wizard (“Find Benefits”) to personalize guidance
- Use an AI assistant to answer scheme/eligibility questions
- Register/Login with JWT authentication
- Save schemes and maintain conversation history
How to run

> Live demo link: **(not available in repo)** — run locally below.

## How to run (local)

### 1) Start the services


Open two terminals:

- **API server** (port **8080**, base path `/api`):
  - `pnpm --filter @workspace/api-server run dev`

- **Frontend** (port **22968**, base path `/`):
  - `pnpm --filter @workspace/navigator run dev`

### 2) Open the app

- Frontend: http://localhost:22968/
- API (health check): http://localhost:8080/api/health


### Start the services


- API server:
  - `pnpm --filter @workspace/api-server run dev`
  - Port: **8080**
  - Base path: **`/api`**

- Frontend:
  - `pnpm --filter @workspace/navigator run dev`
  - Port: **22968**
  - Base path: **`/`**

### Common commands

- Typecheck (all packages):
  - `pnpm run typecheck`

- Build (typecheck + build all packages):
  - `pnpm run build`

- Regenerate API client & Zod schemas from OpenAPI:
  - `pnpm --filter @workspace/api-spec run codegen`

- Push DB schema changes (dev only):
  - `pnpm --filter @workspace/db run push`

### Required environment variables

- `DATABASE_URL` — Postgres connection string
- `SESSION_SECRET` — JWT signing secret
<img width="1774" height="887" alt="ChatGPT Image Jul 6, 2026, 10_25_50 PM" src="https://github.com/user-attachments/assets/9464781f-2515-40d3-b75e-5ccc1865e1bf" />

### Common commands

- Typecheck (all packages):
  - `pnpm run typecheck`

- Build (typecheck + build all packages):
  - `pnpm run build`

- Regenerate API client & Zod schemas from OpenAPI:
  - `pnpm --filter @workspace/api-spec run codegen`

- Push DB schema changes (dev only):
  - `pnpm --filter @workspace/db run push`

### Required environment variables

- `DATABASE_URL` — Postgres connection string
- `SESSION_SECRET` — JWT signing secret

Optional but important:

- `OPENAI_API_KEY` — if set, AI uses OpenAI; otherwise AI falls back to mock responses

## Stack

- Monorepo: **pnpm workspaces**, **Node.js 24**, **TypeScript 5.9**
- API: **Express 5** (port 8080, base `/api`)
- DB: **PostgreSQL** + **Drizzle ORM**
- Auth: **bcryptjs** + **jsonwebtoken**
  - JWT lifespan: **30 days**
  - Client storage: localStorage key **`auth_token`**
- AI: **OpenAI gpt-4o-mini** (mock fallback when `OPENAI_API_KEY` is missing)
- Validation: **Zod** + `drizzle-zod`
- API code generation: **Orval** from OpenAPI spec
- Frontend: **React + Vite**
  - Routing: `wouter`
  - Data fetching: TanStack Query
  - UI: shadcn/ui
  - Theme: `next-themes`
  - Icons: `lucide-react`

## Repository structure (key parts)

### OpenAPI & generated artifacts

- `lib/api-spec/openapi.yaml` — OpenAPI spec (source of truth)
- `lib/api-client-react/src/generated/api.ts` — generated React Query hooks
- `lib/api-zod/src/generated/api.ts` — generated Zod schemas

### Database schema

- `lib/db/src/schema/index.ts` — database schema (users, user_profiles, saved_schemes, conversations, messages)

### In-memory scheme data

- `artifacts/api-server/src/data/schemes.ts` — 44 government schemes (static, in-memory)

### API implementation

- `artifacts/api-server/src/routes/` — all API route handlers
- `artifacts/api-server/src/services/ai.ts` — OpenAI integration + eligibility checker
- `artifacts/api-server/src/middlewares/auth.ts` — JWT auth middleware

### Frontend implementation

- `artifacts/navigator/src/pages/` — frontend pages
- `artifacts/navigator/src/contexts/auth-context.tsx` — auth state management
- `artifacts/navigator/src/components/` — shared UI components

## Architecture decisions / conventions

- Schemes are **static in-memory data** (no DB table for schemes)
- JWT auth uses `SESSION_SECRET` for signing
- API route groupings include:
  - `/api/v1/auth`
  - `/api/v1/schemes`
  - `/api/v1/profile`
  - `/api/v1/saved-schemes`
  - `/api/v1/eligibility`
  - `/api/v1/conversations`
- Route ordering requirement in `schemes.ts`:
  - static routes like `/stats`, `/featured`, `/categories` MUST come before `/:id`
- OpenAPI list response field naming:
  - the field is named `schemes` (not `items`) and must match generated types
- AI behavior:
  - falls back to hardcoded mock responses when `OPENAI_API_KEY` is absent

## Product areas

- **Homepage** — hero + CTAs, stats bar, featured schemes, category grid
- **Browse Schemes** (`/schemes`) — 44 schemes with sidebar filters (category, state, type, gender, age)
- **Scheme Detail** (`/schemes/:id`) — details, eligibility, benefits, documents, steps, FAQs, save/share
- **Find Benefits** (`/find`) — multi-step eligibility wizard → personalized results
- **AI Assistant** (`/ai`) — chat-style UI with conversation history (OpenAI or mock)
- **Saved Schemes** (`/saved`) — bookmarked schemes
- **Profile** (`/profile`) — user details form (age, state, income, occupation, gender, caste category)
- **Auth** — register/login with JWT, session restored on page load

## Gotchas

- After editing `lib/api-spec/openapi.yaml`, run:
  - `pnpm --filter @workspace/api-spec run codegen`
- Ensure frontend usage matches generated schema field names (e.g. `schemes` vs `items`)
- Maintain route order in the API router to avoid `/:id` shadowing static endpoints
- In TypeScript code that interfaces with Express/Drizzle, cast `req.params["id"]` to `String()` as needed

## Notes

- This repo uses pnpm workspaces:
  - `pnpm-workspace.yaml` defines packages under `lib/*`, `artifacts/*`, and `scripts/`
- There is a `replit.md` with operational guidance for the app when hosted via Replit.

