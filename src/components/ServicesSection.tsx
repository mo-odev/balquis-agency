import { 
  Mic, 
  Languages, 
  Scissors, 
  Palette, 
  Camera, 
  Video,
  FileText,
  Instagram,
  Youtube,
  Music
} from "lucide-react";
import ServiceCard from "./ServiceCard";
import { Button } from "@/components/ui/button";

const ServicesSection = () => {
  const services = [
    {
      icon: Mic,
      title: "تعليق صوتي بلهجات عربية",
      description: "أصوات احترافية بعدة لهجات عربية",
      features: [
        "لهجة خليجية",
        "لهجة فصحى",
        "دارجة ليبية",
        "اللهجة البيضاء",
        "لهجة السلطانة"
      ]
    },
    {
      icon: Languages,
      title: "تعليق صوتي بلغات أجنبية",
      description: "تعليق احترافي بلغات متعددة",
      features: [
        "الفرنسية",
        "الإسبانية",
        "الإنجليزية"
      ]
    },
    {
      icon: Scissors,
      title: "مونتاج احترافي",
      description: "دمج الصور والفيديوهات باحترافية عالية",
      features: []
    },
    {
      icon: Palette,
      title: "تصميم هوية بصرية",
      description: "كارت فيزيت، لوغو، وتصاميم مميزة",
      features: []
    },
    {
      icon: Camera,
      title: "تصوير منتجات",
      description: "تصوير احترافي لمنتجاتك بأعلى جودة",
      features: []
    },
    {
      icon: Video,
      title: "UGC وتمثيل إعلاني",
      description: "رأي عن المنتج وروتين المنتج",
      features: [
        "وجه إعلاني احترافي",
        "تمثيل مشروعات",
        "محتوى UGC أصيل"
      ]
    },
    {
      icon: FileText,
      title: "سكريبت إعلاني مدروس",
      description: "كتابة سكريبت من عدة زوايا",
      features: [
        "سكريبت قصير",
        "سكريبت طويل",
        "سكريبت مدروس استراتيجياً"
      ]
    },
    {
      icon: Instagram,
      title: "تصميم ريلز",
      description: "محتوى جذاب لمنصات التواصل",
      features: [
        "فيسبوك",
        "تيك توك",
        "انستغرام"
      ]
    },
    {
      icon: Youtube,
      title: "تسجيلات يوتيوب",
      description: "مقاطع طويلة احترافية لليوتيوب",
      features: []
    },
    {
      icon: Music,
      title: "إضافة المحتوى الصوتي",
      description: "بديل احترافي للموسيقى",
      features: []
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">الخدمات</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            خدمات متكاملة لإنتاج محتوى إبداعي واحترافي يلبي كل احتياجاتك الإعلانية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        {/* Free Taste CTA */}
        <div className="max-w-2xl mx-auto text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              لتجربة الخدمة
            </h3>
            <p className="text-muted-foreground mb-6">
              اطلب <span className="text-accent font-bold">تاست مجاني</span> يشابه مشروعك (10 ثواني)
            </p>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
