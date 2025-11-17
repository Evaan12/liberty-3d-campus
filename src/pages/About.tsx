import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, History, Users, Award, Heart } from "lucide-react";

const About = () => {
  const milestones = [
    { year: "1998", event: "School Founded", description: "Anarmani Liberty School opened its doors" },
    { year: "2005", event: "Campus Expansion", description: "New building and facilities added" },
    { year: "2010", event: "Technology Integration", description: "Smart classrooms and digital learning introduced" },
    { year: "2015", event: "International Recognition", description: "Accredited by international education boards" },
    { year: "2020", event: "Virtual Learning", description: "Pioneered hybrid learning model" },
    { year: "2024", event: "25 Years of Excellence", description: "Celebrating a quarter century of success" }
  ];

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for the highest standards in all we do"
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We uphold honesty and strong moral principles"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of working together"
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We embrace new ideas and creative solutions"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {/* <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-primary-light/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-muted-foreground">
              Discover the story behind Anarmani Liberty School and our commitment to educational excellence
            </p>
          </div>
        </div>
      </section> */}

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="hover-lift">
              <CardContent className="p-8 space-y-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Target className="h-7 w-7" />
                </div>
                <h2 className="text-3xl font-bold">Our Mission</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To provide a nurturing and challenging educational environment that empowers students to 
                  reach their full potential academically, socially, and personally. We are committed to 
                  fostering critical thinking, creativity, and character development while preparing students 
                  to become responsible global citizens.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-8 space-y-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Eye className="h-7 w-7" />
                </div>
                <h2 className="text-3xl font-bold">Our Vision</h2>
                <p className="text-muted-foreground leading-relaxed">
                  To be a leading institution recognized for educational excellence, innovation, and holistic 
                  development. We envision a school community where every student discovers their unique 
                  talents, develops strong values, and becomes equipped with the skills and knowledge to 
                  thrive in an ever-changing world.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, idx) => (
              <Card key={idx} className="hover-lift">
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto">
                    <value.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <History className="h-8 w-8 text-primary" />
              <h2 className="text-4xl font-bold">Our Journey</h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              25+ years of educational excellence and continuous growth
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />

              {/* Timeline items */}
              <div className="space-y-12">
                {milestones.map((milestone, idx) => (
                  <div
                    key={idx}
                    className={`relative flex items-center ${
                      idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } gap-8`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-primary border-4 border-background shadow-medium" />

                    {/* Content */}
                    <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"} pl-20 md:pl-0`}>
                      <Card className="hover-lift">
                        <CardContent className="p-6 space-y-2">
                          <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                          <h3 className="text-xl font-bold">{milestone.event}</h3>
                          <p className="text-muted-foreground">{milestone.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
