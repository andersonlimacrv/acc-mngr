
import { Hero } from "@/components/pages/LandingPage/hero";
import { CodeShowcase } from "@/components/pages/LandingPage/code-showcase";
import { Features } from "@/components/pages/LandingPage/features";
import { Security } from "@/components/pages/LandingPage/security";
import { Security2 } from "@/components/pages/LandingPage/security2";
import { Integration } from "@/components/pages/LandingPage/integration";
import { Pricing } from "@/components/pages/LandingPage/pricing";
import { Cta } from "@/components/pages/LandingPage/cta";
import { Footer } from "@/components/pages/LandingPage/footer";

export function LandingPage() {
    return (
      <>
          <Hero />
          <CodeShowcase />
          <Features />
          <Security />
          <Security2 />
          <Integration />
          <Pricing />
          <Cta />
          <Footer />
        </>
    );
}
