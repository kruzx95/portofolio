# Guestbook Implementation Plan

## Objective
To build a fully functional, real-time Guestbook feature where visitors can securely log in via GitHub and leave messages on the portfolio.

## Tech Stack
- **Database & Backend**: [Supabase](https://supabase.com/) (Free PostgreSQL database)
- **Authentication**: [NextAuth.js (Auth.js)](https://next-auth.js.org/) for GitHub OAuth login.
- **ORM / Database Client**: `@supabase/supabase-js` or `Prisma` (Supabase client is simpler and recommended for this scale).

## Phase 1: Setup & Configuration
1. **Supabase Setup**:
   - Create a free account/project on Supabase.
   - Create a `guestbook` table with the following schema:
     - `id` (uuid, primary key)
     - `email` (string)
     - `name` (string)
     - `image` (string, for avatar)
     - `message` (text)
     - `created_at` (timestamp)
   - Enable Row Level Security (RLS) to ensure only authenticated users can insert messages.

2. **GitHub OAuth App Setup**:
   - Go to GitHub Developer Settings > OAuth Apps.
   - Create a new OAuth App.
   - Get the `GITHUB_ID` and `GITHUB_SECRET`.

3. **Environment Variables**:
   - Add the necessary keys to a `.env.local` file:
     ```env
     GITHUB_ID=your_github_client_id
     GITHUB_SECRET=your_github_client_secret
     NEXTAUTH_SECRET=your_random_secret_string
     NEXTAUTH_URL=http://localhost:3000
     NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
     ```

## Phase 2: Implementation
1. **Install Dependencies**:
   ```bash
   npm install next-auth @supabase/supabase-js
   ```

2. **Configure NextAuth**:
   - Create `src/app/api/auth/[...nextauth]/route.ts`.
   - Setup GitHub Provider using the environment variables.

3. **Database Client Setup**:
   - Create a utility file (e.g., `src/lib/supabase.ts`) to initialize the Supabase client using the environment variables.

4. **Update UI & Logic (`src/app/guestbook/page.tsx`)**:
   - **Authentication State**: Use NextAuth's `useSession` to check if a user is logged in.
     - If logged out: Show "Sign in with GitHub".
     - If logged in: Show the user's avatar, name, a textarea for the message, and a "Sign Out" button.
   - **Fetching Messages**: Use `useEffect` or Server Components to fetch all messages from the Supabase `guestbook` table, ordered by `created_at` descending.
   - **Posting a Message**: Create a submit handler that inserts a new row into Supabase with the logged-in user's details and the typed message.

## Phase 3: Testing & Deployment
1. **Local Testing**:
   - Verify GitHub login works smoothly.
   - Verify messages save to Supabase and instantly appear on the screen.
2. **Production Deployment (Vercel)**:
   - Add all environment variables to the Vercel Dashboard.
   - Update `NEXTAUTH_URL` in Vercel to the actual production domain.
   - Update the GitHub OAuth App callback URL to match the production domain.
