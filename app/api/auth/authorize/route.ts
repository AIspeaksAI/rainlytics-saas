import { NextRequest, NextResponse } from "next/server"
import { createHash, randomBytes } from "crypto"

/**
 * Generate PKCE code challenge
 */
function generateCodeChallenge(): { codeVerifier: string; codeChallenge: string } {
  const codeVerifier = randomBytes(32).toString('base64url')
  const codeChallenge = createHash('sha256').update(codeVerifier).digest('base64url')
  
  return { codeVerifier, codeChallenge }
}

/**
 * Initiate Salesforce OAuth flow with PKCE
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

  // Generate PKCE parameters
  const { codeVerifier, codeChallenge } = generateCodeChallenge()

  // Build Salesforce authorization URL with PKCE
  const authUrl = new URL("https://login.salesforce.com/services/oauth2/authorize")
  authUrl.searchParams.append("response_type", "code")
  authUrl.searchParams.append("client_id", clientId)
  authUrl.searchParams.append("redirect_uri", callbackUrl)
  authUrl.searchParams.append("scope", "api refresh_token")
  authUrl.searchParams.append("code_challenge", codeChallenge)
  authUrl.searchParams.append("code_challenge_method", "S256")

  // Store code verifier in a cookie for the callback
  const response = NextResponse.redirect(authUrl.toString())
  response.cookies.set('code_verifier', codeVerifier, {
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
    maxAge: 600 // 10 minutes
  })

  return response
}

