# Salesforce OAuth 2.0 Setup Guide

This guide provides step-by-step instructions for setting up OAuth 2.0 authentication with Salesforce Connected Apps for the Rainlytics API.

## Overview

The Rainlytics API uses OAuth 2.0 to authenticate requests. This ensures secure access to rainfall data through Salesforce Connected Apps.

## Part 1: Creating a Salesforce Connected App

### Step 1: Access Salesforce Setup

1. Log in to your Salesforce organization
2. Click on the **gear icon** in the top-right corner
3. Select **Setup** from the dropdown menu

### Step 2: Navigate to App Manager

1. In the Quick Find box (left sidebar), type `App Manager`
2. Click on **App Manager** under Apps

### Step 3: Create New Connected App

1. Click the **New Connected App** button in the top-right corner
2. Fill in the **Basic Information** section:
   - **Connected App Name**: `Rainlytics API`
   - **API Name**: `Rainlytics_API` (auto-populated)
   - **Contact Email**: Your email address

### Step 4: Configure OAuth Settings

1. Check the box **Enable OAuth Settings**
2. Set the **Callback URL**:
   - For **Production/Heroku**: `https://your-app-name.herokuapp.com/api/auth/callback`
   - For **Development**: `http://localhost:3000/api/auth/callback`
   
3. In **Selected OAuth Scopes**, add the following scopes:
   - **Access and manage your data (api)**
   - **Perform requests on your behalf at any time (refresh_token, offline_access)**

4. Click **Add** to move them to the Selected OAuth Scopes list

5. Check the box **Require Secret for Web Server Flow**

6. Leave other settings as default

### Step 5: Save and Note Credentials

1. Click **Save** at the bottom of the page
2. Click **Continue** on the confirmation page
3. You will see your **Consumer Key** (Client ID)
4. Click **Click to reveal** next to Consumer Secret to see your **Consumer Secret** (Client Secret)

**IMPORTANT**: Copy and save both the Consumer Key and Consumer Secret. You'll need these for configuration.

### Step 6: Configure OAuth Policies (Optional but Recommended)

1. After saving, scroll down to **OAuth Policies**
2. Set **Permitted Users**: Choose based on your needs
   - `All users may self-authorize` (for public API)
   - `Admin approved users are pre-authorized` (for restricted access)
3. Set **IP Relaxation**: `Relax IP restrictions`
4. Click **Save**

## Part 2: Configuring Heroku Environment Variables

### Step 1: Access Heroku Dashboard

1. Log in to your Heroku account at https://dashboard.heroku.com
2. Select your app from the dashboard

### Step 2: Navigate to Settings

1. Click on the **Settings** tab
2. Scroll down to the **Config Vars** section
3. Click **Reveal Config Vars**

### Step 3: Add Environment Variables

Add the following configuration variables (click **Add** after each entry):

| Key | Value | Description |
|-----|-------|-------------|
| `SALESFORCE_CLIENT_ID` | Your Consumer Key from Salesforce | The Client ID from your Connected App |
| `SALESFORCE_CLIENT_SECRET` | Your Consumer Secret from Salesforce | The Client Secret from your Connected App |
| `SALESFORCE_CALLBACK_URL` | `https://your-app-name.herokuapp.com/api/auth/callback` | Replace `your-app-name` with your actual Heroku app name |
| `JWT_SECRET` | Generate a random string (32+ characters) | Used for signing JWT tokens. Use a strong random string |
| `NEXT_PUBLIC_APP_URL` | `https://your-app-name.herokuapp.com` | Your application's public URL |

### Step 4: Generate a Strong JWT Secret

You can generate a strong JWT secret using one of these methods:

**Option 1: Using OpenSSL (Mac/Linux)**
```bash
openssl rand -base64 32
```

**Option 2: Using Node.js**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

**Option 3: Online Generator**
Visit https://www.uuidgenerator.net/guid and use the generated GUID

Copy the generated value and paste it as the `JWT_SECRET` value in Heroku.

### Step 5: Verify Configuration

1. Ensure all 5 environment variables are added
2. Double-check that there are no extra spaces in the values
3. Make sure the callback URL in Heroku matches exactly what you set in Salesforce

## Part 3: Testing the OAuth Flow

### Step 1: Initiate Authentication

Make a GET request to the authorization endpoint:

```bash
curl -X GET "https://your-app-name.herokuapp.com/api/auth/authorize"
```

Or open this URL in your browser:
```
https://your-app-name.herokuapp.com/api/auth/authorize
```

### Step 2: Complete Salesforce Login

1. You'll be redirected to Salesforce login page
2. Enter your Salesforce credentials
3. Click **Allow** to authorize the app

### Step 3: Receive Your Token

After successful authentication, you'll receive a JSON response with your Bearer token:

```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "message": "Authentication successful. Use this token in the Authorization header as 'Bearer <token>'"
}
```

**Save this token** - you'll need it for API requests.

### Step 4: Test API Request

Use your token to make an authenticated API request:

```bash
curl -X POST "https://your-app-name.herokuapp.com/api/v1/rainfall" \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "city": "New York",
    "date": "10/02/2025"
  }'
```

## Troubleshooting

### Error: "redirect_uri_mismatch"

**Problem**: The callback URL doesn't match what's configured in Salesforce.

**Solution**:
1. Verify the callback URL in Salesforce Connected App settings
2. Verify the `SALESFORCE_CALLBACK_URL` in Heroku Config Vars
3. Ensure they match exactly (including http/https)

### Error: "invalid_client_id"

**Problem**: The Client ID is incorrect or not found.

**Solution**:
1. Go back to Salesforce Connected App settings
2. Copy the Consumer Key again
3. Update the `SALESFORCE_CLIENT_ID` in Heroku Config Vars

### Error: "UNAUTHORIZED"

**Problem**: Token is missing or invalid.

**Solution**:
1. Ensure you're including the Authorization header
2. Format: `Authorization: Bearer YOUR_TOKEN`
3. Get a new token if yours has expired (tokens expire after 24 hours)

### Error: "CONFIGURATION_ERROR"

**Problem**: Environment variables are not set in Heroku.

**Solution**:
1. Check that all required Config Vars are set in Heroku
2. Restart your Heroku app after adding Config Vars:
   ```bash
   heroku restart -a your-app-name
   ```

## Security Best Practices

1. **Never commit** your Client Secret or JWT Secret to version control
2. **Rotate secrets** regularly (every 90 days recommended)
3. **Use HTTPS** always in production
4. **Monitor** your Connected App usage in Salesforce Setup
5. **Set IP restrictions** if your API should only be accessed from specific locations
6. **Enable MFA** on your Salesforce account for additional security

## Token Expiration

- JWT tokens expire after **24 hours**
- When a token expires, users must re-authenticate through `/api/auth/authorize`
- Consider implementing refresh tokens for longer-lived sessions

## Additional Resources

- [Salesforce Connected Apps Documentation](https://help.salesforce.com/s/articleView?id=sf.connected_app_overview.htm)
- [OAuth 2.0 Web Server Flow](https://help.salesforce.com/s/articleView?id=sf.remoteaccess_oauth_web_server_flow.htm)
- [Heroku Config Vars](https://devcenter.heroku.com/articles/config-vars)

## Support

For issues related to:
- **Salesforce setup**: Contact your Salesforce administrator
- **Heroku configuration**: Check Heroku logs with `heroku logs --tail -a your-app-name`
- **API questions**: Refer to the API documentation at `/docs`

