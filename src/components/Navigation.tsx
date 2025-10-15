import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className="fixed top-0 w-full z-50 border-b border-border bg-white/30 backdrop-blur-xl shadow-lg"
      style={{ WebkitBackdropFilter: "blur(16px)", backdropFilter: "blur(16px)" }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center">
              <span className="text-primary font-bold text-lg">N</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Nakify</h1>
              <p className="text-xs text-muted-foreground">Solutions by Naki</p>
            </div>
          </div>

          {/* Centered Menu */}
          <div className="hidden md:flex flex-1 justify-center items-center gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors font-medium px-3 py-1 rounded-lg"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors font-medium px-3 py-1 rounded-lg"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors font-medium px-3 py-1 rounded-lg"
            >
              Contact
            </button>
          </div>

          {/* Get Started Button Far Right */}
          <div className="hidden md:flex items-center">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-white/30 backdrop-blur-lg border border-white/40 shadow-md text-primary font-semibold px-6 py-2 rounded-xl hover:bg-white/50 transition-all duration-300"
              style={{ WebkitBackdropFilter: "blur(8px)", backdropFilter: "blur(8px)" }}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="md:hidden mt-4 pb-4 flex flex-col gap-4 bg-white/30 backdrop-blur-xl rounded-xl shadow-lg px-4"
            style={{ WebkitBackdropFilter: "blur(16px)", backdropFilter: "blur(16px)" }}
          >
            <button
              onClick={() => scrollToSection("services")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-foreground hover:text-primary transition-colors text-left"
            >
              Contact
            </button>
            <Button onClick={() => scrollToSection("contact")} className="w-full">
              Get Started
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
