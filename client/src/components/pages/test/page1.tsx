import { Hero } from "@/components/page1/hero";
import { Features } from "@/components/page1/features";
import { Security } from "@/components/page1/security";
import { Navbar } from "@/components/page1/navbar";
import { Integration } from "@/components/page1/integration";
import { Cta } from "@/components/page1/cta";
import { Footer } from "@/components/page1/footer";
import { CodeShowcase } from "@/components/page1/code-showcase";

export function Page1() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <CodeShowcase />
        <Features />
        <Security />
        <Integration />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}