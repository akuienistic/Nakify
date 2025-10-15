import { Card, CardContent } from "@/components/ui/card";
import { FileText, Maximize, Shirt, Scissors } from "lucide-react";

const services = [
  {
    title: "Document & Commercial Printing",
    description: "Professional printing services for all your business documents, brochures, flyers, and marketing materials.",
    icon: FileText,
  },
  {
    title: "Large Format Printing & Signage",
    description: "Eye-catching banners, posters, and signage solutions for events, retail, and outdoor advertising.",
    icon: Maximize,
  },
  {
    title: "Custom Branded Products & Apparel",
    description: "Personalized merchandise, promotional items, and custom apparel to elevate your brand identity.",
    icon: Shirt,
  },
  {
    title: "Binding & Finishing, Design Services, Stationery Items",
    description: "Complete finishing services, professional design support, and premium stationery products.",
    icon: Scissors,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive printing solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-2 border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-[0_10px_40px_hsl(var(--primary)/0.3)] backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div className="mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
