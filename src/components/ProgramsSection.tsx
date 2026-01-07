import { Gamepad2, Heart, Palette, BookHeart, Hand } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const programs = [
  {
    icon: Gamepad2,
    title: "Pembelajaran Berbasis Bermain",
    description: "Metode belajar sambil bermain yang menyenangkan untuk mengembangkan kreativitas dan kemampuan berpikir anak.",
    color: "pastel-blue",
    iconColor: "text-primary",
  },
  {
    icon: Heart,
    title: "Penguatan Karakter Anak",
    description: "Pembentukan karakter positif seperti kejujuran, disiplin, tanggung jawab, dan kepedulian terhadap sesama.",
    color: "pastel-pink",
    iconColor: "text-pink-500",
  },
  {
    icon: Palette,
    title: "Seni dan Kreativitas",
    description: "Mengembangkan bakat seni melalui menggambar, mewarnai, bernyanyi, menari, dan berbagai kegiatan kreatif lainnya.",
    color: "pastel-yellow",
    iconColor: "text-amber-500",
  },
  {
    icon: BookHeart,
    title: "Pendidikan Agama Sejak Dini",
    description: "Penanaman nilai-nilai agama dan moral sejak usia dini untuk membentuk pribadi yang berakhlak mulia.",
    color: "pastel-green",
    iconColor: "text-emerald-500",
  },
  {
    icon: Hand,
    title: "Motorik Halus dan Kasar",
    description: "Kegiatan yang dirancang untuk melatih koordinasi gerak tubuh, keseimbangan, dan keterampilan motorik anak.",
    color: "pastel-purple",
    iconColor: "text-purple-500",
  },
];

const ProgramsSection = () => {
  return (
    <section id="program" className="py-20 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-pastel-yellow rounded-full opacity-30 blur-2xl" />
      <div className="absolute bottom-10 left-10 w-40 h-40 bg-pastel-blue rounded-full opacity-30 blur-2xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/30 px-4 py-2 rounded-full mb-4">
            <Gamepad2 className="w-4 h-4 text-secondary-foreground" />
            <span className="text-sm font-medium text-secondary-foreground">Program Kami</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Program Kegiatan Unggulan
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Berbagai program pembelajaran yang dirancang khusus untuk mengoptimalkan tumbuh kembang anak
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-primary/10 overflow-hidden"
            >
              <CardContent className="p-6">
                <div
                  className={`w-16 h-16 bg-${program.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                  style={{
                    backgroundColor: `hsl(var(--${program.color}))`,
                  }}
                >
                  <program.icon className={`w-8 h-8 ${program.iconColor}`} />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {program.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {program.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
