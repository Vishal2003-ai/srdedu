import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold">
          SRD Education Center
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          <NavLink to="/" className={({ isActive }) => (isActive ? "font-bold underline" : "")}>
            Home
          </NavLink>
          <NavLink to="/courses" className={({ isActive }) => (isActive ? "font-bold underline" : "")}>
            Courses
          </NavLink>
          <NavLink to="/about" className={({ isActive }) => (isActive ? "font-bold underline" : "")}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => (isActive ? "font-bold underline" : "")}>
            Contact
          </NavLink>
        </nav>

        {/* Mobile Menu Button */}
        <Button variant="secondary" size="icon" className="md:hidden" onClick={() => setOpen(!open)}>
          <Menu />
        </Button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-primary text-center py-4 space-y-2">
          <NavLink to="/" onClick={() => setOpen(false)} className="block py-1">
            Home
          </NavLink>
          <NavLink to="/courses" onClick={() => setOpen(false)} className="block py-1">
            Courses
          </NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)} className="block py-1">
            About
          </NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)} className="block py-1">
            Contact
          </NavLink>
        </div>
      )}
    </header>
  );
}
