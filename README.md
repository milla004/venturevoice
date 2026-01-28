# VentureVoice - AI Voice Agent for Home Service Businesses

Turn dead leads into booked revenue with our ultra-fast AI voice agent that contacts every lead within 60 seconds.

## Features

- 🚀 **Speed to Lead** - AI calls within 60 seconds
- 📞 **24/7 Availability** - Never miss a lead
- 📅 **Automated Booking** - Appointments go straight to your calendar
- 💬 **Human-Like Conversations** - Powered by Vogent AI

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **Voice AI**: Vogent
- **Database**: Prisma (PostgreSQL)

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy `.env.example` to `.env` and fill in your API keys:
   ```bash
   cp .env.example .env
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Environment Variables

- `DATABASE_URL` - PostgreSQL connection string
- `VOGENT_API_KEY` - Vogent AI API key
- `VOGENT_PHONE_NUMBER_ID` - Vogent phone number ID
- `VOGENT_AGENT_ID` - Vogent agent ID
- `EMAILIT_API_KEY` - EmailIt API key for email sending

## Deployment

This project is optimized for deployment on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/milla004/venturevoice)

## License

© 2024 VentureVoice AI. All rights reserved.
