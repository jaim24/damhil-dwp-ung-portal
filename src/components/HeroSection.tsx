import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Star } from "lucide-react";
import { stats } from "@/data/stats";

const HeroSection = () => {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="beranda"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-pastel-blue via-background to-pastel-green opacity-50" />
      
      {/* Floating decorations */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-pastel-yellow rounded-full animate-float opacity-60" />
      <div className="absolute top-40 right-20 w-12 h-12 bg-pastel-pink rounded-full animate-bounce-gentle opacity-60" />
      <div className="absolute bottom-40 left-20 w-20 h-20 bg-pastel-purple rounded-full animate-float opacity-40" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-20 right-10 w-14 h-14 bg-pastel-orange rounded-full animate-bounce-gentle opacity-50" style={{ animationDelay: "0.5s" }} />
      
      {/* Stars decoration */}
      <Star className="absolute top-32 right-1/4 w-8 h-8 text-accent animate-bounce-gentle" style={{ animationDelay: "0.3s" }} />
      <Sparkles className="absolute bottom-32 left-1/4 w-10 h-10 text-primary/40 animate-float" style={{ animationDelay: "0.7s" }} />
      <Heart className="absolute top-1/3 left-10 w-6 h-6 text-pastel-pink animate-bounce-gentle" style={{ animationDelay: "1.2s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6 animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">
              Pendidikan Anak Usia Dini Berkualitas
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Selamat Datang di{" "}
            <span className="text-primary">PAUD Damhil</span>{" "}
            <span className="text-secondary-foreground">DWP UNG</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Membentuk Generasi <span className="text-primary font-semibold">Cerdas</span>,{" "}
            <span className="text-secondary-foreground font-semibold">Ceria</span>, dan{" "}
            <span className="text-accent-foreground font-semibold">Berakhlak Mulia</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => handleScroll("#kontak")}
            >
              <Heart className="w-5 h-5 mr-2" />
              Hubungi Kami
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary/10 font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:-translate-y-1"
              onClick={() => handleScroll("#program")}
            >
              <Star className="w-5 h-5 mr-2" />
              Lihat Program
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 mt-16 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="text-center p-4 bg-card/50 backdrop-blur-sm rounded-2xl">
              <div className="text-3xl md:text-4xl font-bold text-primary font-heading">{stats.yearsOfExperience}</div>
              <div className="text-sm text-muted-foreground mt-1">{stats.yearsLabel}</div>
            </div>
            <div className="text-center p-4 bg-card/50 backdrop-blur-sm rounded-2xl">
              <div className="text-3xl md:text-4xl font-bold text-secondary-foreground font-heading">{stats.alumni}</div>
              <div className="text-sm text-muted-foreground mt-1">{stats.alumniLabel}</div>
            </div>
            <div className="text-center p-4 bg-card/50 backdrop-blur-sm rounded-2xl">
              <div className="text-3xl md:text-4xl font-bold text-accent-foreground font-heading">{stats.teachers}</div>
              <div className="text-sm text-muted-foreground mt-1">{stats.teachersLabel}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--card))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
