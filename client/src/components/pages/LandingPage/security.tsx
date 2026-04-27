import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Security() {
  return (
    <section id="security" className="py-24 bg-muted/30 border-y border-border overflow-hidden relative">
      <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")"}}></div>
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 w-full relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full"></div>
            <div className="relative border border-border p-4 bg-background shadow-2xl rounded font-mono">
              <div className="space-y-3">
                <div className="text-[10px] text-muted-foreground">AUTH_FLOW_MONITOR</div>
                <div className="flex items-center gap-3 p-3 border border-primary/30 bg-primary/5 rounded-sm">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                  <span className="text-xs text-primary">MFA_CHALLENGE_ISSUED</span>
                  <span className="ml-auto text-[10px] text-muted-foreground">t+0ms</span>
                </div>
                <div className="flex items-center gap-3 p-3 border border-border rounded-sm">
                  <div className="w-2 h-2 rounded-full bg-border"></div>
                  <span className="text-xs text-foreground">TOTP_VERIFIED</span>
                  <span className="ml-auto text-[10px] text-muted-foreground">t+234ms</span>
                </div>
                <div className="flex items-center gap-3 p-3 border border-border rounded-sm">
                  <div className="w-2 h-2 rounded-full bg-border"></div>
                  <span className="text-xs text-foreground">SESSION_TOKEN_MINTED</span>
                  <span className="ml-auto text-[10px] text-muted-foreground">t+241ms</span>
                </div>
                <div className="flex items-center gap-3 p-3 border border-border rounded-sm">
                  <div className="w-2 h-2 rounded-full bg-border"></div>
                  <span className="text-xs text-foreground">DEVICE_FINGERPRINT_BOUND</span>
                  <span className="ml-auto text-[10px] text-muted-foreground">t+243ms</span>
                </div>
                <div className="mt-4 border-t border-border pt-3">
                  <div className="text-[10px] text-muted-foreground mb-1">TOKEN_PAYLOAD</div>
                  <pre className="text-[10px] text-primary/80 leading-relaxed">{`{
  "sub": "usr_4f2a9c",
  "iat": 1712345678,
  "exp": 1712349278,
  "device": "d_8b3e",
  "mfa": true
}`}</pre>
                </div>
              </div>
            </div>
            
            {/* Overlay stats */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 border border-border bg-card p-4 shadow-xl w-48 hidden md:block"
            >
              <div className="text-xs text-muted-foreground font-mono mb-1">REQ_LATENCY</div>
              <div className="text-2xl font-bold text-primary font-mono">12.4ms</div>
              <div className="w-full bg-muted h-1 mt-2">
                <div className="bg-primary w-3/4 h-full"></div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="absolute -top-6 -right-6 border border-border bg-card p-4 shadow-xl hidden md:block"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                <div className="text-xs text-foreground font-mono">SYSTEM_SECURE</div>
              </div>
            </motion.div>
          </div>
          
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-muted border border-border text-xs font-mono">
              <span className="w-2 h-2 bg-primary"></span>
              THREAT_MODEL_DEFENSE
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              A fortress for your <br/>user identities.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We assume the network is compromised. Every token is cryptographically bound to the device. Every request is verified. Every anomaly is flagged in real-time.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="border-l-2 border-primary pl-4">
                <h4 className="font-bold text-foreground">Device Binding</h4>
                <p className="text-sm text-muted-foreground">Tokens cannot be stolen and used on another device. Period.</p>
              </div>
              <div className="border-l-2 border-border pl-4">
                <h4 className="font-bold text-foreground">Bot Protection</h4>
                <p className="text-sm text-muted-foreground">Invisible, frictionless CAPTCHA alternatives that stop automated attacks.</p>
              </div>
              <div className="border-l-2 border-border pl-4">
                <h4 className="font-bold text-foreground">Audit Logging</h4>
                <p className="text-sm text-muted-foreground">Immutable logs of every auth event, ready for SIEM ingestion.</p>
              </div>
            </div>
            
            <div className="pt-6">
              <Button variant="outline" className="font-mono rounded-none border-border">
                Explore Architecture <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
