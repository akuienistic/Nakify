import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-printing.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Professional printing services" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-[hsl(260,70%,50%)]/90 to-secondary/95" />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-8 inline-block">
            <div className="w-32 h-32 mx-auto rounded-full border-4 border-white/80 flex items-center justify-center mb-6 backdrop-blur-sm bg-white/10 shadow-2xl">
              <span className="text-white font-bold text-5xl">N</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-2 animate-fade-in">Nakify</h1>
            <p className="text-xl md:text-2xl text-white/90">Solutions by Naki</p>
          </div>

          <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-white/95">
            Professional Printing Excellence
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed max-w-3xl mx-auto">
            From business documents to large-format signage, custom branded merchandise to 
            premium finishing services—Nakify delivers top-tier printing solutions with 
            cutting-edge technology and expert craftsmanship.
          </p>
          <p className="text-base md:text-lg mb-12 text-white/80 leading-relaxed max-w-2xl mx-auto">
            Transform your ideas into stunning printed materials that leave a lasting impression.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-white text-primary hover:bg-white/90 shadow-xl text-lg px-8 py-6 h-auto"
            >
              Get Started <ArrowRight className="ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 h-auto"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
