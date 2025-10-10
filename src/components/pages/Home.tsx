"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,  
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Link } from "react-router-dom";
export default function Home() {
  const blogPosts = [
    {
      title: "Course on Computer Concepts (CCC)",
      category: "CCC",
      date: "3 Months Course",
      desc: "The CCC course is designed to equip learners with basic computer skills and digital literacy. Students learn about fundamental computer concepts, MS Office (Word, Excel, PowerPoint), internet usage, email communication, and online safety. It is ideal for beginners and government job aspirants where computer knowledge is mandatory.",
    },
    {
      title: "O Level Computer Course (NIELIT)",
      category: "O Level",
      date: "1 Year Course",
      desc: "The O Level course by NIELIT is an advanced-level certification focusing on programming, database management, web design, and networking. The syllabus includes topics like IT Tools and Business Systems, Internet Technology, Python Programming, Web Application Development, and Project Work. It prepares students for software and IT support roles.",
    },
    {
      title: "Advanced Diploma in Computer Applications (ADCA)",
      category: "ADCA",
      date: "1 Year Course",
      desc: "ADCA is a professional diploma course covering advanced topics like Computer Fundamentals, MS Office, Tally with GST, DTP (Photoshop, CorelDraw), Web Designing (HTML, CSS, JavaScript), and Basic Programming. This course is perfect for students seeking jobs in office administration, accounting, or web designing fields.",
    },
  ];
  
  const courses = [
    {
      title: "Python Programming",
      img: "/python.webp",
      desc: "Learn Python from basics to advanced — covering syntax, data structures, OOP, Django, and automation with hands-on projects.",
    },
    {
      title: "Web Development (HTML, CSS, JavaScript)",
      img: "https://images.unsplash.com/photo-1504805572947-34fad45aed93",
      desc: "Master front-end web development using HTML5, CSS3, and JavaScript. Build responsive websites and learn modern UI/UX design.",
    },
    {
      title: "Next.js Full-Stack Development",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      desc: "Develop dynamic full-stack apps using Next.js, Tailwind CSS, and TypeScript. Learn API routes, SSR, and deployment best practices.",
    },
    {
      title: "Artificial Intelligence & Machine Learning",
      img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      desc: "Explore AI tools, machine learning models, and automation. Understand neural networks, ChatGPT APIs, and data analysis basics.",
    },
    {
      title: "Video Editing & Content Creation",
      img: "/edting.png",
      desc: "Learn professional video editing with CapCut, Premiere Pro, and mobile tools. Create engaging reels, YouTube videos, and intros.",
    },
    {
      title: "Canva Graphic Designing",
      img: "/grapic.jpg",
      desc: "Design logos, posters, social media posts, and presentations using Canva. Perfect for beginners and digital marketers.",
    },
  ];
  return (
    <main className="bg-gray-50 text-gray-800">
      {" "}
      {/* 🟢 HERO SECTION */}{" "}
      <section className="bg-gray-100 text-gray-900 min-h-screen flex items-center justify-center px-6">
        {" "}
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {" "}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {" "}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
              {" "}
              Welcome to{" "}
              <span className="text-indigo-600">SRD Education Center</span>{" "}
            </h1>{" "}
            <p className="text-lg text-gray-700 mb-6">
              {" "}
              Learn computer courses like{" "}
              <strong>CCC, O Level, DCA, ADCA</strong> and more with expert
              guidance. Start your journey toward digital excellence today!{" "}
            </p>{" "}
            <div className="flex justify-center md:justify-start gap-4">
              {" "}
              <Link to="/courses">
                {" "}
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                  {" "}
                  Explore Courses{" "}
                </Button>{" "}
              </Link>{" "}
              <Link to="/contact">
                {" "}
                <Button
                  variant="outline"
                  className="text-indigo-600 border-indigo-600 hover:bg-indigo-50"
                >
                  {" "}
                  Contact Us{" "}
                </Button>{" "}
              </Link>{" "}
            </div>{" "}
          </motion.div>{" "}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {" "}
            <img
              src="/assets/img4.jpg"
              alt="Education illustration"
              className="rounded-2xl shadow-lg w-full object-cover"
            />{" "}
          </motion.div>{" "}
        </div>{" "}
      </section>{" "}
      {/* 🟣 BLOG SECTION */}{" "}
      <section className="py-24 px-5">
        {" "}
        <div className="p-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {blogPosts.map((post, index) => (
        <div
          key={index}
          className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
        >
          <h3 className="text-xl font-bold text-blue-600 mb-2">{post.title}</h3>
          <p className="text-sm text-gray-500 mb-1">
            <strong>Category:</strong> {post.category}
          </p>
          <p className="text-sm text-gray-500 mb-4">
            <strong>Duration:</strong> {post.date}
          </p>
          <p className="text-gray-700 text-sm leading-relaxed">{post.desc}</p>
        </div>
      ))}
    </div>{" "}
      </section>{" "}
      {/* 🔵 COURSES SECTION */}{" "}
      <section className="py-24 px-5 bg-gray-50">
      <div className="max-w-6xl mx-auto flex flex-col">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-semibold text-gray-900 mb-4">Our Professional Courses</h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Learn trending technologies and creative skills to boost your career in IT and digital media. 
            Choose your path and start learning today!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {courses.map((course, idx) => (
            <Card
              key={idx}
              className="hover:shadow-xl hover:-translate-y-1 transition duration-300 rounded-2xl overflow-hidden"
            >
              <div className="h-60 overflow-hidden">
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <CardTitle className="text-lg font-semibold text-indigo-700">{course.title}</CardTitle>
                <CardDescription className="text-gray-700 mt-2">{course.desc}</CardDescription>
                <Link
                  className="text-indigo-600 mt-4 inline-flex items-center font-medium hover:underline"
                  to="#"
                >
                  Learn More →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>{" "}
    </main>
  );
}
