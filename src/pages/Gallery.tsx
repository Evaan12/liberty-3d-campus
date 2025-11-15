import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: "/placeholder.svg", alt: "School campus aerial view", category: "Campus" },
    { src: "/placeholder.svg", alt: "Students in science lab", category: "Academics" },
    { src: "/placeholder.svg", alt: "Sports day celebration", category: "Sports" },
    { src: "/placeholder.svg", alt: "Annual cultural program", category: "Events" },
    { src: "/placeholder.svg", alt: "Modern library", category: "Facilities" },
    { src: "/placeholder.svg", alt: "Art exhibition", category: "Arts" },
    { src: "/placeholder.svg", alt: "Basketball tournament", category: "Sports" },
    { src: "/placeholder.svg", alt: "Science fair projects", category: "Academics" },
    { src: "/placeholder.svg", alt: "Music concert", category: "Arts" },
    { src: "/placeholder.svg", alt: "Graduation ceremony", category: "Events" },
    { src: "/placeholder.svg", alt: "Computer lab", category: "Facilities" },
    { src: "/placeholder.svg", alt: "Students studying", category: "Campus" }
  ];

  const categories = ["All", "Campus", "Academics", "Sports", "Events", "Facilities", "Arts"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-primary-light/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Gallery</h1>
            <p className="text-xl text-muted-foreground">
              Glimpses of life at Anarmani Liberty School
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 sticky top-20 bg-background/95 backdrop-blur-md z-40 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="transition-all"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, idx) => (
              <Dialog key={idx}>
                <DialogTrigger asChild>
                  <Card 
                    className="group overflow-hidden cursor-pointer hover-lift"
                    onClick={() => setSelectedImage(image.src)}
                  >
                    <div className="relative aspect-square overflow-hidden bg-muted">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <p className="text-white text-sm font-semibold">{image.alt}</p>
                          <p className="text-white/80 text-xs">{image.category}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 overflow-hidden">
                  <div className="relative">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto"
                    />
                    <div className="p-6 bg-background">
                      <h3 className="text-xl font-bold mb-2">{image.alt}</h3>
                      <p className="text-muted-foreground">{image.category}</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
