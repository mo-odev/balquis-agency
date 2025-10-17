import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import Navigation from "@/components/Navigation";
import ServicesSection from "@/components/ServicesSection";
import PortfolioGallery from "@/components/PortfolioGallery";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const [activeTab, setActiveTab] = useState("services");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="relative">
        {activeTab === "services" && <ServicesSection />}
        {activeTab === "portfolio" && <PortfolioGallery />}
      </div>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 ASultana Balquis Agency
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
