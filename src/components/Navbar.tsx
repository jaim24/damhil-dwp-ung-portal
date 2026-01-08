import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/siteConfig";

const navLinks = [
  { href: "#beranda", label: "Beranda" },
  { href: "#profil", label: "Profil" },
  { href: "#program", label: "Program" },
  { href: "#aktivitas", label: "Aktivitas" },
  { href: "#guru", label: "Guru" },
  { href: "#berita", label: "Berita" },
  { href: "#kontak", label: "Kontak" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#beranda"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#beranda");
            }}
            className="flex items-center gap-3"
          >
            {siteConfig.logo ? (
              <img 
                src={siteConfig.logo} 
                alt={siteConfig.schoolName}
                className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-full"
                onError={(e) => {
                  // Fallback to text logo if image fails
                  e.currentTarget.style.display = 'none';
                  const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'flex';
                }}
              />
            ) : null}
            <div 
              className={`w-10 h-10 md:w-12 md:h-12 bg-primary rounded-full items-center justify-center ${siteConfig.logo ? 'hidden' : 'flex'}`}
            >
              <span className="text-primary-foreground font-heading font-bold text-lg md:text-xl">
                {siteConfig.logoInitials}
              </span>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-heading font-bold text-sm md:text-base text-foreground leading-tight">
                {siteConfig.schoolName}
              </h1>
              <p className="text-xs text-muted-foreground">{siteConfig.schoolSubtitle}</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors rounded-lg hover:bg-primary/10"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-card/95 backdrop-blur-md rounded-2xl mb-4 p-4 shadow-lg animate-fade-in">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="block px-4 py-3 text-sm font-medium text-foreground/80 hover:text-primary hover:bg-primary/10 transition-colors rounded-lg"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
