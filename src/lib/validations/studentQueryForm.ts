import { z } from 'zod';

/**
 * @fileoverview Defines the Zod schema for the detailed StudentQueryForm submission.
 */

// -----------------------------------------------------------------------------
// Detailed Student Query Form Schema
// -----------------------------------------------------------------------------

export const detailedStudentQuerySchema = z.object({
  // Name (Required)
  name: z.string().min(1, { message: "Full Name is required." }),
  
  // Email (Required, Valid format)
  email: z.string().email({ message: "Invalid email address." }),
  
  // Phone (Optional, but checks format if present)
  // The regex is for a basic global phone number format validation
  phone: z.string().optional().refine(val => {
    if (val && val.length > 0) {
        // Basic phone number validation, matching the form's logic (e.g., +1234567890)
        return /^[\+]?[1-9][\d]{0,15}$/.test(val.replace(/\s/g, ''));
    }
    return true; // Optional field, so it's fine if empty
  }, { message: "Please enter a valid phone number." }),
  
  // Education Level (Required, must be one of the defined values)
  educationLevel: z.enum([
    "high-school", 
    "undergraduate", 
    "graduate", 
    "working-professional", 
    "other"
  ], {
    error: "Please select your education level.",
  }),
  
  // Course Interest (Required, must select at least one)
  courseInterest: z.array(z.string()).min(1, { 
    message: "Please select at least one course interest." 
  }),
  
  // Current Skills (Optional)
  currentSkills: z.string().optional(),
  
  // Specific Questions (Required, needs a minimum length for a meaningful query)
  specificQuestions: z.string().min(10, { 
    message: "Please provide your specific questions or learning goals." 
  }),

  // Preferred Contact Method (Defaulted to 'email' in the form)
  preferredContactMethod: z.enum(["email", "phone", "both"]),
});

// Export the inferred type for the API handler
export type DetailedStudentQueryInput = z.infer<typeof detailedStudentQuerySchema>;