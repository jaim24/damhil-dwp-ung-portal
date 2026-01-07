import { Camera, Play } from "lucide-react";
import { activities, activityDescription } from "@/data/activities";

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
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=300&fit=crop";
                }}
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
              {activityDescription.title}
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              {activityDescription.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
