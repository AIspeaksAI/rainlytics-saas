import { NextRequest, NextResponse } from "next/server"
import { verifyRequest } from "@/lib/auth/oauth"

// Validate date format MM/DD/YYYY
function isValidDateFormat(date: string): boolean {
  const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])\/\d{4}$/
  if (!dateRegex.test(date)) {
    return false
  }

  // Parse and validate the date is real
  const [month, day, year] = date.split("/").map(Number)
  const dateObj = new Date(year, month - 1, day)
  return (
    dateObj.getFullYear() === year &&
    dateObj.getMonth() === month - 1 &&
    dateObj.getDate() === day
  )
}

// Generate rainfall amount
function generateRainfall() {
  // Calculate rainfall amount
  const amount_mm = Math.round(Math.random() * 50 * 100) / 100
  const amount_inches = Math.round((amount_mm * 0.0393701) * 100) / 100

  return {
    amount_mm,
    amount_inches,
  }
}

export async function POST(request: NextRequest) {
  try {
    // Verify OAuth token
    const tokenPayload = await verifyRequest(request)
    if (!tokenPayload) {
      return NextResponse.json(
        {
          error: {
            code: "UNAUTHORIZED",
            message: "Valid OAuth token is required. Please authenticate using /api/auth/authorize",
            details: {},
          },
        },
        { status: 401 }
      )
    }

    // Get request body
    const body = await request.json().catch(() => null)

    if (!body) {
      return NextResponse.json(
        {
          error: {
            code: "MISSING_BODY",
            message: "Request body is required",
            details: {},
          },
        },
        { status: 400 }
      )
    }

    const { city, date } = body

    // Validate city
    if (!city || typeof city !== "string") {
      return NextResponse.json(
        {
          error: {
            code: "INVALID_CITY",
            message: "City name is required and must be a string",
            details: {
              parameter: "city",
              value: city,
            },
          },
        },
        { status: 400 }
      )
    }

    // Validate date
    if (!date || typeof date !== "string") {
      return NextResponse.json(
        {
          error: {
            code: "INVALID_DATE",
            message: "Date is required and must be a string",
            details: {
              parameter: "date",
              value: date,
            },
          },
        },
        { status: 400 }
      )
    }

    if (!isValidDateFormat(date)) {
      return NextResponse.json(
        {
          error: {
            code: "INVALID_DATE_FORMAT",
            message: "Date must be in MM/DD/YYYY format (e.g., '10/02/2025')",
            details: {
              parameter: "date",
              value: date,
            },
          },
        },
        { status: 400 }
      )
    }

    // Generate response
    const rainfall = generateRainfall()

    return NextResponse.json({
      city,
      date,
      rainfall,
    })
  } catch (error) {
    return NextResponse.json(
      {
        error: {
          code: "INTERNAL_ERROR",
          message: "An internal error occurred",
          details: {},
        },
      },
      { status: 500 }
    )
  }
}

