import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from '../assets/logo.png';
// NavigationMenu components are not used in the provided code, so they can be removed if not needed elsewhere.

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // NEW: State to control navbar visibility
  const [isVisible, setIsVisible] = useState(true);
  // NEW: State to store the last scroll position
  const [lastScrollY, setLastScrollY] = useState(0);
  
  const location = useLocation();

  // NEW: Updated scroll handler to manage visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Logic for the background style on scroll
      setScrolled(currentScrollY > 20);

      // Don't hide the navbar if the mobile menu is open
      if (isOpen) {
        setIsVisible(true);
        return;
      }

      // Determine scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px: hide the navbar
        setIsVisible(false);
      } else {
        // Scrolling up: show the navbar
        setIsVisible(true);
      }
      
      // Update the last scroll position
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    // Cleanup function to remove the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isOpen]); // NEW: Added dependencies

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Facilities", path: "/facilities" },
    { name: "Gallery", path: "/gallery" },
    { name: "Admission", path: "/admission" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-medium"
          : "bg-background"
      } ${
        // NEW: Add classes to slide the navbar up or down
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo (as corrected previously) */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logo} 
              alt="Logo" 
              className="h-12 w-12 transition-all duration-300 group-hover:scale-110" 
            />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary">
                Anarmani Liberty School
              </span>
              <span className="text-xs text-muted-foreground">
                Scientia Est Potentia
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant={location.pathname === link.path ? "default" : "ghost"}
                  className="text-sm font-medium"
                >
                  {link.name}
                </Button>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t animate-fade-up">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                >
                  <Button
                    variant={
                      location.pathname === link.path ? "default" : "ghost"
                    }
                    className="w-full justify-start"
                  >
                    {link.name}
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};