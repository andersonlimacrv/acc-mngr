import { createContext, useState, type ReactNode } from "react";
import type { AuthContextType } from "@/types/auth";
import type { User } from "@/types/user";
import { useToast } from "@/hooks/useToast";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const { addToast } = useToast();
  const [user, setUser] = useState<User | null>(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [isLoading, setIsLoading] = useState(false);

  // Hardcoded credentials
  const ROOT_USER = "123";
  const ROOT_PASS = "123";

  const login = async (username: string, password: string) => {
    setIsLoading(true);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    if (username === ROOT_USER && password === ROOT_PASS) {
      const userData: User = { 
        user_id: "123e4567-e89b-12d3-a456-426614174000",
        username: username,
        name: username === "123" ? "Anderson" : username, // display name
        email: "anderson@example.com", // actual email
        avatar_url: "https://i.pravatar.cc/300",
        role: "admin"
      };
      setUser(userData);
      localStorage.setItem("user", JSON.stringify(userData));
      addToast({
        type: "success",
        title: "Login successful!",
        description: `Welcome, ${userData.name}!`,
      });
    } else {
      addToast({
        type: "error",
        title: "Login failed!",
        description: "Invalid credentials.",
      });
      setIsLoading(false);
      throw new Error("Invalid credentials");
    }
    setIsLoading(false);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    addToast({
      type: "info",
      title: "Logged out",
      description: "You have been logged out successfully.",
    });
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, isLoading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
