"use client";

import { motion } from "framer-motion";
import { BookOpen, Code, Monitor } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Course {
  title: string;
  slug: string;
  desc: string;
  icon: React.ElementType;
}

export default function CoursesSection() {
  const computerCourses: Course[] = [
    { title: "CCC", slug: "ccc", desc: "Course on Computer Concepts – Government certified basic computer course.", icon: BookOpen },
    { title: "O Level", slug: "o-level", desc: "NIELIT certified foundational IT course for professional skills.", icon: BookOpen },
    { title: "DCA", slug: "dca", desc: "Diploma in Computer Applications – ideal for office & data management skills.", icon: BookOpen },
    { title: "ADCA", slug: "adca", desc: "Advanced Diploma in Computer Applications – professional-level computer education.", icon: BookOpen },
    { title: "MDCA", slug: "mdca", desc: "Master Diploma in Computer Applications – complete IT training course.", icon: BookOpen },
    { title: "PGDCA", slug: "pgdca", desc: "Post Graduate Diploma in Computer Applications – advanced IT qualification.", icon: BookOpen },
    { title: "Basic Computer", slug: "basic-computer", desc: "Fundamentals of computer, MS Office, Internet, and Typing.", icon: BookOpen },
    { title: "Advance Excel", slug: "advance-excel", desc: "Master Excel functions, formulas, and data analysis tools.", icon: BookOpen },
  ];

  const devCourses: Course[] = [
    { title: "Web Development", slug: "web-development", desc: "Frontend + Backend web development for modern websites.", icon: Code },
    { title: "Python Programming", slug: "python-programming", desc: "Learn Python from basics to advanced for automation and AI.", icon: Code },
    { title: "Full Stack Development", slug: "full-stack-development", desc: "Complete MERN stack (MongoDB, Express, React, Node.js).", icon: Monitor },
    { title: "HTML", slug: "html", desc: "Structure web pages using HTML5.", icon: Code },
    { title: "CSS", slug: "css", desc: "Style and design web layouts using CSS3.", icon: Code },
    { title: "JavaScript", slug: "javascript", desc: "Add interactivity and logic to websites.", icon: Code },
    { title: "Tailwind CSS", slug: "tailwind-css", desc: "Rapid modern UI design using Tailwind CSS.", icon: Code },
    { title: "Bootstrap", slug: "bootstrap", desc: "Responsive website layouts with Bootstrap 5.", icon: Code },
    { title: "Node.js", slug: "nodejs", desc: "Backend JavaScript for building APIs and servers.", icon: Code },
    { title: "MongoDB", slug: "mongodb", desc: "Learn NoSQL database for modern web apps.", icon: Code },
  ];

  return (
    <main className="bg-gray-50 text-gray-800 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Computer Courses */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-indigo-600 mb-10"
        >
          Computer Courses
        </motion.h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
          {computerCourses.map((course, idx) => {
            const Icon = course.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <Card className="hover:shadow-lg transition-all h-full flex flex-col justify-between">
                  <CardHeader className="flex items-center gap-2">
                    <Icon className="w-6 h-6 text-indigo-600" />
                    <CardTitle>{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">{course.desc}</CardDescription>
                    <a href={`/courses/${course.slug}`}>
                      <Button variant="outline" className="mt-4 w-full">
                        View Details
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Dev / Programming Courses */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center text-indigo-600 mb-10"
        >
          Programming & Development
        </motion.h1>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {devCourses.map((course, idx) => {
            const Icon = course.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
              >
                <Card className="hover:shadow-lg transition-all h-full flex flex-col justify-between">
                  <CardHeader className="flex items-center gap-2">
                    <Icon className="w-6 h-6 text-indigo-600" />
                    <CardTitle>{course.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">{course.desc}</CardDescription>
                    <a href={`/courses/${course.slug}`}>
                      <Button variant="outline" className="mt-4 w-full">
                        View Details
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
