import { NextResponse } from 'next/server';
import { contactFormSchema, ContactFormInput } from '@/lib/validations/contact';
// The path above assumes you created the schema file at src/lib/validations/contact.ts

/**
 * @fileoverview Next.js API Route Handler for the contact form submission.
 */

// -----------------------------------------------------------------------------
// POST Handler
// -----------------------------------------------------------------------------

export async function POST(request: Request) {
  try {
    // 1. Parse the request body
    const body: ContactFormInput = await request.json();

    // 2. Validate the request body against the Zod schema
    const validationResult = contactFormSchema.safeParse(body);

    if (!validationResult.success) {
      // 3. If validation fails, return a 400 Bad Request error
      const errorMessages = validationResult.error
      return NextResponse.json(
        { message: 'Validation failed', errors: errorMessages },
        { status: 400 }
      );
    }

    const formData = validationResult.data;

    // 4. --- Implement Actual Submission Logic Here ---
    // This is where you would handle the validated data, for example:
    
    // a) Send an email using a service like Nodemailer or Resend
    console.log('--- Contact Form Submission Received ---');
    console.log(`Name: ${formData.name}`);
    console.log(`Email: ${formData.email}`);
    console.log(`Subject: ${formData.subject}`);
    console.log(`Message: ${formData.message.substring(0, 50)}...`);
    console.log('----------------------------------------');
    
    // Example: await sendEmail({ 
    //   to: "admissions@careermantra.com", 
    //   subject: `New Contact Inquiry: ${formData.subject}`,
    //   body: `From: ${formData.name} (${formData.email})\nMessage: ${formData.message}` 
    // });
    
    // b) Save the data to a database (e.g., MongoDB, PostgreSQL)
    // Example: await db.contactRequests.create({ data: formData });
    
    // 5. Return a successful response
    return NextResponse.json(
      { message: 'Your message has been successfully sent! We will get back to you within 24 hours.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('API Error in Contact Route:', error);
    
    // Handle potential non-JSON body errors or other unexpected server errors
    return NextResponse.json(
      { message: 'Internal Server Error' },
      { status: 500 }
    );
  }
}