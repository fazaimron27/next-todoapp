This is a Todo App built with Next.js and Tailwind CSS. Store on postgreSQL database using Prisma ORM. Deployed on Vercel and Supabase.

[Live Demo](https://next-todoapp-manager.vercel.app/)

## Features
<!-- checkboxes -->
- [x] Add a new todo
- [x] List all todos
- [x] Edit a todo
- [x] Remove a todo
<!-- - [ ] Mark a todo as completed -->

## Getting Started
1. Clone the repository
```bash
git clone https://github.com/fazaimron27/next-todoapp.git
```

2. Install dependencies
```bash
npm install
```

3. Copy `.env.example` to `.env` and fill in the environment variables
```bash
cp .env.example .env
```
    - `DATABASE_URL` - PostgreSQL database URL (e.g. `postgresql://user:password@localhost:5432/dbname`)
    - `NEXT_PUBLIC_API_URL` - Local API URL (e.g. `http://localhost:3000`)

4. Run the development server
```bash
npm run dev
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Libraries
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prisma](https://www.prisma.io/)
- [DaisyUI](https://daisyui.com/)

## Deployment
- [Vercel](https://vercel.com/)
- [Supabase](https://supabase.com/)