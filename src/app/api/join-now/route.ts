import { NextResponse } from "next/server";
import {
  detailedStudentQuerySchema,
  DetailedStudentQueryInput,
} from "@/lib/validations/studentQueryForm";
import { StudentQueryData } from "@/types/student";

/**
 * @fileoverview Next.js API Route Handler for student query/join form submissions.
 * Endpoint: /api/join-query
 */

// 🚨 MOCK DATABASE: Replace this with your actual database client (e.g., Prisma, Mongoose).
const db = {
  studentQueries: {
    create: async (data: StudentQueryData) => {
      // 📝 REAL LOGIC: Replace this console log and timeout with database insertion logic.
      console.log("--- Storing New Student Query ---");
      console.log(`Student: ${data.name}, Email: ${data.email}`);
      console.log(`Course Interest: ${data.courseOfInterest}`);
      await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate DB latency
      console.log("--- Query Stored Successfully ---");
      return { id: Math.random().toString(36).substring(2), ...data };
    },
  },
};

// -----------------------------------------------------------------------------
// POST Handler (To store form data)
// -----------------------------------------------------------------------------

export async function POST(request: Request) {
  try {
    // 1. Parse the request body
    const body: DetailedStudentQueryInput = await request.json();

    // 2. Validate the request body
    const validationResult = detailedStudentQuerySchema.safeParse(body);

    if (!validationResult.success) {
      // If validation fails, return a 400 Bad Request
      return NextResponse.json(
        {
          message: "Invalid input. Please fill all required fields correctly.",
          errors: validationResult.error,
        },
        { status: 400 }
      );
    }

    // Map validated data to StudentQueryData type
    const formData = validationResult.data;
    const mappedData: StudentQueryData = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone ?? "",
      courseOfInterest: formData.courseInterest[0] ?? "", // Take the first course as primary
      message: formData.specificQuestions,
    };

    // 3. Store the mapped data in the database
    const newQuery = await db.studentQueries.create(mappedData);

    // 4. Return a successful response
    return NextResponse.json(
      {
        message:
          "Your query has been successfully submitted! We will contact you shortly.",
        data: newQuery,
      },
      { status: 201 } // 201 Created status
    );
  } catch (error) {
    console.error("API Error in Join Query Route:", error);

    // 5. Handle unexpected server errors
    return NextResponse.json(
      { message: "Internal Server Error. Could not process your request." },
      { status: 500 }
    );
  }
}
