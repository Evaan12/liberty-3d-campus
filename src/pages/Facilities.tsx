import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Microscope, Computer, Dumbbell, Music, Palette, Library, Bus, LucideProps, HelpCircle } from "lucide-react";
import { Facility as FacilityType } from "@/types/facilities";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

// Map string names to Lucide icon components. This is case-sensitive!
const iconComponents: { [key: string]: React.ComponentType<LucideProps> } = {
  Library,
  Microscope,
  Computer,
  Dumbbell,
  Music,
  Palette,
  BookOpen,
  Bus,
};

// A fallback icon for when a name doesn't match
const FallbackIcon = HelpCircle;

const Facilities = () => {
  const [facilities, setFacilities] = useState<FacilityType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("Facilities component mounted. Starting to fetch data...");

    const fetchFacilities = async () => {
      setLoading(true);
      setError(null);
      try {
        // This fetch call will now be proxied by Vite to http://127.0.0.1:8000/api/facilities/
        const response = await fetch('http://127.0.0.1:8000/api/facilities/');

        // Check if the HTTP response is successful
        if (!response.ok) {
          throw new Error(`Network response was not ok. Status: ${response.status} ${response.statusText}`);
        }

        const data: FacilityType[] = await response.json();
        console.log("Successfully fetched data:", data);
        setFacilities(data);
      } catch (error) {
        console.error("Failed to fetch facilities:", error);
        setError(error instanceof Error ? error.message : "An unknown error occurred.");
      } finally {
        setLoading(false);
      }
    };

    fetchFacilities();
  }, []); // The empty dependency array means this effect runs once when the component mounts

  const getIconComponent = (iconName: string) => {
    const Icon = iconComponents[iconName];
    if (!Icon) {
        console.warn(`Icon "${iconName}" not found. Using fallback.`);
        return FallbackIcon;
    }
    return Icon;
  };

  // Display a loading state
  if (loading) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, idx) => (
              <Card key={idx} className="overflow-hidden">
                <Skeleton className="w-full aspect-video" />
                <CardContent className="p-6 space-y-3">
                  <Skeleton className="h-6 w-3/4" />
                  <Skeleton className="h-4 w-full" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Display an error state
  if (error) {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <Alert variant="destructive" className="max-w-2xl mx-auto">
                    <AlertTriangle className="h-4 w-4" />
                    <AlertTitle>Error Fetching Data</AlertTitle>
                    <AlertDescription>
                        Could not load the facilities information. Please try again later.
                        <p className="mt-2 text-xs font-mono bg-red-100 dark:bg-red-900 p-2 rounded">{error}</p>
                    </AlertDescription>
                </Alert>
            </div>
        </section>
    );
  }

  return (
    <div className="min-h-screen">
      {/* ... Hero Section can go here ... */}

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, idx) => {
              const IconComponent = getIconComponent(facility.icon);
              return (
                <Card 
                  key={facility.id} 
                  className="group overflow-hidden hover-lift cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-primary/20 to-primary-light/20">
                    <img
                      src={facility.image || "/placeholder.svg"}
                      alt={facility.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg">
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <h3 className="text-white font-bold text-xl tracking-tight">{facility.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground">{facility.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* ... Additional Features Section ... */}
    </div>
  );
};

export default Facilities;