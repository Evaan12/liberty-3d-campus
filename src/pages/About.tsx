import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, History, Users, Award, Heart, LucideIcon } from "lucide-react";
import { useState, useEffect } from "react";

interface Mission {
  title: string;
  description: string;
}

interface Vision {
  title: string;
  description: string;
}

interface CoreValue {
  id: number;
  icon: string;
  title: string;
  description: string;
}

interface Milestone {
  id: number;
  year: string;
  event: string;
  description: string;
}

interface AboutData {
  mission: Mission;
  vision: Vision;
  values: CoreValue[];
  milestones: Milestone[];
}

const iconMap: { [key: string]: LucideIcon } = {
  Award: Award,
  Heart: Heart,
  Users: Users,
  Target: Target,
};

const About = () => {

  const [data, setData] = useState<AboutData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const response = await fetch("http://localhost:8000/api/about/");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result: AboutData = await response.json();
        setData(result);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); 

  if (loading) {
    return <div className="min-h-screen flex justify-center items-center">Loading...</div>;
  }

  if (error) {
    return <div className="min-h-screen flex justify-center items-center text-red-500">Error: {error}</div>;
  }


  return (
    <div className="min-h-screen">
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="hover-lift">
              <CardContent className="p-8 space-y-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Target className="h-7 w-7" />
                </div>
                <h2 className="text-3xl font-bold">{data?.mission?.title || "Our Mission"}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {data?.mission?.description || "Mission description goes here."}
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-8 space-y-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Eye className="h-7 w-7" />
                </div>
                <h2 className="text-3xl font-bold">{data?.vision?.title || "Our Vision"}</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {data?.vision?.description || "Vision description goes here."}
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
            {data?.values.map((value) => {
              const IconComponent = iconMap[value.icon];
              return (
                <Card key={value.id} className="hover-lift">
                  <CardContent className="p-6 space-y-4 text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary mx-auto">
                      {IconComponent && <IconComponent className="h-7 w-7" />}
                    </div>
                    <h3 className="text-xl font-bold">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
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
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />
              <div className="space-y-12">
                {data?.milestones.map((milestone, idx) => (
                  <div
                    key={milestone.id}
                    className={`relative flex items-center ${
                      idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                    } gap-8`}
                  >
                    <div className="absolute left-8 md:left-1/2 w-4 h-4 -ml-2 rounded-full bg-primary border-4 border-background shadow-medium" />
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