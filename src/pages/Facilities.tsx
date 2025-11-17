import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Microscope, Computer, Dumbbell, Music, Palette, Library, Bus } from "lucide-react";
import libraryImg from "@/assets/library.jpg";
import scienceLabImg from "@/assets/science-lab.jpg";
import computerLabImg from "@/assets/computer-lab.jpg";

const Facilities = () => {
  const facilities = [
    {
      icon: Library,
      name: "Modern Library",
      description: "Extensive collection of books, digital resources, and quiet study spaces",
      image: libraryImg
    },
    {
      icon: Microscope,
      name: "Science Laboratories",
      description: "State-of-the-art labs for Physics, Chemistry, and Biology with modern equipment",
      image: scienceLabImg
    },
    {
      icon: Computer,
      name: "Computer Labs",
      description: "Latest technology and software for digital learning and coding",
      image: computerLabImg
    },
    {
      icon: Dumbbell,
      name: "Sports Complex",
      description: "Indoor and outdoor facilities including basketball, tennis, and swimming",
      image: "/placeholder.svg"
    },
    {
      icon: Music,
      name: "Music Rooms",
      description: "Soundproof studios with instruments and recording equipment",
      image: "/placeholder.svg"
    },
    {
      icon: Palette,
      name: "Art Studios",
      description: "Dedicated spaces for painting, sculpture, and creative arts",
      image: "/placeholder.svg"
    },
    {
      icon: BookOpen,
      name: "Smart Classrooms",
      description: "Interactive whiteboards, projectors, and modern learning tools",
      image: "/placeholder.svg"
    },
    {
      icon: Bus,
      name: "Transportation",
      description: "Safe and reliable school bus service covering all areas",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      {/* <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-primary-light/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Facilities</h1>
            <p className="text-xl text-muted-foreground">
              World-class infrastructure designed to support 21st-century learning
            </p>
          </div>
        </div>
      </section> */}

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, idx) => (
              <Card 
                key={idx} 
                className="group overflow-hidden hover-lift cursor-pointer"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/20 to-primary-light/20">
                  <img
                    src={facility.image}
                    alt={facility.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                      <facility.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-white font-bold text-lg">{facility.name}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground">{facility.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Additional Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything designed with student safety, comfort, and learning in mind
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Air Conditioned", desc: "Climate-controlled classrooms" },
              { title: "Security", desc: "24/7 surveillance and safety" },
              { title: "Medical Room", desc: "On-site health support" },
              { title: "Cafeteria", desc: "Nutritious meals daily" }
            ].map((feature, idx) => (
              <Card key={idx} className="hover-lift">
                <CardContent className="p-6 text-center space-y-2">
                  <h3 className="text-lg font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;
