"use client";

import { Instagram, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6">
        {/* About */}
        <div className="flex-1">
          <h2 className="text-xl font-bold text-white mb-4">SRD Education Center</h2>
          <p className="text-gray-400">
            Learn computer courses like CCC, O Level, DCA, ADCA, and more. Start your journey towards digital excellence today!
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="flex flex-col gap-2">
            <li><a href="/" className="hover:text-indigo-500 transition">Home</a></li>
            <li><a href="/courses" className="hover:text-indigo-500 transition">Courses</a></li>
            <li><a href="/contact" className="hover:text-indigo-500 transition">Contact</a></li>
            <li><a href="/about" className="hover:text-indigo-500 transition">About Us</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
          <ul className="flex flex-col gap-2 text-gray-400">
            <li>Email: info@srdedu.com</li>
            <li>Phone: +91 123 456 7890</li>
            <li>Address: Ekdil, Etawah, India</li>
          </ul>

          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-indigo-500 transition"><Instagram /></a>
            <a href="#" className="hover:text-indigo-500 transition"><Twitter /></a>
            <a href="#" className="hover:text-indigo-500 transition"><Linkedin /></a>
            <a href="#" className="hover:text-indigo-500 transition"><Mail /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} SRD Education Center. All rights reserved.
      </div>
    </footer>
  );
}
