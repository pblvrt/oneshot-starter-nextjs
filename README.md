# Oneshot Starter — Next.js

Fullstack starter template for the Oneshot platform.

## Stack

- **Next.js 16** (App Router)
- **React 19** + TypeScript
- **Better Auth** (email/password authentication)
- **Drizzle ORM** + SQLite (better-sqlite3)
- **Tailwind CSS v4** + shadcn/ui
- **Geist** font family

## Getting Started

```bash
npm install
npm run dev
```

The dev server starts on port 3000 and automatically pushes the database schema.

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server (auto-pushes DB schema) |
| `npm run build` | Production build |
| `npm run db:push` | Push schema changes to SQLite |
| `npm run db:generate` | Generate migration files |
| `npm run db:studio` | Open Drizzle Studio |

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── api/auth/         # Better Auth API routes
│   ├── dashboard/        # Protected pages
│   ├── sign-in/          # Sign in page
│   └── sign-up/          # Sign up page
├── components/ui/        # shadcn/ui components
├── db/                   # Drizzle schema + connection
├── lib/                  # Auth config, utilities
└── proxy.ts              # Route protection
```
