import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Microscope, Globe, Calculator, Palette, Music, Trophy, Languages } from "lucide-react";

const Academics = () => {
  const [activeTab, setActiveTab] = useState("curriculum");

  const subjects = [
    {
      icon: BookOpen,
      name: "English Language & Literature",
      description: "Comprehensive language skills, literature analysis, and creative writing"
    },
    {
      icon: Calculator,
      name: "Mathematics",
      description: "From basic arithmetic to advanced calculus and problem-solving"
    },
    {
      icon: Microscope,
      name: "Sciences",
      description: "Physics, Chemistry, Biology with hands-on laboratory experience"
    },
    {
      icon: Globe,
      name: "Social Studies",
      description: "History, Geography, Civics, and Global Awareness"
    },
    {
      icon: Languages,
      name: "Foreign Languages",
      description: "Spanish, French, and Mandarin language programs"
    },
    {
      icon: Palette,
      name: "Arts & Crafts",
      description: "Visual arts, design thinking, and creative expression"
    },
    {
      icon: Music,
      name: "Music & Performing Arts",
      description: "Instrumental, vocal, drama, and dance programs"
    },
    {
      icon: Trophy,
      name: "Physical Education",
      description: "Sports, fitness, health education, and teamwork"
    }
  ];

  const grades = [
    {
      level: "Primary (Grades 1-5)",
      focus: "Foundation Building",
      description: "Core literacy and numeracy skills, introduction to sciences, arts, and physical education. Focus on social-emotional learning and basic digital literacy.",
      subjects: ["English", "Mathematics", "Science", "Social Studies", "Art", "Music", "Physical Education"]
    },
    {
      level: "Middle School (Grades 6-8)",
      focus: "Skill Development",
      description: "Advanced subject knowledge, critical thinking development, project-based learning, and introduction to electives. Emphasis on independence and responsibility.",
      subjects: ["English", "Mathematics", "Physics", "Chemistry", "Biology", "History", "Geography", "Foreign Languages", "Computer Science", "Arts", "Physical Education"]
    },
    {
      level: "High School (Grades 9-12)",
      focus: "College Preparation",
      description: "Rigorous academic curriculum, AP and honors courses, college counseling, and specialized electives. Preparing for higher education and career paths.",
      subjects: ["Advanced English", "Calculus & Statistics", "Advanced Sciences", "Social Sciences", "Multiple Foreign Languages", "Advanced Arts", "Technology & Engineering", "Research Methods"]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-primary-light/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Academics</h1>
            <p className="text-xl text-muted-foreground">
              A comprehensive curriculum designed to inspire, challenge, and prepare students for success
            </p>
          </div>
        </div>
      </section>

      {/* Tabbed Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
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
                    <h2 className="text-3xl font-bold">Our Curriculum Philosophy</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      At Anarmani Liberty School, we believe in a balanced approach to education that nurtures 
                      the whole child. Our curriculum is designed to develop not just academic excellence, but 
                      also critical thinking, creativity, character, and social responsibility.
                    </p>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="hover-lift">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <BookOpen className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold">Core Academics</h3>
                      <p className="text-muted-foreground text-sm">
                        Strong foundation in Language Arts, Mathematics, Sciences, and Social Studies
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover-lift">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Palette className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold">Arts & Creativity</h3>
                      <p className="text-muted-foreground text-sm">
                        Visual arts, music, drama, and creative expression integrated throughout
                      </p>
                    </CardContent>
                  </Card>

                  <Card className="hover-lift">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Trophy className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold">Physical Development</h3>
                      <p className="text-muted-foreground text-sm">
                        Sports, fitness, and health education promoting active lifestyles
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="subjects" className="animate-fade-up">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {subjects.map((subject, idx) => (
                  <Card key={idx} className="hover-lift">
                    <CardContent className="p-6 space-y-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <subject.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-bold">{subject.name}</h3>
                      <p className="text-muted-foreground text-sm">{subject.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="grades" className="animate-fade-up">
              <div className="space-y-6">
                {grades.map((grade, idx) => (
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
