import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isFilterVisible, setIsFilterVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Fade out the filter bar when scrolling down
      setIsFilterVisible(window.scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const galleryImages = [
    { src: "src/assets/computer-lab.jpg", alt: "School campus aerial view", category: "Campus" },
    { src: "src/assets/computer-lab.jpg", alt: "School campus aerial view", category: "Campus" },
    { src: "src/assets/computer-lab.jpg", alt: "School campus aerial view", category: "Campus" },
    { src: "src/assets/computer-lab.jpg", alt: "School campus aerial view", category: "Campus" },
    { src: "src/assets/computer-lab.jpg", alt: "School campus aerial view", category: "Campus" },
    { src: "src/assets/computer-lab.jpg", alt: "School campus aerial view", category: "Campus" },
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
      {/* Filter Buttons */}
      <section
        className="py-8 sticky top-20 bg-background/95 backdrop-blur-md z-40 border-b transition-opacity duration-300"
        style={{ opacity: isFilterVisible ? 1 : 0, pointerEvents: isFilterVisible ? 'auto' : 'none' }}
      >
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
          {/* Responsive Grid: 2 columns on mobile, 3 on sm, 4 on lg */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4">
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
                        {/* Hide text overlay on mobile for a cleaner look */}
                        <div className="absolute bottom-4 left-4 right-4 hidden sm:block">
                          <p className="text-white text-sm font-semibold">{image.alt}</p>
                          <p className="text-white/80 text-xs">{image.category}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl p-0 rounded-lg">
                  <div className="relative">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-auto rounded-t-lg"
                    />
                    <div className="p-6 bg-background rounded-b-lg">
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