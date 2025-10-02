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

- Historical rainfall data API with City and Date inputs
- OAuth 2.0 authentication via Salesforce Connected Apps
- Modern UI with Tailwind CSS
- Responsive design
- Dark mode support

## API Authentication

The Rainlytics API uses OAuth 2.0 for authentication. See [SALESFORCE_OAUTH_SETUP.md](./SALESFORCE_OAUTH_SETUP.md) for detailed setup instructions.

### Quick Setup

1. Copy `env.example` to `.env.local`:
   ```bash
   cp env.example .env.local
   ```

2. Follow the [Salesforce OAuth Setup Guide](./SALESFORCE_OAUTH_SETUP.md) to create a Connected App

3. Update `.env.local` with your Salesforce credentials

4. For production deployment to Heroku, configure the environment variables in Heroku Config Vars
