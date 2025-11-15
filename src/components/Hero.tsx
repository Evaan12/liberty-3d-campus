import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";
import heroCampus from "@/assets/hero-campus.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary-light/5">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="inline-block">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                Welcome to Excellence
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-primary">Anarmani</span>
              <br />
              <span className="text-foreground">Liberty School</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl">
              Empowering young minds to excel academically, socially, and personally. 
              Building tomorrow's leaders today.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link to="/admission">
                <Button size="lg" className="group shadow-medium hover:shadow-strong transition-all">
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="shadow-soft hover:shadow-medium transition-all">
                  Learn More
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <BookOpen className="h-5 w-5" />
                  <span className="text-3xl font-bold">500+</span>
                </div>
                <p className="text-sm text-muted-foreground">Students</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <Users className="h-5 w-5" />
                  <span className="text-3xl font-bold">50+</span>
                </div>
                <p className="text-sm text-muted-foreground">Teachers</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <Award className="h-5 w-5" />
                  <span className="text-3xl font-bold">25+</span>
                </div>
                <p className="text-sm text-muted-foreground">Years</p>
              </div>
            </div>
          </div>

          {/* Right content - 3D floating card */}
          <div className="relative animate-slide-in-right hidden lg:block">
            <div className="perspective-1000">
              <div className="relative transform-3d animate-float">
                <div className="bg-card rounded-2xl shadow-strong p-8 space-y-6 hover-3d transition-all duration-500">
                  <div className="aspect-video rounded-xl bg-gradient-to-br from-primary to-primary-light overflow-hidden">
                    <img 
                      src={heroCampus} 
                      alt="School campus" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Join Our Community</h3>
                    <p className="text-muted-foreground">
                      Experience world-class education in a nurturing environment
                      designed to bring out the best in every student.
                    </p>
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
