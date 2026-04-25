import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import { ThemeSwitcher } from "@/components/global/ThemeSwitcher";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-background/20 backdrop-blur-lg border-border"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary/10 rounded border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <ShieldCheck className="w-5 h-5 text-primary" />
          </div>
          <span className="font-sans font-bold text-lg tracking-tight">acc-mngr</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link to="#features" className="hover:text-foreground transition-colors">Features</Link>
          <Link to="#security" className="hover:text-foreground transition-colors">Security</Link>
          <Link to="#docs" className="hover:text-foreground transition-colors">Documentation</Link>
          <Link to="#pricing" className="hover:text-foreground transition-colors">Pricing</Link>
        </nav>

        <div className="flex items-center gap-4">
          {mounted && (
            <ThemeSwitcher />
          )}
          <div className="hidden md:flex items-center gap-2">
            <Button variant="ghost" className="font-mono text-xs">Sign In</Button>
            <Button className="font-mono text-xs bg-primary text-primary-foreground hover:bg-primary/90 rounded-none border border-primary">
              Initialize
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
