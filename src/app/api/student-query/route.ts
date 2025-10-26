// src/app/api/student-query/route.ts (Enhanced Stability)

import { NextResponse } from 'next/server';
import { detailedStudentQuerySchema } from '@/lib/validations/studentQueryForm';
import dbConnect from '@/lib/dbConnect';
import StudentQuery from '@/models/StudentQuery';


export async function POST(request: Request) {
    let body;

    // A. JSON Parsing Safety Check
    try {
        body = await request.json();
    } catch (e) {
        // This catches malformed JSON or empty body
        return NextResponse.json(
            { error: 'Invalid request format. Expected JSON body.' },
            { status: 400 }
        );
    }

    try {
        // 1. Connect to MongoDB
        await dbConnect();

        // 2. No need to parse again, body is ready.

        // 3. Validate the request body using Zod schema
        // Note: Zod is designed to validate 'unknown' data, so no need for explicit typing here.
        const validationResult = detailedStudentQuerySchema.safeParse(body);

        if (!validationResult.success) {
            // 4. Return 400 on Zod Validation Failure
            const firstError = validationResult.error.message;
            return NextResponse.json(
                { 
                    error: firstError || 'Validation failed for one or more fields.',
                    messages: validationResult.error
                },
                { status: 400 }
            );
        }

        const formData = validationResult.data;

        // 5. Save the validated data to MongoDB
        const newQuery = await StudentQuery.create(formData);
        
        // 6. Return a successful response
        return NextResponse.json(
            { 
                message: 'Query submitted successfully!',
                data: {
                    id: (newQuery._id as any).toString(),
                    name: newQuery.name,
                    email: newQuery.email,
                }
            },
            { status: 201 }
        );

    } catch (error) {
        // 7. Handles DB connection errors, Mongoose save errors, and other unexpected issues
        console.error('API Error in Student Query Route:', error);
        
        return NextResponse.json(
            { error: 'Internal Server Error. The database may be unavailable.' },
            { status: 500 }
        );
    }
    
    // ⭐️ Fallback return is now unnecessary due to comprehensive try/catch, 
    // but leaving it out can be cleaner. If you wish to keep it as absolute failsafe:
    // return NextResponse.json(
    //     { error: 'Unknown server response error.' }, 
    //     { status: 500 }
    // );
}