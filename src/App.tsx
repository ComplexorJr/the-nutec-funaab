import React, { useState } from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import { Navigation } from "./components/Navigation";
import { ScrollProgress } from "./components/ScrollProgress";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { FeaturesOverview } from "./components/FeaturesOverview";
import { AuthSection } from "./components/AuthSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Dashboard } from "./components/Dashboard";

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (email: string, _password: string) => {
    setIsLoading(true);
    try {
      // Simulate API call - replace with actual authentication logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful login
      const mockUser: User = {
        id: "1",
        name: "John Doe",
        email: email,
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
      };
      
      setUser(mockUser);
      console.log("Login successful:", mockUser);
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignup = async (name: string, email: string, _password: string) => {
    setIsLoading(true);
    try {
      // Simulate API call - replace with actual registration logic
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful signup
      const mockUser: User = {
        id: "1",
        name: name,
        email: email,
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
      };
      
      setUser(mockUser);
      console.log("Signup successful:", mockUser);
    } catch (error) {
      console.error("Signup failed:", error);
      alert("Signup failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      // Simulate Google OAuth - replace with actual Google OAuth implementation
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful Google sign-in
      const mockUser: User = {
        id: "1",
        name: "Google User",
        email: "user@gmail.com",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face"
      };
      
      setUser(mockUser);
      console.log("Google sign-in successful:", mockUser);
    } catch (error) {
      console.error("Google sign-in failed:", error);
      alert("Google sign-in failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    setUser(null);
    console.log("User logged out");
  };

  // Show dashboard if user is logged in
  if (user) {
    return (
      <ThemeProvider>
        <Dashboard user={user} onLogout={handleLogout} />
      </ThemeProvider>
    );
  }

  // Show landing page if user is not logged in
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background">
        <ScrollProgress />
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <FeaturesOverview />
          <AuthSection onLogin={handleLogin} onSignup={handleSignup} onGoogleSignIn={handleGoogleSignIn} isLoading={isLoading} />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
