import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { BookOpen, Microscope, Globe, Calculator, Palette, Music, Trophy, Languages } from "lucide-react";
import { AcademicsData, IconMap } from "@/types/academics"; // Import types

// Map string names from the backend to the actual icon components
const iconMap: IconMap = {
  BookOpen,
  Microscope,
  Globe,
  Calculator,
  Palette,
  Music,
  Trophy,
  Languages,
};

const Academics = () => {
  const [activeTab, setActiveTab] = useState("curriculum");
  const [academicsData, setAcademicsData] = useState<AcademicsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAcademicsData = async () => {
      try {
        setLoading(true);
        // Ensure you have VITE_API_BASE_URL in your .env file, e.g., VITE_API_BASE_URL=http://127.0.0.1:8000
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/academics/`);
        if (!response.ok) {
          throw new Error("Failed to fetch academics data");
        }
        const data: AcademicsData = await response.json();
        setAcademicsData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchAcademicsData();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-18">
        <div className="max-w-7xl mx-auto">
          <Skeleton className="h-12 w-full mb-12" />
          <div className="space-y-8">
            <Skeleton className="h-48 w-full" />
            <div className="grid md:grid-cols-3 gap-6">
              <Skeleton className="h-40 w-full" />
              <Skeleton className="h-40 w-full" />
              <Skeleton className="h-40 w-full" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="min-h-screen text-center py-20">Error: {error}</div>;
  }
  
  if (!academicsData) {
    return <div className="min-h-screen text-center py-20">No academic data available.</div>;
  }


  return (
    <div className="min-h-screen">
      <section className="py-18">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-7xl mx-auto">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-12">
              <TabsTrigger value="curriculum" className="text-base py-3">
                Curriculum
              </TabsTrigger>
              <TabsTrigger value="subjects" className="text-base py-3">
                Subjects
              </TabsTrigger>
              <TabsTrigger value="grades" className="text-base py-3">
                Grade Levels
              </TabsTrigger>
            </TabsList>

            <TabsContent value="curriculum" className="animate-fade-up">
              <div className="space-y-8">
                <Card className="hover-lift">
                  <CardContent className="p-8 space-y-4">
                    <h2 className="text-3xl font-bold">{academicsData.philosophy.title}</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {academicsData.philosophy.description}
                    </p>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-3 gap-6">
                  {academicsData.pillars.map((pillar, idx) => {
                    const Icon = iconMap[pillar.icon] || BookOpen; // Fallback icon
                    return (
                      <Card key={idx} className="hover-lift">
                        <CardContent className="p-6 space-y-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                            <Icon className="h-6 w-6" />
                          </div>
                          <h3 className="text-xl font-bold">{pillar.title}</h3>
                          <p className="text-muted-foreground text-sm">{pillar.description}</p>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="subjects" className="animate-fade-up">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {academicsData.subjects.map((subject, idx) => {
                  const Icon = iconMap[subject.icon] || BookOpen; // Fallback icon
                  return (
                    <Card key={idx} className="hover-lift">
                      <CardContent className="p-6 space-y-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="text-lg font-bold">{subject.name}</h3>
                        <p className="text-muted-foreground text-sm">{subject.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            <TabsContent value="grades" className="animate-fade-up">
              <div className="space-y-6">
                {academicsData.grade_levels.map((grade, idx) => (
                  <Card key={idx} className="hover-lift">
                    <CardContent className="p-8 space-y-4">
                      <div className="flex items-start justify-between flex-wrap gap-4">
                        <div>
                          <h3 className="text-2xl font-bold">{grade.level}</h3>
                          <p className="text-primary font-semibold">{grade.focus}</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {grade.description}
                      </p>
                      <div className="pt-4">
                        <p className="text-sm font-semibold mb-3">Subjects Offered:</p>
                        <div className="flex flex-wrap gap-2">
                          {grade.subjects.map((subject, subIdx) => (
                            <span
                              key={subIdx}
                              className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                            >
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Academics;