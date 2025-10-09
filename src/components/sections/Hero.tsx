import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="text-center py-24 bg-gradient-to-b from-primary/10 to-background">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-bold mb-4 text-primary"
      >
        Welcome to SRD Info
      </motion.h2>
      <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
        Empowering education and technology together.  
        Learn, grow, and transform your digital future with SRD Info.
      </p>
      <Button size="lg" className="text-lg">
        Learn More
      </Button>
    </section>
  );
}
