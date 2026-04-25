
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/LoginButton";
import { useAuth } from "@/hooks/useAuth";
import { ThemeSwitcher } from "@/components/global/ThemeSwitcher";
import { Link } from "react-router-dom";
import { LayoutDashboard, ShieldCheck, LogOut } from "lucide-react";
import { Logo } from "@/components/common/Logo";
import UserAvatar from "@/components/common/UserAvatar";

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

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link to="#features" className="hover:text-foreground transition-colors">Features</Link>
          <Link to="#security" className="hover:text-foreground transition-colors">Security</Link>
          <Link to="#docs" className="hover:text-foreground transition-colors">Documentation</Link>
          <Link to="#pricing" className="hover:text-foreground transition-colors">Pricing</Link>
        </nav>
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
                <Button variant="secondary" size="lg" className="w-28">
                  <LayoutDashboard className="max-h-3 max-w-3" />Dashboard
                </Button>
              </Link>
              <Button variant="destructive" size="lg" className="w-28" onClick={logout}>
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
