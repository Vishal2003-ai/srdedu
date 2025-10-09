import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <section className="bg-muted/30 py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 h-[250px] md:h-[400px] flex-shrink-0"
        >
          <img
            src="/assets/img3.jpg"
            alt="Contact SRD Education Center"
            className="w-full h-full object-cover rounded-2xl shadow-md"
          />
        </motion.div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full md:w-1/2 flex flex-col justify-center space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Get in Touch
          </h2>
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

      </div>
    </section>
  );
}
