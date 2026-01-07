import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const contactInfo = [
  {
    icon: MapPin,
    title: "Alamat",
    content: "Jl. Jenderal Sudirman No. 6, Kota Gorontalo, Gorontalo 96128",
    color: "pastel-blue",
    iconColor: "text-primary",
  },
  {
    icon: Phone,
    title: "WhatsApp",
    content: "+62 812-3456-7890",
    color: "pastel-green",
    iconColor: "text-emerald-500",
  },
  {
    icon: Mail,
    title: "Email",
    content: "paud.damhil@ung.ac.id",
    color: "pastel-yellow",
    iconColor: "text-amber-500",
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    content: "Senin - Jumat: 07:30 - 12:00 WIT",
    color: "pastel-pink",
    iconColor: "text-pink-500",
  },
];

const ContactSection = () => {
  const handleWhatsApp = () => {
    window.open(
      "https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20bertanya%20tentang%20PAUD%20Damhil%20DWP%20UNG",
      "_blank"
    );
  };

  return (
    <section id="kontak" className="py-20 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pastel-blue rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pastel-green rounded-full opacity-20 blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Hubungi Kami</span>
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Kontak & Lokasi
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Jangan ragu untuk menghubungi kami jika ada pertanyaan tentang pendaftaran atau informasi lainnya
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                        style={{ backgroundColor: `hsl(var(--${info.color}))` }}
                      >
                        <info.icon className={`w-5 h-5 ${info.iconColor}`} />
                      </div>
                      <div>
                        <h4 className="font-heading font-bold text-foreground mb-1">
                          {info.title}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {info.content}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* WhatsApp Button */}
            <Button
              size="lg"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Hubungi via WhatsApp
            </Button>
          </div>

          {/* Google Maps */}
          <Card className="overflow-hidden shadow-lg">
            <CardContent className="p-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.639!2d123.0594!3d0.5369!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMMKwMzInMTIuOCJOIDEyM8KwMDMnMzMuOCJF!5e0!3m2!1sen!2sid!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "350px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi PAUD Damhil DWP UNG"
                className="rounded-lg"
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
