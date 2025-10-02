import { NextRequest, NextResponse } from "next/server"
import { exchangeCodeForToken, generateToken } from "@/lib/auth/oauth"

/**
 * OAuth callback endpoint
 * Handles the redirect from Salesforce after user authorization
 */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const code = searchParams.get("code")
  const error = searchParams.get("error")

  // Handle OAuth errors
  if (error) {
    return NextResponse.json(
      {
        error: {
          code: "OAUTH_ERROR",
          message: error,
        },
      },
      { status: 400 }
    )
  }

  // Validate authorization code
  if (!code) {
    return NextResponse.json(
      {
        error: {
          code: "MISSING_CODE",
          message: "Authorization code is required",
        },
      },
      { status: 400 }
    )
  }

  // Get code verifier from cookie
  const codeVerifier = request.cookies.get('code_verifier')?.value
  if (!codeVerifier) {
    return NextResponse.json(
      {
        error: {
          code: "MISSING_CODE_VERIFIER",
          message: "Code verifier is missing. Please restart the OAuth flow.",
        },
      },
      { status: 400 }
    )
  }

  // Exchange code for access token with PKCE
  const tokenData = await exchangeCodeForToken(code, codeVerifier)

  if (!tokenData) {
    return NextResponse.json(
      {
        error: {
          code: "TOKEN_EXCHANGE_FAILED",
          message: "Failed to exchange authorization code for access token",
        },
      },
      { status: 401 }
    )
  }

  // Extract user and org IDs from the id URL
  const idParts = tokenData.id.split("/")
  const org_id = idParts[idParts.length - 2]
  const user_id = idParts[idParts.length - 1]

  // Generate JWT token
  const jwt = await generateToken({
    access_token: tokenData.access_token,
    instance_url: tokenData.instance_url,
    user_id,
    org_id,
  })

  // Clear the code verifier cookie and return the token
  const response = NextResponse.json({
    success: true,
    token: jwt,
    message: "Authentication successful. Use this token in the Authorization header as 'Bearer <token>'",
  })
  
  response.cookies.delete('code_verifier')

  return response
}

