"use client";

import { motion, type Variants } from "framer-motion";
import { Shield, Lock, Key, Fingerprint, Users, Zap, ArrowRight, Check, Code2, Globe, Database, ChevronRight } from "lucide-react";

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

// Grid Background Component
function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
                           linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
      {/* Radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
    </div>
  );
}

// Glass Card Component
function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative backdrop-blur-xl bg-card/50 border border-border/40 rounded-xl ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-xl pointer-events-none" />
      <div className="relative">{children}</div>
    </div>
  );
}

// Navigation
function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 backdrop-blur-xl bg-background/80"
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Shield className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-semibold tracking-tight">acc-mngr</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Features</a>
          <a href="#security" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Security</a>
          <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Pricing</a>
          <a href="#docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Docs</a>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-sm text-muted-foreground hover:text-foreground transition-colors px-4 py-2">
            Sign In
          </button>
          <button className="text-sm bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </motion.nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <GridBackground />
      
      <div className="relative max-w-7xl mx-auto px-6 py-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Badge */}
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/60 bg-muted/50 backdrop-blur-sm mb-8">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Enterprise-grade security for modern applications</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-balance"
          >
            <span className="text-foreground">Identity that</span>
            <br />
            <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              scales with you
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty"
          >
            Premium authentication and access management built for developers who demand
            security, performance, and elegant integration.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20">
              Start Building
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border/60 text-foreground hover:bg-muted/50 transition-colors">
              <Code2 className="w-4 h-4" />
              View Documentation
            </button>
          </motion.div>

          {/* Code Preview */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 max-w-2xl mx-auto"
          >
            <GlassCard className="p-1">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border/40">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-primary/60" />
                  <div className="w-3 h-3 rounded-full bg-accent/60" />
                </div>
                <span className="text-xs text-muted-foreground font-mono ml-2">auth.config.ts</span>
              </div>
              <pre className="p-4 text-left text-sm font-mono overflow-x-auto">
                <code className="text-muted-foreground">
                  <span className="text-primary">import</span> {"{ AccMngr }"} <span className="text-primary">from</span> <span className="text-accent">{'"@acc-mngr/sdk"'}</span>;{"\n\n"}
                  <span className="text-primary">const</span> auth = <span className="text-primary">new</span> <span className="text-foreground">AccMngr</span>{"({\n"}
                  {"  "}apiKey: process.env.<span className="text-accent">ACC_MNGR_KEY</span>,{"\n"}
                  {"  "}providers: [<span className="text-accent">{'"google"'}</span>, <span className="text-accent">{'"github"'}</span>],{"\n"}
                  {"  "}mfa: <span className="text-primary">true</span>,{"\n"}
                  {"});"}{"\n\n"}
                  <span className="text-muted-foreground/60">{"// That's it. You're protected."}</span>
                </code>
              </pre>
            </GlassCard>
          </motion.div>

          {/* Trust Badges */}
          <motion.div variants={fadeInUp} className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground/60">
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-primary" />
              SOC 2 Compliant
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-primary" />
              GDPR Ready
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-primary" />
              99.99% Uptime SLA
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Check className="w-4 h-4 text-primary" />
              256-bit Encryption
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Features Section
function FeaturesSection() {
  const features = [
    {
      icon: Lock,
      title: "Passwordless Auth",
      description: "Magic links, passkeys, and biometric authentication out of the box.",
    },
    {
      icon: Users,
      title: "Multi-Tenant Ready",
      description: "Built-in organization management with role-based access control.",
    },
    {
      icon: Zap,
      title: "Edge Performance",
      description: "Sub-50ms latency worldwide with our global edge network.",
    },
    {
      icon: Key,
      title: "API Key Management",
      description: "Secure API key generation, rotation, and granular permissions.",
    },
    {
      icon: Fingerprint,
      title: "Adaptive MFA",
      description: "Risk-based authentication that protects without friction.",
    },
    {
      icon: Database,
      title: "Session Management",
      description: "Real-time session control with device fingerprinting.",
    },
  ];

  return (
    <section id="features" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/30 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm text-primary font-medium uppercase tracking-wider">Features</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">
            Everything you need for
            <br />
            enterprise identity
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            A complete authentication platform that handles the complexity so you can focus on building your product.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <GlassCard className="p-6 h-full hover:border-primary/40 transition-colors group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Security Section
function SecuritySection() {
  return (
    <section id="security" className="relative py-32 overflow-hidden">
      <GridBackground />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm text-primary font-medium uppercase tracking-wider">Security</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-balance">
              Security that never
              <br />
              compromises
            </h2>
            <p className="text-muted-foreground mb-8 text-pretty">
              Built from the ground up with zero-trust architecture. Every request is verified,
              every session is monitored, and every credential is encrypted.
            </p>

            <div className="space-y-4">
              {[
                "End-to-end encryption with AES-256",
                "Zero-knowledge architecture",
                "Real-time threat detection",
                "Automatic credential rotation",
                "Audit logs with immutable storage",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>

            <button className="mt-8 flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all">
              Read security whitepaper
              <ChevronRight className="w-4 h-4" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Security Dashboard Preview */}
            <GlassCard className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold">Security Dashboard</h3>
                <span className="px-2 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">Live</span>
              </div>
              
              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-4 rounded-lg bg-muted/50 border border-border/40">
                  <div className="text-2xl font-bold text-primary">99.99%</div>
                  <div className="text-xs text-muted-foreground">Uptime</div>
                </div>
                <div className="p-4 rounded-lg bg-muted/50 border border-border/40">
                  <div className="text-2xl font-bold text-foreground">12ms</div>
                  <div className="text-xs text-muted-foreground">Avg Latency</div>
                </div>
                <div className="p-4 rounded-lg bg-muted/50 border border-border/40">
                  <div className="text-2xl font-bold text-foreground">847K</div>
                  <div className="text-xs text-muted-foreground">Auth/min</div>
                </div>
                <div className="p-4 rounded-lg bg-muted/50 border border-border/40">
                  <div className="text-2xl font-bold text-accent">0</div>
                  <div className="text-xs text-muted-foreground">Breaches</div>
                </div>
              </div>

              {/* Activity Log */}
              <div className="space-y-3">
                <div className="text-xs text-muted-foreground uppercase tracking-wider">Recent Activity</div>
                {[
                  { action: "MFA verification", time: "2s ago", status: "success" },
                  { action: "Session refresh", time: "15s ago", status: "success" },
                  { action: "Suspicious login blocked", time: "1m ago", status: "blocked" },
                ].map((log, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-background/50 border border-border/40">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${log.status === "blocked" ? "bg-destructive" : "bg-primary"}`} />
                      <span className="text-sm">{log.action}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{log.time}</span>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Decorative glow */}
            <div className="absolute -inset-4 bg-primary/5 rounded-2xl blur-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Pricing Section
function PricingSection() {
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

// CTA Section
function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden">
      <GridBackground />
      
      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <GlassCard className="p-12 md:p-16">
            <Globe className="w-12 h-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
              Ready to secure your application?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-pretty">
              Join thousands of developers who trust acc-mngr for their authentication needs.
              Get started in minutes, not months.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20">
                Get Started Free
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border/60 text-foreground hover:bg-muted/50 transition-colors">
                Schedule Demo
              </button>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold tracking-tight">acc-mngr</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Enterprise-grade identity and access management for modern applications.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Changelog</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Roadmap</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Developers</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">SDKs</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Status</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border/40 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; 2026 acc-mngr. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
            <a href="#" className="hover:text-foreground transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export function Page2() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <SecuritySection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  );
}
