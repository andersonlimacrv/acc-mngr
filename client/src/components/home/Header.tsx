
import { HugeiconsIcon } from "@hugeicons/react"
import { User } from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/LoginButton";
import { useAuth } from "@/hooks/useAuth";
import { ThemeSwitcher } from "@/components/global/ThemeSwitcher";

export function Header() {
  const { user, logout, isAuthenticated } = useAuth();
  const LogoLocation = "/logo.svg";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container flex h-18 max-w-screen items-center justify-between px-8">
        <div className="flex items-center justify-center gap-4 ml-[20%]">
          <div>
            <img
              src={LogoLocation}
              alt="App Icon"
              className="h-12 w-12 mb-2"
            />
          </div>
          <div>
            <span className="font-bold hidden sm:inline-block">
              App
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 ml-auto">
          {isAuthenticated && user ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 p-.5">
                  <HugeiconsIcon icon={User} size={24} color="currerentColor" strokeWidth={1.5} />
                </div>
                <span className="text-sm font-semibold hidden sm:inline-block capitalize">
                  {user.username}
                </span>
              </div>
              <Button
                onClick={() => (window.location.href = "/~")}
                variant="outline"
              >
                Dashboard
              </Button>
              <Button variant="outline" onClick={logout}>
                Logout
              </Button>
            </div>
          ) : (
            <LoginButton />
          )}
        </div>
        <div className="ml-4"><ThemeSwitcher /></div>
      </div>
    </header>
  );
}
