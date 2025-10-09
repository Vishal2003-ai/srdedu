import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setFeedback("");

    try {
      // Django backend call
      const res = await fetch("https://orange-spork-gx4r5q4grq72vgj-8000.app.github.dev/contact/", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});

      const data = await res.json();

      if (res.ok) {
        setFeedback("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setFeedback("❌ " + JSON.stringify(data));
      }
    } catch (err) {
      console.error(err);
      setFeedback("❌ Server error. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-muted/30 py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-12">

        {/* Left - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 flex flex-col space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Get in Touch</h2>
          <p className="text-muted-foreground leading-relaxed">
            Have questions about our courses? Need help with admission?
            Contact SRD Education Center — we’re happy to assist you!
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Phone className="text-primary w-5 h-5" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-primary w-5 h-5" />
              <span>info@srdeducationcenter.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-primary w-5 h-5" />
              <span>SRD Education Center, Etawah, Uttar Pradesh</span>
            </div>
          </div>
        </motion.div>

        {/* Right - Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 bg-card p-8 rounded-2xl shadow-lg"
        >
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Write your message..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>

          {feedback && (
            <p className="text-center text-sm mt-4 text-muted-foreground">{feedback}</p>
          )}
        </motion.div>

      </div>
    </section>
  );
}
