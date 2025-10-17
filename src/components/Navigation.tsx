import { Briefcase, FolderOpen, Lock } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

interface NavigationProps {
  activeTab: string;
  onTabChange: (value: string) => void;
}

const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  return (
    <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center gap-4">
          <Tabs value={activeTab} onValueChange={onTabChange} className="flex-1 max-w-md">
            <TabsList className="grid w-full grid-cols-2 bg-card/50 backdrop-blur-sm border border-border/50">
              <TabsTrigger 
                value="services" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-white"
              >
                <Briefcase className="w-4 h-4 mr-2" />
                الخدمات
              </TabsTrigger>
              <TabsTrigger 
                value="portfolio"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary data-[state=active]:to-accent data-[state=active]:text-white"
              >
                <FolderOpen className="w-4 h-4 mr-2" />
                معرض الأعمال
              </TabsTrigger>
            </TabsList>
          </Tabs>

          
        </div>
      </div>
    </div>
  );
};

export default Navigation;
