import { CheckCircle2 } from "lucide-react";

const features = [
  "High-quality printing technology",
  "Fast turnaround times",
  "Competitive pricing",
  "Expert design consultation",
  "Eco-friendly printing options",
  "Custom solutions for every project",
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Nakify</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                At Nakify, we're committed to delivering exceptional printing services that bring
                your vision to life. Our state-of-the-art equipment and experienced team ensure
                every project meets the highest standards of quality.
              </p>
              <div className="grid gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                    <span className="text-foreground text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary to-secondary p-1">
                <div className="w-full h-full rounded-3xl bg-background flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-40 h-40 mx-auto rounded-full border-4 border-primary flex items-center justify-center mb-6 bg-gradient-to-br from-primary/10 to-secondary/10">
                      <span className="text-primary font-bold text-7xl">N</span>
                    </div>
                    <h3 className="text-3xl font-bold mb-2">Nakify</h3>
                    <p className="text-xl text-muted-foreground">Solutions by Naki</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
