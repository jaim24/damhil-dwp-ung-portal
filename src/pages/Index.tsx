import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProfileSection from "@/components/ProfileSection";
import ProgramsSection from "@/components/ProgramsSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import HeadmasterSection from "@/components/HeadmasterSection";
import PrincipalSection from "@/components/PrincipalSection";
import TeachersSection from "@/components/TeachersSection";
import NewsSection from "@/components/NewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import BackgroundDecorations from "@/components/BackgroundDecorations";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <BackgroundDecorations />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <ProfileSection />
        <ProgramsSection />
        <ActivitiesSection />
        <PrincipalSection />
        <HeadmasterSection />
        <TeachersSection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
