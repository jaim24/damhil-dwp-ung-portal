import { Camera, Play } from "lucide-react";

const activities = [
  {
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=300&fit=crop",
    title: "Kegiatan Bermain",
  },
  {
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=300&fit=crop",
    title: "Belajar Mewarnai",
  },
  {
    image: "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=400&h=300&fit=crop",
    title: "Aktivitas Outdoor",
  },
  {
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=400&h=300&fit=crop",
    title: "Menyanyi Bersama",
  },
  {
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop",
    title: "Kegiatan Belajar",
  },
  {
    image: "https://images.unsplash.com/photo-1560785496-3c9d27877182?w=400&h=300&fit=crop",
    title: "Bermain Bersama",
  },
];

const ActivitiesSection = () => {
  return (
    <section id="aktivitas" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/30 px-4 py-2 rounded-full mb-4">
            <Camera className="w-4 h-4 text-accent-foreground" />
            <span className="text-sm font-medium text-accent-foreground">Galeri</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Aktivitas Anak
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Momen-momen berharga kegiatan belajar dan bermain anak-anak di PAUD Damhil DWP UNG
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mb-12">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-primary-foreground font-heading font-semibold text-sm md:text-base">
                  {activity.title}
                </p>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 bg-primary/80 rounded-full flex items-center justify-center">
                  <Play className="w-5 h-5 text-primary-foreground ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-pastel-blue/40 via-pastel-green/40 to-pastel-yellow/40 rounded-2xl p-8 text-center">
            <h3 className="font-heading text-xl font-bold text-foreground mb-4">
              Kegiatan Harian & Kegiatan Khusus
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              Setiap hari, anak-anak kami mengikuti berbagai aktivitas yang menyenangkan dan edukatif. 
              Mulai dari kegiatan motorik pagi, pembelajaran tematik, hingga waktu bermain bebas. 
              Selain itu, kami juga menyelenggarakan kegiatan khusus seperti perayaan hari besar, 
              field trip edukatif, dan pentas seni yang melibatkan orang tua untuk mempererat 
              hubungan antara sekolah dan keluarga.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
