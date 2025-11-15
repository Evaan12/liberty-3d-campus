import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-soft transition-all duration-300 group-hover:scale-110 group-hover:shadow-medium">
              <GraduationCap className="h-7 w-7" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary">
                Anarmani Liberty
              </span>
              <span className="text-xs text-muted-foreground">
                Excellence in Education
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant={location.pathname === link.path ? "default" : "ghost"}
                  className="text-sm font-medium transition-all duration-300"
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
