import { Quote, Star, Heart, Sparkles } from "lucide-react";
import { headmaster } from "@/data/headmaster";

const HeadmasterSection = () => {
  return (
    <section id="kepala-sekolah" className="py-20 bg-gradient-to-br from-paud-yellow/20 via-white to-paud-green/20 relative overflow-hidden">
      {/* Decorations */}
      <div className="absolute top-10 left-10 opacity-30">
        <Star className="w-8 h-8 text-paud-yellow animate-bounce-gentle" />
      </div>
      <div className="absolute top-20 right-16 opacity-30">
        <Heart className="w-6 h-6 text-paud-pink animate-float" />
      </div>
      <div className="absolute bottom-20 left-16 opacity-30">
        <Sparkles className="w-7 h-7 text-paud-purple animate-bounce-gentle" style={{ animationDelay: "0.5s" }} />
      </div>
      <div className="absolute bottom-10 right-10 opacity-30">
        <Star className="w-6 h-6 text-paud-green animate-float" style={{ animationDelay: "0.3s" }} />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-paud-yellow/20 text-paud-orange rounded-full text-sm font-semibold mb-4">
            Kepala Sekolah Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading">
            Kepala Sekolah PAUD Damhil DWP UNG
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden relative">
            {/* Card decorations */}
            <div className="absolute top-4 left-4 w-12 h-12 bg-paud-yellow/20 rounded-full blur-lg" />
            <div className="absolute bottom-4 right-4 w-16 h-16 bg-paud-green/20 rounded-full blur-lg" />
            
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left - Photo */}
              <div className="relative order-1 min-h-[300px] md:min-h-[450px]">
                <div className="absolute inset-0 bg-gradient-to-br from-paud-yellow via-paud-orange to-paud-pink opacity-20"></div>
                <img
                  src={headmaster.image}
                  alt={headmaster.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=700&fit=crop&crop=face";
                  }}
                />
                {/* Decorative Elements */}
                <div className="absolute top-4 left-4 w-20 h-20 bg-paud-yellow/30 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 right-4 w-16 h-16 bg-paud-green/30 rounded-full blur-xl"></div>
                
                {/* Corner decorations */}
                <div className="absolute top-6 right-6">
                  <Star className="w-6 h-6 text-white/60 animate-bounce-gentle" />
                </div>
                <div className="absolute bottom-6 left-6">
                  <Heart className="w-5 h-5 text-white/60 animate-float" />
                </div>
              </div>

              {/* Right - Quote & Info */}
              <div className="p-8 md:p-12 flex flex-col justify-center order-2">
                <div className="relative">
                  <Quote className="w-12 h-12 text-paud-orange mb-4" />
                  <blockquote className="text-xl md:text-2xl text-foreground/80 leading-relaxed italic mb-6">
                    "{headmaster.quote}"
                  </blockquote>
                  <div className="w-16 h-1 bg-gradient-to-r from-paud-orange to-paud-yellow rounded-full mb-6"></div>
                </div>
                
                <div className="mt-4">
                  <h3 className="text-2xl font-bold text-foreground font-heading">
                    {headmaster.name}
                  </h3>
                  <p className="text-paud-orange font-semibold mt-1">
                    {headmaster.position}
                  </p>
                  <p className="text-muted-foreground mt-2 text-sm">
                    {headmaster.credential}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadmasterSection;
