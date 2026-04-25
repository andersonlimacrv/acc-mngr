
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/LoginButton";
import { useAuth } from "@/hooks/useAuth";
import { ThemeSwitcher } from "@/components/global/ThemeSwitcher";
import { Link } from "react-router-dom";
import { LayoutDashboard, LogOut } from "lucide-react";
import { Logo } from "@/components/common/Logo";
import UserAvatar from "@/components/common/UserAvatar";
import { Highlight, HighlightItem } from "@/components/ui/animate-ui/primitives/highlight";

export function Header() {
  const { user, logout, isAuthenticated } = useAuth();
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
          <div className="w-9 h-9 bg-primary/10 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <Logo size="xs" className="" />
          </div>
          <span className="font-sans font-bold text-lg tracking-tight">acc-mngr</span>
        </Link> 

        <Highlight
          as="nav"
          mode="parent"
          hover
          controlledItems
          containerClassName="hidden md:flex items-center gap-1 text-sm font-medium text-muted-foreground"
          className="bg-accent rounded-md"
        >
          <HighlightItem asChild>
            <Link to="#features" className="relative z-10 px-4 py-2 hover:text-foreground transition-colors">Features</Link>
          </HighlightItem>
          <HighlightItem asChild>
            <Link to="#security" className="relative z-10 px-4 py-2 hover:text-foreground transition-colors">Security</Link>
          </HighlightItem>
          <HighlightItem asChild>
            <Link to="#docs" className="relative z-10 px-4 py-2 hover:text-foreground transition-colors">Documentation</Link>
          </HighlightItem>
          <HighlightItem asChild>
            <Link to="#pricing" className="relative z-10 px-4 py-2 hover:text-foreground transition-colors">Pricing</Link>
          </HighlightItem>
        </Highlight>
        <div className="flex items-center">
          {mounted && (
            <ThemeSwitcher />
          )}
          <div className="hidden md:flex items-center gap-2">
            {isAuthenticated && user ? (
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2 mx-4">
                <UserAvatar
                name={user.name}
                avatarUrl={user.avatar_url? user.avatar_url : undefined}
                size="md"
                fallbackIcon={user.name?.[0]?.toUpperCase()}
                />
              </div>
              <Link to="/~">
                <Button variant="secondary" size="lg" className="w-26">
                  <LayoutDashboard className="max-h-3 max-w-3" />Dashboard
                </Button>
              </Link>
              <Button variant="destructive" size="lg" className="w-26" onClick={logout}>
                <LogOut className="max-h-3 max-w-3" />Logout
              </Button>
            </div>
          ) : (
            <div className="pl-6">
              <LoginButton  />
            </div>
          )}
          </div>
        </div>
      </div>
    </header>
  );
}
