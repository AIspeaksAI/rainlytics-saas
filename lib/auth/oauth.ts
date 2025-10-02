import { SignJWT, jwtVerify } from "jose"
import { NextRequest } from "next/server"

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "default_dev_secret_key_12345"
)

export interface TokenPayload {
  access_token: string
  instance_url: string
  user_id: string
  org_id: string
  iat?: number
  exp?: number
}

/**
 * Generate a JWT token for authenticated sessions
 */
export async function generateToken(payload: Omit<TokenPayload, "iat" | "exp">): Promise<string> {
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(JWT_SECRET)

  return token
}

/**
 * Verify and decode a JWT token
 */
export async function verifyToken(token: string): Promise<TokenPayload | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET)
    return payload as TokenPayload
  } catch (error) {
    return null
  }
}

/**
 * Extract Bearer token from Authorization header
 */
export function extractBearerToken(request: NextRequest): string | null {
  const authHeader = request.headers.get("authorization")
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return null
  }
  return authHeader.substring(7)
}

/**
 * Verify OAuth token from request
 */
export async function verifyRequest(request: NextRequest): Promise<TokenPayload | null> {
  const token = extractBearerToken(request)
  if (!token) {
    return null
  }
  return await verifyToken(token)
}

/**
 * Exchange Salesforce authorization code for access token
 */
export async function exchangeCodeForToken(code: string): Promise<{
  access_token: string
  instance_url: string
  id: string
} | null> {
  try {
    const params = new URLSearchParams({
      grant_type: "authorization_code",
      code,
      client_id: process.env.SALESFORCE_CLIENT_ID || "",
      client_secret: process.env.SALESFORCE_CLIENT_SECRET || "",
      redirect_uri: process.env.SALESFORCE_CALLBACK_URL || "",
    })

    const response = await fetch("https://login.salesforce.com/services/oauth2/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    })

    if (!response.ok) {
      return null
    }

    return await response.json()
  } catch (error) {
    return null
  }
}

