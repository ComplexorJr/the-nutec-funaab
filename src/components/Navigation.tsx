import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { motion } from "motion/react";

const navigationItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Features", href: "#features" },
  { name: "Contact", href: "#contact" },
];

interface NavigationProps {
  onOpenAuthModal: () => void;
}

export function Navigation({ onOpenAuthModal }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const handleSmoothScroll = (href: string) => {
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-gray-800"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="flex items-center space-x-2">
              <motion.div 
                className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-primary-foreground font-bold">N</span>
              </motion.div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Nutec
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.div 
            className="hidden md:flex items-center space-x-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            {navigationItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
              >
                <button
                  onClick={() => handleSmoothScroll(item.href)}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200 relative group"
                >
                  {item.name}
                  <motion.span 
                    className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.2 }}
                  />
                </button>
              </motion.div>
            ))}
          </motion.div>

          {/* Theme Toggle & Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="text-muted-foreground hover:text-primary"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </Button>
            <Button 
              variant="ghost" 
              className="text-muted-foreground hover:text-primary"
              onClick={onOpenAuthModal}
            >
              Login
            </Button>
            <Button 
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
              onClick={onOpenAuthModal}
            >
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div 
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border border-border rounded-lg mt-2 mb-4">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleSmoothScroll(item.href)}
                  className="block w-full text-left px-3 py-2 text-muted-foreground hover:text-primary hover:bg-accent/50 rounded-md transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              <div className="border-t border-border pt-3 mt-3 space-y-2">
                <Button
                  variant="ghost"
                  className="w-full justify-start"
                  onClick={toggleTheme}
                >
                  {theme === 'light' ? <Moon className="w-4 h-4 mr-2" /> : <Sun className="w-4 h-4 mr-2" />}
                  {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full justify-start"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenAuthModal();
                  }}
                >
                  Login
                </Button>
                <Button 
                  className="w-full bg-gradient-to-r from-primary to-accent"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenAuthModal();
                  }}
                >
                  Sign Up
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}