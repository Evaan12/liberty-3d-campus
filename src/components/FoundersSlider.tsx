import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import founder1 from "@/assets/founder1.jpg";
import founder2 from "@/assets/founder2.jpg";
import founder3 from "@/assets/founder3.jpg";
import founder4 from "@/assets/founder4.jpg";

const founders = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Founder & Chairman",
    bio: "With over 30 years of experience in education, Dr. Mitchell established Anarmani Liberty School with a vision to create a nurturing environment for holistic learning.",
    image: founder1
  },
  {
    name: "Prof. James Anderson",
    role: "Co-Founder & Academic Director",
    bio: "A renowned educator and curriculum specialist, Prof. Anderson has pioneered innovative teaching methodologies that shape our academic excellence.",
    image: founder2
  },
  {
    name: "Mrs. Patricia Johnson",
    role: "Co-Founder & Principal",
    bio: "With a passion for student welfare and development, Mrs. Johnson ensures every child receives personalized attention and care.",
    image: founder3
  },
  {
    name: "Mrs. Ashish Khadka",
    role: "Co-Founder & Principal",
    bio: "With a passion for student welfare and development, Mrs. Johnson ensures every child receives personalized attention and care.",
    image: founder3
  },
  {
    name: "Dr. Michael Chen",
    role: "Director of Innovation",
    bio: "Leading our technology integration and modern learning initiatives, Dr. Chen brings cutting-edge educational practices to our school.",
    image: founder4
  }
];

export const FoundersSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % founders.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + founders.length) % founders.length);
  };

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Founders</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Meet the visionaries who established Anarmani Liberty School
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-medium hover-lift">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 gap-6 p-8">
                {/* Image */}
                <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary-light/20">
                  <img
                    src={founders[currentIndex].image}
                    alt={founders[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center space-y-4">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">
                      {founders[currentIndex].name}
                    </h3>
                    <p className="text-primary font-semibold">
                      {founders[currentIndex].role}
                    </p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {founders[currentIndex].bio}
                  </p>

                  {/* Navigation */}
                  <div className="flex items-center gap-4 pt-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={prev}
                      className="hover-lift"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <div className="flex gap-2">
                      {founders.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentIndex(idx)}
                          className={`h-2 rounded-full transition-all ${
                            idx === currentIndex
                              ? "w-8 bg-primary"
                              : "w-2 bg-border"
                          }`}
                        />
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={next}
                      className="hover-lift"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
