import { BookOpen, Eye, Target, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const misiList = [
  "Menyelenggarakan pendidikan yang mengembangkan potensi anak secara optimal",
  "Membentuk karakter anak yang berakhlak mulia dan cinta tanah air",
  "Menciptakan lingkungan belajar yang aman, nyaman, dan menyenangkan",
  "Mengembangkan kreativitas dan kecerdasan majemuk anak",
  "Menjalin kerjasama yang harmonis antara sekolah dan orang tua",
  "Mempersiapkan anak untuk jenjang pendidikan selanjutnya",
];

const ProfileSection = () => {
  return (
    <section id="profil" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Tentang Kami</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Profil PAUD Damhil DWP UNG
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mengenal lebih dekat tentang sekolah kami yang telah dipercaya masyarakat Gorontalo
          </p>
        </div>

        {/* About Description */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-gradient-to-br from-pastel-blue/30 to-pastel-green/30 border-none shadow-lg">
            <CardContent className="p-8">
              <p className="text-lg text-foreground leading-relaxed text-center">
                <span className="font-bold text-primary">PAUD Damhil DWP UNG</span> adalah lembaga pendidikan anak usia dini 
                yang berada di bawah naungan Dharma Wanita Persatuan Universitas Negeri Gorontalo. 
                Kami berkomitmen untuk memberikan pendidikan berkualitas yang mengedepankan 
                perkembangan kognitif, sosial-emosional, dan karakter anak melalui pendekatan 
                pembelajaran yang menyenangkan dan bermakna. Dengan lingkungan yang kondusif 
                dan tenaga pendidik yang profesional, kami siap menjadi mitra terbaik orang tua 
                dalam mendampingi tumbuh kembang putra-putri tercinta.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Visi & Misi */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Visi Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/20 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-pastel-blue rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Eye className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground">Visi</h3>
              </div>
              <p className="text-foreground/80 leading-relaxed text-lg">
                Menjadi lembaga Pendidikan Anak Usia Dini yang unggul dan terpercaya dalam 
                membentuk generasi yang cerdas, kreatif, mandiri, dan berakhlak mulia, 
                serta siap menghadapi tantangan pendidikan di masa depan dengan karakter 
                yang kuat dan jiwa yang ceria.
              </p>
            </CardContent>
          </Card>

          {/* Misi Card */}
          <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-secondary/20 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary to-accent" />
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-pastel-green rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-7 h-7 text-secondary-foreground" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground">Misi</h3>
              </div>
              <ul className="space-y-3">
                {misiList.map((misi, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary-foreground mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{misi}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
