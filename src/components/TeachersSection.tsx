import { useState } from "react";
import { ChevronLeft, ChevronRight, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const teachers = [
  {
    name: "Ibu Siti Nurhaliza, S.Pd",
    position: "Kepala Sekolah",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Ibu Fatimah, S.Pd.AUD",
    position: "Guru Kelas A",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Ibu Aisyah, S.Pd",
    position: "Guru Kelas B",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Ibu Khadijah, S.Pd.AUD",
    position: "Guru Pendamping",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Ibu Maryam, A.Md",
    position: "Guru Seni",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Bapak Ahmad, S.Pd",
    position: "Guru Olahraga",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
  },
];

const TeachersSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;
  const maxIndex = Math.max(0, teachers.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section id="guru" className="py-20 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-20 left-0 w-64 h-64 bg-pastel-pink rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-pastel-purple rounded-full opacity-20 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-pastel-pink/50 px-4 py-2 rounded-full mb-4">
            <GraduationCap className="w-4 h-4 text-pink-500" />
            <span className="text-sm font-medium text-pink-600">Tim Pengajar</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Guru PAUD Damhil DWP UNG
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tenaga pendidik profesional dan berpengalaman yang penuh kasih sayang dalam mendampingi anak-anak
          </p>
        </div>

        {/* Teachers Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-card shadow-lg rounded-full w-12 h-12 hidden md:flex"
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-card shadow-lg rounded-full w-12 h-12 hidden md:flex"
            onClick={handleNext}
            disabled={currentIndex >= maxIndex}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Carousel Container */}
          <div className="overflow-hidden px-4">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {teachers.map((teacher, index) => (
                <div
                  key={index}
                  className="w-full md:w-1/3 flex-shrink-0 px-3"
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                    <CardContent className="p-6 text-center">
                      <div className="relative w-32 h-32 mx-auto mb-5">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full animate-pulse opacity-30" />
                        <img
                          src={teacher.image}
                          alt={teacher.name}
                          className="w-full h-full object-cover rounded-full border-4 border-card shadow-lg group-hover:scale-105 transition-transform duration-300 relative z-10"
                        />
                      </div>
                      <h3 className="font-heading text-lg font-bold text-foreground mb-1">
                        {teacher.name}
                      </h3>
                      <p className="text-primary font-medium text-sm">
                        {teacher.position}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {teachers.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary w-6" : "bg-muted-foreground/30"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachersSection;
