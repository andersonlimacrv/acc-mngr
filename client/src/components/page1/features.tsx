import { motion } from "framer-motion";
import { Shield, Fingerprint, Activity, Zap, Database, Lock } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "SOC2 Type II Compliant",
    description: "Built from day one to meet the strictest compliance standards for enterprise organizations."
  },
  {
    icon: Fingerprint,
    title: "Biometric Auth",
    description: "Native WebAuthn and Passkeys support. Passwordless authentication that actually works."
  },
  {
    icon: Activity,
    title: "Anomaly Detection",
    description: "Real-time AI monitoring for impossible travel, brute force, and credential stuffing."
  },
  {
    icon: Zap,
    title: "Edge Runtime",
    description: "Sub-10ms verification times globally. Run your auth checks directly at the edge."
  },
  {
    icon: Database,
    title: "Data Residency",
    description: "Keep PII in the region you specify. Full GDPR and CCPA compliance out of the box."
  },
  {
    icon: Lock,
    title: "Hardware Backed",
    description: "All keys are stored in FIPS 140-2 Level 3 certified Hardware Security Modules."
  }
];

export function Features() {
  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Engineered for <span className="text-primary">Scale</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We don't do "good enough." Every feature is built with extreme prejudice towards performance and security.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 border border-border bg-card/50 hover:bg-card transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-0.5 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
              <feature.icon className="w-8 h-8 text-primary mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-bold font-sans mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
