import { useState } from "react";
import { Camera, Star, Heart } from "lucide-react";
import { activities, activityDescription } from "@/data/activities";
import ImageLightbox from "./ImageLightbox";

// Dekorasi untuk setiap foto
const PhotoDecoration = ({ index }: { index: number }) => {
  const decorations = [
    // Bintang kuning
    <Star key="star" className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-bounce-gentle z-10" style={{ animationDelay: '0.3s' }} fill="currentColor" />,
    // Hati pink
    <Heart key="heart" className="absolute -top-2 -left-2 w-5 h-5 text-pink-400 animate-float z-10" style={{ animationDelay: '0.5s' }} fill="currentColor" />,
    // Lingkaran
    <div key="circle" className="absolute -bottom-2 -right-2 w-5 h-5 rounded-full bg-blue-300/60 animate-bounce-gentle z-10" style={{ animationDelay: '0.7s' }} />,
    // Segitiga
    <div key="triangle" className="absolute -top-2 -left-2 w-0 h-0 border-l-[8px] border-r-[8px] border-b-[14px] border-l-transparent border-r-transparent border-b-green-400/70 animate-float z-10" style={{ animationDelay: '0.4s' }} />,
    // Balok
    <div key="block" className="absolute -bottom-2 -left-2 w-5 h-5 rounded-md bg-orange-300/60 rotate-12 animate-float z-10" style={{ animationDelay: '0.6s' }} />,
    // Bintang ungu
    <Star key="star2" className="absolute -bottom-2 -right-2 w-5 h-5 text-purple-400 animate-bounce-gentle z-10" style={{ animationDelay: '0.8s' }} fill="currentColor" />,
  ];
  
  return decorations[index % decorations.length];
};

const ActivitiesSection = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % activities.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + activities.length) % activities.length);
  };

  const allImages = activities.map((a) => a.image);

  return (
    <section id="aktivitas" className="py-20 bg-card relative overflow-hidden">
      {/* Section decorations */}
      <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-yellow-200/30 animate-float" />
      <div className="absolute bottom-20 right-10 w-12 h-12 rounded-full bg-pink-200/30 animate-bounce-gentle" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-5 w-8 h-8 rounded-lg bg-blue-200/30 rotate-45 animate-float" style={{ animationDelay: '0.5s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
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

        {/* Gallery Grid - Photo only with title */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto mb-12">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] rounded-2xl overflow-visible cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              {/* Photo decoration */}
              <PhotoDecoration index={index} />
              
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=300&fit=crop";
                  }}
                />
                {/* Title overlay - always visible at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-foreground/80 to-transparent p-4">
                  <p className="text-primary-foreground font-heading font-semibold text-sm md:text-base">
                    {activity.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-pastel-blue/40 via-pastel-green/40 to-pastel-yellow/40 rounded-2xl p-8 text-center relative overflow-hidden">
            {/* Description decorations */}
            <Star className="absolute top-4 left-4 w-5 h-5 text-yellow-400/50 animate-bounce-gentle" fill="currentColor" />
            <Heart className="absolute bottom-4 right-4 w-5 h-5 text-pink-400/50 animate-float" fill="currentColor" />
            
            <h3 className="font-heading text-xl font-bold text-foreground mb-4">
              {activityDescription.title}
            </h3>
            <p className="text-foreground/80 leading-relaxed">
              {activityDescription.description}
            </p>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <ImageLightbox
        images={allImages}
        currentIndex={selectedImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
        title={activities[selectedImageIndex]?.title}
      />
    </section>
  );
};

export default ActivitiesSection;
