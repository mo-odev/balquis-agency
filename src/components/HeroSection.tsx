import { Sparkles } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Glow effects */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse delay-1000" />

      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          {/* Profile Image Placeholder */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary/50 bg-card">
              <img 
                src={profileImage} 
                alt="صورة شخصية - معلقة صوتية وصانعة محتوى UGC"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Bio Section */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="text-gradient">ASultana Balquis Agency  </span>
            </h1>
            
            <div className="space-y-2 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              <p className="font-semibold text-foreground">لإعلاناتكم التجارية والاشهارية</p>
              <p className="text-primary font-medium">خلي المحتوى يخدم عليك</p>
              <p className="italic">صوت يجسد التفاصيل وصورة تعكس التميز</p>
              <p className="text-accent font-bold text-2xl mt-4">الاشهار هو القرار...</p>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce mt-8">
            <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
