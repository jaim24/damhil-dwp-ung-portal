import { useState } from "react";
import { ChevronLeft, ChevronRight, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const teachers = [
  { name: "Guru 1", position: "Guru Kelas A1", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop&crop=face" },
  { name: "Guru 2", position: "Guru Kelas A2", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face" },
  { name: "Guru 3", position: "Guru Kelas B1", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face" },
  { name: "Guru 4", position: "Guru Kelas B2", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face" },
  { name: "Guru 5", position: "Guru Pendamping", image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=300&h=300&fit=crop&crop=face" },
  { name: "Guru 6", position: "Guru Pendamping", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face" },
  { name: "Guru 7", position: "Guru Seni", image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=300&h=300&fit=crop&crop=face" },
  { name: "Guru 8", position: "Guru Olahraga", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop&crop=face" },
  { name: "Guru 9", position: "Guru Agama", image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300&h=300&fit=crop&crop=face" },
  { name: "Guru 10", position: "Guru Kelas C1", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face" },
  { name: "Guru 11", position: "Guru Kelas C2", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&h=300&fit=crop&crop=face" },
  { name: "Guru 12", position: "Guru Pendamping", image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=300&h=300&fit=crop&crop=face" },
  { name: "Guru 13", position: "Guru Pendamping", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop&crop=face" },
  { name: "Guru 14", position: "Guru Kreativitas", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=300&fit=crop&crop=face" },
  { name: "Guru 15", position: "Guru Pendamping", image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=300&h=300&fit=crop&crop=face" },
  { name: "Guru 16", position: "Guru Pendamping", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face" },
  { name: "Guru 17", position: "Guru Pendamping", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" },
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
