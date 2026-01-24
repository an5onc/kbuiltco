import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  city: z.string().optional(),
  projectType: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  website: z.string().max(0, "Bot detected").optional(), // Honeypot
});

// TODO: Implement rate limiting
// TODO: Integrate with SendGrid or similar email service
// TODO: Integrate with CRM (HubSpot, Salesforce, etc.)

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = contactSchema.parse(body);

    // Check honeypot
    if (data.website && data.website.length > 0) {
      // Silently reject bot submissions
      return NextResponse.json({ success: true });
    }

    // Log submission (replace with actual email/CRM integration)
    console.log("Contact form submission:", {
      name: data.name,
      email: data.email,
      phone: data.phone,
      city: data.city,
      projectType: data.projectType,
      message: data.message,
      timestamp: new Date().toISOString(),
    });

    // TODO: Send email notification
    // await sendEmail({
    //   to: "info@kbuiltco.com",
    //   subject: `New Contact Form Submission from ${data.name}`,
    //   ...
    // });

    return NextResponse.json({
      success: true,
      message: "Thank you for your message. We'll be in touch soon!",
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      );
    }

    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
