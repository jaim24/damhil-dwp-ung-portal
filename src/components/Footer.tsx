import { Heart, Facebook, Instagram, Youtube, Mail } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "Youtube" },
  { icon: Mail, href: "mailto:paud.damhil@ung.ac.id", label: "Email" },
];

const quickLinks = [
  { href: "#beranda", label: "Beranda" },
  { href: "#profil", label: "Profil" },
  { href: "#program", label: "Program" },
  { href: "#aktivitas", label: "Aktivitas" },
  { href: "#guru", label: "Guru" },
  { href: "#berita", label: "Berita" },
  { href: "#kontak", label: "Kontak" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-xl">
                  PD
                </span>
              </div>
              <div>
                <h3 className="font-heading font-bold text-lg">PAUD Damhil</h3>
                <p className="text-background/70 text-sm">DWP UNG</p>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Membentuk generasi cerdas, ceria, dan berakhlak mulia melalui
              pendidikan anak usia dini yang berkualitas dan menyenangkan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Menu</h4>
            <ul className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-background/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Ikuti Kami</h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/70 text-sm text-center md:text-left">
              © {currentYear} PAUD Damhil DWP UNG. Hak Cipta Dilindungi.
            </p>
            <p className="text-background/70 text-sm flex items-center gap-1">
              Dibuat dengan{" "}
              <Heart className="w-4 h-4 text-destructive inline" /> di Gorontalo
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
