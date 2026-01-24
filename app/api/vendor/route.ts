import { NextResponse } from "next/server";
import { z } from "zod";

const vendorSchema = z.object({
  company: z.string().min(2, "Company name must be at least 2 characters"),
  contactName: z.string().min(2, "Contact name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  trade: z.string().min(1, "Please select a trade"),
  hasInsurance: z.boolean().optional(),
  message: z.string().optional(),
  website: z.string().max(0, "Bot detected").optional(), // Honeypot
});

// TODO: Implement rate limiting
// TODO: Integrate with SendGrid or similar email service
// TODO: Store submissions in database

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = vendorSchema.parse(body);

    // Check honeypot
    if (data.website && data.website.length > 0) {
      // Silently reject bot submissions
      return NextResponse.json({ success: true });
    }

    // Log submission (replace with actual storage/email integration)
    console.log("Vendor form submission:", {
      company: data.company,
      contactName: data.contactName,
      email: data.email,
      phone: data.phone,
      trade: data.trade,
      hasInsurance: data.hasInsurance,
      message: data.message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Send email notification
    // TODO: Store in database/CRM

    return NextResponse.json({
      success: true,
      message: "Thank you for your application. We'll review it and be in touch if there's a fit.",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      );
    }

    console.error("Vendor form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
