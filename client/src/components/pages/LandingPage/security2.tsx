import { motion} from "framer-motion";
import { Check, ChevronRight } from "lucide-react";

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

function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative backdrop-blur-xl bg-card/50 border border-border/40 rounded-xl ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-xl pointer-events-none" />
      <div className="relative">{children}</div>
    </div>
  );
}



export function Security2() {
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