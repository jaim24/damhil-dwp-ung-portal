import { Newspaper, Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const newsItems = [
  {
    title: "Pendaftaran Siswa Baru Tahun Ajaran 2025/2026",
    excerpt: "Dibuka pendaftaran siswa baru untuk tahun ajaran 2025/2026. Segera daftarkan putra-putri Anda untuk mendapatkan pendidikan terbaik.",
    date: "5 Januari 2025",
    category: "Pengumuman",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop",
  },
  {
    title: "Perayaan Hari Kartini 2025",
    excerpt: "PAUD Damhil DWP UNG mengadakan perayaan Hari Kartini dengan berbagai kegiatan menarik dan penampilan anak-anak.",
    date: "21 April 2025",
    category: "Kegiatan",
    image: "https://images.unsplash.com/photo-1571210862729-78a52d3779a2?w=400&h=250&fit=crop",
  },
  {
    title: "Kunjungan Edukatif ke Kebun Binatang",
    excerpt: "Anak-anak PAUD Damhil melakukan kunjungan edukatif untuk mengenal berbagai jenis hewan dan habitatnya.",
    date: "15 Maret 2025",
    category: "Field Trip",
    image: "https://images.unsplash.com/photo-1503919545889-aef636e10ad4?w=400&h=250&fit=crop",
  },
];

const NewsSection = () => {
  return (
    <section id="berita" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-pastel-orange/50 px-4 py-2 rounded-full mb-4">
            <Newspaper className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-orange-600">Informasi Terkini</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Berita & Pengumuman
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ikuti perkembangan terbaru kegiatan dan informasi penting dari PAUD Damhil DWP UNG
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {newsItems.map((news, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  {news.category}
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{news.date}</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {news.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
                  {news.excerpt}
                </p>
                <Button
                  variant="ghost"
                  className="p-0 h-auto text-primary hover:text-primary/80 font-semibold group/btn"
                >
                  Baca Selengkapnya
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
