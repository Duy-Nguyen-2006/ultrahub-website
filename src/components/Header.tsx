import { NavLink } from "./NavLink";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/sreal-logo.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 font-bold text-xl">
          <img src={logo} alt="Sreal Logo" className="h-10 w-10" />
          <span className="bg-gradient-primary bg-clip-text text-transparent">
            Sreal
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink
            to="/"
            className="text-foreground hover:text-primary transition-colors"
            activeClassName="text-primary font-semibold"
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className="text-foreground hover:text-primary transition-colors"
            activeClassName="text-primary font-semibold"
          >
            Products
          </NavLink>
          <NavLink
            to="/faq"
            className="text-foreground hover:text-primary transition-colors"
            activeClassName="text-primary font-semibold"
          >
            FAQ
          </NavLink>
          <NavLink
            to="/contact"
            className="text-foreground hover:text-primary transition-colors"
            activeClassName="text-primary font-semibold"
          >
            Contact
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col p-4 gap-4">
              <NavLink
                to="/"
                className="text-foreground hover:text-primary transition-colors py-2"
                activeClassName="text-primary font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/products"
                className="text-foreground hover:text-primary transition-colors py-2"
                activeClassName="text-primary font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Products
              </NavLink>
              <NavLink
                to="/faq"
                className="text-foreground hover:text-primary transition-colors py-2"
                activeClassName="text-primary font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </NavLink>
              <NavLink
                to="/contact"
                className="text-foreground hover:text-primary transition-colors py-2"
                activeClassName="text-primary font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
