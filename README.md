# Startup Benefits & Partnerships Platform

A full-stack web application that provides early-stage startups with access to exclusive SaaS deals and benefits. The platform supports public and restricted deals, user verification, and claim tracking with a clean, animated frontend.

🧠 Problem Statement

Early-stage startups often cannot afford premium SaaS tools. This platform helps founders and indie hackers discover and claim discounted or free benefits from SaaS partners. Some deals are publicly accessible, while others require verified startup status.

🧩 Core Features
User registration and authentication (JWT-based)
Browse all available deals
Locked vs unlocked deals with access control
Claim eligible deals
User dashboard with claim status tracking
Clean UI with animations and micro-interactions

Tech Stack:

Frontend:
Next.js (App Router)
TypeScript
Tailwind CSS
Framer Motion (animations)

Backend:
Node.js
Express.js
MongoDB + Mongoose
JWT Authentication
REST APIs

📁 Project Structure
Backend
backend/
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middleware/
│   ├── config/
│   └── server.js
└── .env

Frontend
frontend/
└── src/app/
    ├── page.tsx              # Landing page
    ├── deals/                # Deals listing & details
    ├── dashboard/            # User dashboard
    ├── login/                # Login page
    ├── register/             # Register page
    ├── components/           # Navbar, DealCard, etc.
    ├── context/              # AuthContext
    └── lib/                  # API helpers

🔒 Locked Deal Verification Logic
Each deal has isLocked flag
Each user has isVerified flag

Claiming a Deal:
Claim is created with status pending
Claimed deals appear in dashboard

🎨 UI & Animation Considerations
Hover & tap micro-interactions
Page transition animations
Animated navbar entrance
Using a PageWrapper.tsx file


Author:-
Saurav Tomar
