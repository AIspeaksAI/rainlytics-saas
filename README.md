# Rainlytics SaaS

A Next.js application for providing historical rainfall data via REST API.

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Heroku Deployment

This app is configured for Heroku deployment with automated GitHub integration.

### Prerequisites

- Heroku CLI installed
- GitHub repository connected to Heroku app

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```bash
cp .env.example .env.local
```

Update the following variables:
- `NEXT_PUBLIC_APP_URL`: Your Heroku app URL (e.g., `https://your-app-name.herokuapp.com`)

### Deployment

The app will automatically deploy when you push to the main branch. Manual deployment:

```bash
# Login to Heroku
heroku login

# Deploy to Heroku
git push heroku main
```

### Configuration

The app is configured with:
- Node.js 18+ requirement
- Standalone output for optimal Heroku performance
- Unoptimized images for static hosting
- TypeScript and ESLint errors ignored during builds

## Features

- Historical rainfall data API
- Modern UI with Tailwind CSS
- Responsive design
- Dark mode support
