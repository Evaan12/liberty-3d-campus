import { Link } from "react-router-dom";
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8" />
              <span className="text-xl font-bold">Anarmani Liberty</span>
            </div>
            <p className="text-sm opacity-90">
              Providing quality education and shaping future leaders through excellence, innovation, and dedication.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm opacity-90 hover:opacity-100 hover:underline transition-all">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/academics" className="text-sm opacity-90 hover:opacity-100 hover:underline transition-all">
                  Academics
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="text-sm opacity-90 hover:opacity-100 hover:underline transition-all">
                  Facilities
                </Link>
              </li>
              <li>
                <Link to="/admission" className="text-sm opacity-90 hover:opacity-100 hover:underline transition-all">
                  Admission
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm opacity-90">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>123 Education Street, Academic City, AC 12345</span>
              </li>
              <li className="flex items-center gap-2 text-sm opacity-90">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-sm opacity-90">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>info@anarmaniliberty.edu</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all hover:scale-110"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-all hover:scale-110"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-primary-foreground/10 text-center text-sm opacity-90">
          <p>&copy; {new Date().getFullYear()} Anarmani Liberty School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
