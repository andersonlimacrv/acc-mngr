import { motion, type Variants } from "framer-motion";
import { Check } from "lucide-react";


const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative backdrop-blur-xl bg-card/50 border border-border/40 rounded-xl ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-xl pointer-events-none" />
      <div className="relative">{children}</div>
    </div>
  );
}
export function Pricing() {
  const plans = [
    {
      name: "Developer",
      price: "Free",
      description: "Perfect for side projects and experimentation",
      features: ["Up to 1,000 MAU", "Basic authentication", "Community support", "Standard SLA"],
      cta: "Start Free",
      popular: false,
    },
    {
      name: "Pro",
      price: "$49",
      period: "/month",
      description: "For growing teams that need more power",
      features: ["Up to 10,000 MAU", "Advanced MFA", "Priority support", "Custom domain", "Audit logs"],
      cta: "Start Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For organizations with advanced needs",
      features: ["Unlimited MAU", "Dedicated support", "Custom SLA", "On-premise option", "SSO/SAML"],
      cta: "Contact Sales",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-primary font-medium uppercase tracking-wider">Pricing</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">
            Simple, transparent pricing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Start free and scale as you grow. No hidden fees, no surprises.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {plans.map((plan, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <GlassCard className={`p-6 h-full flex flex-col ${plan.popular ? "border-primary/60 ring-1 ring-primary/20" : ""}`}>
                {plan.popular && (
                  <div className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium w-fit mb-4">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <div className="mt-4 mb-2">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                </div>
                <p className="text-sm text-muted-foreground mb-6">{plan.description}</p>
                
                <div className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  className={`w-full py-3 rounded-lg font-medium transition-colors ${
                    plan.popular
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "border border-border hover:bg-muted/50"
                  }`}
                >
                  {plan.cta}
                </button>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}