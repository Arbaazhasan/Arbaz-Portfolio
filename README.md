# Arbaz Hasan — Personal Portfolio & Engineering Showcase

A production-ready personal portfolio website for **Arbaz Hasan**, Full-Stack Software Engineer.
Designed with an Apple & visionOS-inspired glassmorphism aesthetic, dual light/dark themes, interactive microservices architecture visualizers, deep-dive case studies, and a secure Node.js + Express backend with Nodemailer integration.

---

## 🚀 Live Links & Highlights

- **Distributed Media Processing Platform**:
  - Live Demo: [https://distributed-media-platform.vercel.app](https://distributed-media-platform.vercel.app)
  - GitHub: [https://github.com/Arbaazhasan/Distributed-Media-Platform](https://github.com/Arbaazhasan/Distributed-Media-Platform)
- **DecorTrove — E-commerce Platform**:
  - Live Demo: [https://client-livid-iota-e4019c1kek.vercel.app](https://client-livid-iota-e4019c1kek.vercel.app)
  - GitHub: [https://github.com/Arbaazhasan/Decor-Trove](https://github.com/Arbaazhasan/Decor-Trove)
- **GitHub**: [https://github.com/Arbaazhasan](https://github.com/Arbaazhasan)
- **LinkedIn**: [https://linkedin.com/in/arbazah](https://linkedin.com/in/arbazah)

---

## 🛠️ Architecture & Tech Stack

### Frontend (`client/`)
- **Core**: React 18 with TypeScript & Vite
- **Styling**: Tailwind CSS with custom glassmorphism design system (`backdrop-blur-xl`, saturation boost, luminous borders)
- **Icons**: Lucide React
- **Themes**: Independent Light and Dark modes with automatic system detection and `localStorage` persistence
- **Architecture Visualizer**: Interactive microservices canvas showing live data packet flow between Client UI, API Gateway, BullMQ Queue, Worker Nodes, FFmpeg, and Socket.IO signaling.

### Backend (`server/`)
- **Core**: Node.js & Express with TypeScript
- **Email Delivery**: Nodemailer supporting SMTP (Gmail App Passwords, SendGrid, Mailtrap, etc.)
- **Security & Hygiene**: Helmet, CORS, Rate Limiting (5 requests per 15 minutes per IP via `express-rate-limit`)
- **Anti-Spam Defenses**: Invisible bot honeypot fields (`company_fax`, `website_trap`) and submission speed thresholding
- **Validation**: Strict server-side validation and sanitization using `validator`
- **Development Test Mode**: Out-of-the-box local preview logger if SMTP credentials are not yet entered, preventing 500 errors during local testing.

---

## 📂 Project Structure

```
├── client/                     # React + Vite TypeScript SPA
│   ├── src/
│   │   ├── components/         # Modular UI Components
│   │   │   ├── Navbar.tsx      # Sticky glassmorphic navbar with theme toggle
│   │   │   ├── Hero.tsx        # Display typography, CTAs, and system visualizer
│   │   │   ├── SystemVisualizer.tsx # Interactive node network with packet flow
│   │   │   ├── About.tsx       # Engineering background, pillars, education
│   │   │   ├── Projects.tsx    # Apple product showcase cards
│   │   │   ├── ProjectCaseStudyModal.tsx # Interactive case study modal
│   │   │   ├── Skills.tsx      # 8 categorized skill matrices with filters
│   │   │   ├── Experience.tsx  # To The New experience & Hackathon award
│   │   │   ├── Contact.tsx     # Glassmorphic contact form with validation
│   │   │   └── Footer.tsx      # Minimalist footer & back-to-top
│   │   ├── context/
│   │   │   └── ThemeContext.tsx # Light/Dark mode provider
│   │   ├── data/
│   │   │   ├── projectsData.ts # Extensible case study & project definitions
│   │   │   ├── skillsData.ts   # 8 skill categories with tags
│   │   │   └── experienceData.ts # Work history, TMU degrees, Hackathon award
│   │   ├── types/
│   │   │   └── index.ts        # TypeScript definitions
│   │   ├── App.tsx
│   │   ├── index.css           # Glass tokens & theme variables
│   │   └── main.tsx
│   ├── index.html
│   ├── tailwind.config.js
│   └── vite.config.ts          # API proxy to localhost:5000
│
├── server/                     # Express REST API
│   ├── src/
│   │   ├── routes/
│   │   │   └── contact.ts      # Rate-limited contact submission route
│   │   ├── services/
│   │   │   └── mailer.ts       # Nodemailer service with HTML template
│   │   └── index.ts            # Express server initialization
│   ├── .env.example
│   ├── .env
│   ├── tsconfig.json
│   └── package.json
│
├── package.json                # Root orchestration scripts
└── README.md
```

---

## 💻 Local Development Setup

### 1. Prerequisites
- **Node.js**: v18 or higher (tested on Node v20.18.0)
- **npm**: v9 or higher

### 2. Install Dependencies
From the repository root:
```bash
# Install root dependencies
npm install

# Install client dependencies
cd client && npm install

# Install server dependencies
cd ../server && npm install
```

### 3. Configure Backend Environment
Navigate to `server/`:
```bash
cp .env.example .env
```
Open `server/.env` and configure your settings:

```env
PORT=5000
NODE_ENV=development
CLIENT_URL=http://localhost:5173
CONTACT_EMAIL=arbaazhasan.ah@gmail.com

# SMTP Settings (Leave empty for local console test mode)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-16-character-app-password
```

#### How to Generate a Gmail App Password:
1. Go to your **Google Account** > **Security**.
2. Under "How you sign in to Google", ensure **2-Step Verification** is turned ON.
3. Search for or select **App Passwords**.
4. Enter an App name (e.g. `Portfolio Contact Form`) and click **Create**.
5. Copy the generated 16-character code and paste it into `SMTP_PASS` in `server/.env`.
6. Set `SMTP_USER` to your Gmail address, `SMTP_HOST=smtp.gmail.com`, and `SMTP_PORT=465`.

> [!NOTE]
> If `SMTP_HOST` or `SMTP_PASS` is omitted, the server operates in **Test Mode**: submissions are validated and logged to your server console with a structured layout, allowing end-to-end testing without requiring immediate mail credentials!

### 4. Running the Project
To run both the frontend and backend concurrently:
```bash
# From the root directory:
npm run dev
```

Or run them in separate terminals:
```bash
# Terminal 1 (Backend on http://localhost:5000):
cd server && npm run dev

# Terminal 2 (Frontend on http://localhost:5173):
cd client && npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🚢 Deployment Guide

### Deploying Frontend to Vercel:
1. Push this repository to GitHub.
2. Go to [Vercel Dashboard](https://vercel.com) and click **Add New Project**.
3. Import your GitHub repository.
4. Set **Root Directory** to `client`.
5. Framework Preset: **Vite**.
6. If your backend is deployed, set an environment variable `VITE_API_BASE_URL` pointing to your backend URL (e.g., `https://api.yourdomain.com`).

### Deploying Backend to Render / Railway / DigitalOcean:
1. Set **Root Directory** to `server`.
2. Build Command: `npm install && npm run build`
3. Start Command: `npm start`
4. Set Environment Variables from `server/.env.example` in the host dashboard:
   - `PORT=5000`
   - `NODE_ENV=production`
   - `CLIENT_URL=https://your-portfolio.vercel.app`
   - `CONTACT_EMAIL=arbaazhasan.ah@gmail.com`
   - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`

---

## 📝 License
MIT License © Arbaz Hasan
