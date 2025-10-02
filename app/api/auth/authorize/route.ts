import { NextRequest, NextResponse } from "next/server"

/**
 * Initiate Salesforce OAuth flow
 * Redirects user to Salesforce login
 */
export async function GET(request: NextRequest) {
  const clientId = process.env.SALESFORCE_CLIENT_ID
  const callbackUrl = process.env.SALESFORCE_CALLBACK_URL

  if (!clientId || !callbackUrl) {
    return NextResponse.json(
      {
        error: {
          code: "CONFIGURATION_ERROR",
          message: "OAuth configuration is missing",
        },
      },
      { status: 500 }
    )
  }

  // Build Salesforce authorization URL
  const authUrl = new URL("https://login.salesforce.com/services/oauth2/authorize")
  authUrl.searchParams.append("response_type", "code")
  authUrl.searchParams.append("client_id", clientId)
  authUrl.searchParams.append("redirect_uri", callbackUrl)
  authUrl.searchParams.append("scope", "api refresh_token")

  return NextResponse.redirect(authUrl.toString())
}

