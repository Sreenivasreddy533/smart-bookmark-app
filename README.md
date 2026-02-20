Smart Bookmark App

A full-stack bookmark manager built with Next.js (App Router) and Supabase, featuring Google OAuth authentication, private user data, real-time updates, and production deployment on Vercel.

🚀 Live Demo

Live URL:
http://smart-bookmark-app-silk-two.vercel.app/

GitHub Repository:
https://github.com/Sreenivasreddy533/smart-bookmark-app

📌 Features
✅ Authentication

Sign up and log in using Google OAuth only

No email/password authentication

Secure session handling using Supabase Auth

✅ Bookmark Management

Add a bookmark (URL + title)

Delete your own bookmarks

Each bookmark is linked to the authenticated user

✅ Privacy

Bookmarks are private per user

User A cannot see User B’s bookmarks

Implemented using user_id filtering in queries

✅ Real-Time Updates

Bookmark list updates instantly without page refresh

Works across multiple tabs

Implemented using Supabase Realtime subscriptions

✅ Deployment

Fully deployed on Vercel

Production environment variables configured

Google OAuth works in both local and production environments

🛠 Tech Stack

Frontend: Next.js (App Router)

Backend: Supabase (Auth, Database, Realtime)

Styling: Tailwind CSS

Deployment: Vercel

🗂 Project Structure
src/
 ├── app/
 │   ├── page.tsx
 │   ├── dashboard/page.tsx
 │   └── auth/callback/route.ts
 ├── components/
 │   ├── BookmarkForm.tsx
 │   ├── BookmarkList.tsx
 │   └── LoginButton.tsx
 └── lib/
     └── supabase.ts

🔐 Database Design

Table: bookmarks

Column	Type
id	uuid
title	text
url	text
user_id	uuid
created_at	timestamp

Each bookmark is linked to the authenticated user's user_id.

⚙️ Environment Variables

The following environment variables are required:

NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=


These are configured in:

.env.local (for development)

Vercel Project Settings (for production)

🧪 How to Run Locally

Clone the repository:

git clone https://github.com/Sreenivasreddy533/smart-bookmark-app.git


Install dependencies:

npm install


Add environment variables in .env.local

Run the development server:

npm run dev


Open:

http://localhost:3000

🧠 Problems Faced & Solutions
1️⃣ Path Alias Build Failure on Vercel

Problem:
Module not found: Can't resolve '@/lib/supabase'

Solution:
Configured tsconfig.json with:

"baseUrl": ".",
"paths": {
  "@/*": ["src/*"]
}


Committed and redeployed.

2️⃣ Windows Environment Variable Issue

Problem:
NEXT_DISABLE_TURBOPACK is not recognized

Solution:
Removed Linux-style environment variable from package.json and used:

"dev": "next dev"

3️⃣ Missing Dependencies on Vercel

Problem:
Module not found: react-tsparticles

Cause:
Dependencies were installed locally but not committed.

Solution:
Installed dependencies properly and committed package.json + package-lock.json.

4️⃣ Google OAuth Redirect Issues

Problem:
Login failed after production deployment.

Solution:
Updated:

Supabase → Site URL & Redirect URLs

Google Cloud Console → Authorized redirect URIs

🔎 Real-Time Implementation Explanation

The app subscribes to Supabase's real-time channel:

When a new bookmark is inserted

When a bookmark is deleted

The UI updates automatically without refresh.

🎯 What This Project Demonstrates

Full-stack authentication with OAuth

Secure per-user data handling

Real-time database subscriptions

Production-ready deployment

Debugging and resolving deployment issues

Environment configuration management

📅 Time Taken

Completed within the 72-hour time limit.

💡 Future Improvements

Edit bookmark feature

Search & filtering

Pagination

Improved UI animations

Row Level Security enforcement at database level

Custom domain setup

✅ Submission Checklist

✔ Google OAuth login
✔ Add bookmark
✔ Delete bookmark
✔ Private per-user data
✔ Real-time updates
✔ Deployed on Vercel
✔ GitHub repository
✔ README with problems & solutions