# Confused Bank Frontend

Next.js App Router frontend for the existing Bank Management System backend.

## Local development

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000.

## Environment

`NEXT_PUBLIC_API_BASE_URL` points to the Spring Boot API. It defaults to the current Render API URL if not set. This is a public API origin, not a secret. Do not place database passwords, Supabase service keys, or JWT signing secrets in frontend environment variables.

## Validation

```bash
npm run typecheck
npm run lint
npm run build
```

See `../README_FRONTEND_INTEGRATION.md` for API mappings, role boundaries, and Vercel/Render CORS deployment steps.
