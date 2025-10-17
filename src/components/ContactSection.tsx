import { Facebook, Phone, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const ContactSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            اتصل بنا
          </h2>
          <p className="text-muted-foreground">
            تواصل معنا لبدء مشروعك القادم
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto">
          {/* Facebook */}
          <a
            href="https://www.facebook.com/share/1FN3pVmzxd/
"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white gap-3 px-8 py-6 h-auto"
            >
              <Facebook className="w-6 h-6" />
              <span className="text-lg">فيسبوك</span>
            </Button>
          </a>

          {/* Phone */}
          <a href="tel:0792723764" className="group">
            <Button
              size="lg"
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white gap-3 px-8 py-6 h-auto"
            >
              <Phone className="w-6 h-6" />
              <span className="text-lg" dir="ltr">0792723764</span>
            </Button>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/213654791167"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white gap-3 px-8 py-6 h-auto"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="text-lg" dir="ltr">0654791167</span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
