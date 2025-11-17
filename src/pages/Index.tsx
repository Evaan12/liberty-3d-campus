import { Hero } from "@/components/Hero";
import { FoundersSlider } from "@/components/FoundersSlider";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Award, Building2, GraduationCap, Heart } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Academic Excellence",
      description: "Comprehensive curriculum designed to nurture critical thinking and creativity",
      link: "/academics"
    },
    {
      icon: Users,
      title: "Experienced Faculty",
      description: "Dedicated teachers committed to student success and personal growth",
      link: "/about"
    },
    {
      icon: Award,
      title: "Achievement Focus",
      description: "Proven track record of academic and extracurricular achievements",
      link: "/gallery"
    },
    {
      icon: Building2,
      title: "Modern Facilities",
      description: "State-of-the-art infrastructure supporting 21st century learning",
      link: "/facilities"
    },
    {
      icon: GraduationCap,
      title: "Holistic Development",
      description: "Balanced approach to academics, sports, arts, and character building",
      link: "/about"
    },
    {
      icon: Heart,
      title: "Caring Environment",
      description: "Safe, inclusive community where every child feels valued and supported",
      link: "/contact"
    }
  ];

  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
           <h2 className="text-4xl font-bold mb-4">
              Why choose{' '}
              <span className="font-old-english">
                Anarmani Liberty
              </span>
                ‎ ?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide a comprehensive educational experience that prepares students for success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <Card 
                key={idx} 
                className="hover-lift cursor-pointer group"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                  <Link to={feature.link}>
                    <Button variant="link" className="p-0">
                      Learn more →
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <FoundersSlider />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary-light text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Begin your child's journey towards excellence at Anarmani Liberty School
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/admission">
              <Button size="lg" variant="secondary" className="shadow-medium hover:shadow-strong">
                Start Application
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                Schedule a Visit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
