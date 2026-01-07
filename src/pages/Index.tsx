import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProfileSection from "@/components/ProfileSection";
import ProgramsSection from "@/components/ProgramsSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import TeachersSection from "@/components/TeachersSection";
import NewsSection from "@/components/NewsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ProfileSection />
        <ProgramsSection />
        <ActivitiesSection />
        <TeachersSection />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
