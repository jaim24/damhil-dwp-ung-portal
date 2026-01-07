import { Newspaper, Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { news } from "@/data/news";

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
          {news.map((item, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&h=250&fit=crop";
                  }}
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                  Berita
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{item.date}</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">
                  {item.description}
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
