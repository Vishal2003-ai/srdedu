/**
 * @fileoverview Defines TypeScript types for student-related data structures.
 */

// Interface for the data collected from the StudentQueryForm
export interface StudentQueryData {
  name: string;
  email: string;
  phone: string;
  courseOfInterest: string; // The primary course the student is interested in
  message?: string;        // Optional message/query
}

// You can define other related types here if needed, e.g.,
// export interface CourseDetails { ... }