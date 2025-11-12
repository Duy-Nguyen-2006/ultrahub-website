import { Facebook, Mail, Phone } from "lucide-react";
import logo from "@/assets/sreal-logo.png";
import { NavLink } from "./NavLink";

export const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Sreal Logo" className="h-10 w-10" />
              <span className="font-bold text-xl bg-gradient-primary bg-clip-text text-transparent">
                Sreal
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Buy AI accounts at great prices – Trusted by Sreal
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-semibold mb-4">Policies</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Warranty Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Facebook size={16} className="text-primary" />
                <a href="https://www.facebook.com/tra.giang.771296" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Facebook
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={16} className="text-primary" />
                support@sreal.vn
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone size={16} className="text-primary" />
                +84 123 456 789
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Sreal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
