import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
}

const ServiceCard = ({ icon: Icon, title, description, features }: ServiceCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm card-hover flex flex-col items-center justify-center text-center p-6">
  {/* Gradient overlay on hover */}
  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  
  <CardHeader className="relative flex flex-col items-center justify-center">
    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-accent p-0.5 mb-4">
      <div className="w-full h-full rounded-lg bg-card flex items-center justify-center">
        <Icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors duration-300" />
      </div>
    </div>
    <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
      {title}
    </CardTitle>
    <CardDescription className="text-muted-foreground">
      {description}
    </CardDescription>
  </CardHeader>
  
  {features && features.length > 0 && (
    <CardContent className="relative flex flex-col items-center justify-center mt-4">
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span className="text-accent">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
  )}
</Card>

  );
};

export default ServiceCard;
