import { Quote } from "lucide-react";

const PrincipalSection = () => {
  return (
    <section id="pengelola" className="py-20 bg-gradient-to-br from-paud-blue/20 via-white to-paud-pink/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-paud-purple/20 text-paud-purple rounded-full text-sm font-semibold mb-4">
            Pengelola Kami
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-heading">
            Pengelola PAUD Damhil DWP UNG
          </h2>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left - Quote & Info */}
              <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
                <div className="relative">
                  <Quote className="w-12 h-12 text-paud-yellow mb-4" />
                  <blockquote className="text-xl md:text-2xl text-foreground/80 leading-relaxed italic mb-6">
                    "Pendidikan anak usia dini adalah pondasi terpenting dalam membentuk generasi yang cerdas, 
                    berkarakter, dan berakhlak mulia. Bersama, kita wujudkan masa depan cerah untuk anak-anak kita."
                  </blockquote>
                  <div className="w-16 h-1 bg-gradient-to-r from-paud-yellow to-paud-pink rounded-full mb-6"></div>
                </div>
                
                <div className="mt-4">
                  <h3 className="text-2xl font-bold text-foreground font-heading">
                    Nama Pengelola
                  </h3>
                  <p className="text-paud-purple font-semibold mt-1">
                    Kepala Sekolah PAUD Damhil DWP UNG
                  </p>
                  <p className="text-muted-foreground mt-2 text-sm">
                    S.Pd., M.Pd. | Pendidikan Anak Usia Dini
                  </p>
                </div>
              </div>

              {/* Right - Photo */}
              <div className="relative order-1 md:order-2 min-h-[300px] md:min-h-[450px]">
                <div className="absolute inset-0 bg-gradient-to-br from-paud-blue via-paud-purple to-paud-pink opacity-20"></div>
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=700&fit=crop&crop=face"
                  alt="Pengelola PAUD Damhil DWP UNG"
                  className="w-full h-full object-cover"
                />
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-paud-yellow/30 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-paud-pink/30 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipalSection;
