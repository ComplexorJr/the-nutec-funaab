import { useState } from "react";
import { Navigation } from "./Navigation";
import { ScrollProgress } from "./ScrollProgress";
import { HeroSection } from "./HeroSection";
import { AboutSection } from "./AboutSection";
import { FeaturesOverview } from "./FeaturesOverview";
import { ContactSection } from "./ContactSection";
import { Footer } from "./Footer";
import { AuthModal } from "./AuthModal";

interface LandingPageProps {
  onLogin: (userData: any) => void;
}

export function LandingPage({ onLogin }: LandingPageProps) {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleOpenAuthModal = () => {
    setIsAuthModalOpen(true);
  };

  const handleCloseAuthModal = () => {
    setIsAuthModalOpen(false);
  };
  return (
    <>
      <ScrollProgress />
      <Navigation onOpenAuthModal={handleOpenAuthModal} />
      <main>
        <HeroSection onOpenAuthModal={handleOpenAuthModal} />
        <AboutSection />
        <FeaturesOverview />
        <ContactSection />
      </main>
      <Footer />
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={handleCloseAuthModal} 
        initialForm="signin"
      />
    </>
  );
}