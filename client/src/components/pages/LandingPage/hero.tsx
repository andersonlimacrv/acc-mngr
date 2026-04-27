import { motion } from "framer-motion";
import { ArrowRight, Terminal, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-8"
          >
            <Terminal className="w-3 h-3" />
            <span>Enterprise-grade security for modern applications</span>
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 font-sans text-foreground"
          >
           Identity that grows <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-primary to-primary/50">with you.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            The precision-machined authentication and access management built for developers who demand security, performance, and elegant integration.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button size="lg" className="w-full sm:w-auto font-mono rounded-none bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8">
              Start Integration <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto font-mono rounded-none h-12 px-8 border-border hover:bg-muted">
              Read Documentation
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 relative max-w-5xl mx-auto"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/5 to-primary/20 rounded-lg blur-xl opacity-50"></div>
          <div className="relative border border-border bg-card shadow-2xl rounded-lg overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
              <div className="w-3 h-3 rounded-full bg-border"></div>
              <div className="w-3 h-3 rounded-full bg-border"></div>
              <div className="w-3 h-3 rounded-full bg-border"></div>
              <div className="ml-4 font-mono text-xs text-muted-foreground">acc-mngr dashboard</div>
            </div>
            <div className="bg-card p-6 min-h-[320px] font-mono">
              <div className="flex gap-4 h-full">
                <div className="w-40 flex-shrink-0 border-r border-border pr-4 space-y-1">
                  {["Overview","Users","Sessions","API Keys","Audit Log","Settings"].map((item, i) => (
                    <div key={item} className={`px-3 py-2 text-xs rounded-sm ${i === 0 ? "bg-primary/15 text-primary" : "text-muted-foreground hover:text-foreground"}`}>{item}</div>
                  ))}
                </div>
                <div className="flex-1 space-y-4">
                  <div className="grid grid-cols-3 gap-3">
                    {[["ACTIVE_USERS","14,892","+12.4%"],["AUTH_REQUESTS","2.1M","today"],["UPTIME","99.999%","30d"]].map(([label, val, sub]) => (
                      <div key={label} className="border border-border p-3 rounded-sm">
                        <div className="text-[10px] text-muted-foreground mb-1">{label}</div>
                        <div className="text-lg font-bold text-foreground">{val}</div>
                        <div className="text-[10px] text-primary">{sub}</div>
                      </div>
                    ))}
                  </div>
                  <div className="border border-border rounded-sm p-3">
                    <div className="text-[10px] text-muted-foreground mb-3">RECENT_EVENTS</div>
                    {[
                      ["0x4f2a","LOGIN_SUCCESS","192.168.1.1","2ms ago"],
                      ["0x8d1c","MFA_VERIFIED","10.0.0.42","5ms ago"],
                      ["0x2b9e","TOKEN_REFRESH","172.16.0.5","12ms ago"],
                    ].map(([id, event, ip, time]) => (
                      <div key={id} className="flex items-center gap-3 py-1.5 border-b border-border/40 last:border-0">
                        <span className="text-[10px] text-primary">{id}</span>
                        <span className="text-[10px] text-foreground flex-1">{event}</span>
                        <span className="text-[10px] text-muted-foreground">{ip}</span>
                        <span className="text-[10px] text-muted-foreground">{time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Trust Badges */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-muted-foreground/60">
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
          </div>
        </motion.div>
         
      </div>
    </section>
  );
}
