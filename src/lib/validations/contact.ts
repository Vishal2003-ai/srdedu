import { z } from 'zod';

/**
 * @fileoverview Defines the Zod schema for the contact form submission.
 */

// -----------------------------------------------------------------------------
// Contact Form Schema
// -----------------------------------------------------------------------------

export const contactFormSchema = z.object({
  // Name field: must be a string and is required
  name: z.string().min(1, { message: "Name is required." }),
  
  // Email field: must be a valid email format
  email: z.string().email({ message: "Invalid email address." }),
  
  // Subject field: must be a string and is required
  subject: z.string().min(1, { message: "Subject is required." }),
  
  // Message field: must be a string and is required
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
  
  // Optional field to capture which course the user is interested in
  courseInterest: z.string().optional(),
});

// Export the inferred type for type safety in the API handler
export type ContactFormInput = z.infer<typeof contactFormSchema>;