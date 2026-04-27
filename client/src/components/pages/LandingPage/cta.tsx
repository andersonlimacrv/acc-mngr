import { Button } from "@/components/ui/button";

export function Cta() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/20 blur-[120px] rounded-full"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 font-sans">
          Deploy production-grade<br/> identity today.
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Stop rebuilding auth. Focus on your core product. Get started for free, no credit card required.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button size="lg" className="w-full sm:w-auto font-mono rounded-none bg-primary text-primary-foreground hover:bg-primary/90 h-14 px-10 text-base">
            Create Free Account
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto font-mono rounded-none h-14 px-10 border-border hover:bg-muted text-base bg-background/50 backdrop-blur">
            Contact Sales
          </Button>
        </div>
        
        <p className="mt-6 text-sm font-mono text-muted-foreground">
          $0/mo for up to 10,000 MAUs.
        </p>
      </div>
    </section>
  );
}
