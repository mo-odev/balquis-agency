import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { LogOut, Plus, Trash2, Upload } from "lucide-react";

interface PortfolioItem {
  id: string;
  title: string;
  description: string | null;
  video_url: string;
  thumbnail_url: string | null;
  category: string | null;
  created_at: string;
}

const Admin = () => {
  const [user, setUser] = useState<any>(null);
  const [portfolioItems, setPortfolioItems] = useState<PortfolioItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    setUser({ id: 'anonymous' });
  }, []);

  useEffect(() => {
    fetchPortfolioItems();
  }, []);

  const fetchPortfolioItems = async () => {
    try {
      const { data, error } = await supabase
        .from("portfolio_items")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setPortfolioItems(data || []);
    } catch (error: any) {
      toast({
        title: "خطأ",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleAddItem = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { error } = await supabase.from("portfolio_items").insert({
        title,
        description,
        video_url: videoUrl,
        category,
      });

      if (error) throw error;

      toast({
        title: "تمت الإضافة بنجاح",
        description: "تم إضافة العمل إلى معرض الأعمال",
      });

      // Reset form
      setTitle("");
      setDescription("");
      setVideoUrl("");
      setCategory("");

      // Refresh list
      fetchPortfolioItems();
    } catch (error: any) {
      toast({
        title: "خطأ",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleDeleteItem = async (id: string) => {
    if (!confirm("هل أنت متأكد من حذف هذا العمل؟")) return;

    try {
      const { error } = await supabase
        .from("portfolio_items")
        .delete()
        .eq("id", id);

      if (error) throw error;

      toast({
        title: "تم الحذف بنجاح",
      });

      fetchPortfolioItems();
    } catch (error: any) {
      toast({
        title: "خطأ",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">جاري التحميل...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/5">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            لوحة التحكم
          </h1>
          <div className="flex gap-4 items-center">
            <Button variant="outline" onClick={() => navigate("/")}>
              عرض الموقع
            </Button>
            <Button variant="destructive" onClick={handleLogout}>
              <LogOut className="w-4 h-4 ml-2" />
              تسجيل الخروج
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Add New Item Form */}
        <div className="bg-card border border-border/50 rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Plus className="w-5 h-5" />
            إضافة عمل جديد
          </h2>

          <form onSubmit={handleAddItem} className="space-y-4">
            <div>
              <Label htmlFor="title">عنوان العمل *</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="مثال: إعلان منتج تجاري"
                required
              />
            </div>

            <div>
              <Label htmlFor="description">وصف العمل</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="وصف مختصر عن العمل..."
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="videoUrl">رابط الفيديو *</Label>
              <Input
                id="videoUrl"
                type="url"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
                placeholder="https://www.youtube.com/watch?v=..."
                required
                dir="ltr"
                className="text-left"
              />
              <p className="text-xs text-muted-foreground mt-1">
                يمكنك استخدام روابط من YouTube أو Vimeo أو روابط مباشرة
              </p>
            </div>

            <div>
              <Label htmlFor="category">التصنيف</Label>
              <Input
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                placeholder="مثال: تعليق صوتي، UGC، مونتاج"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-accent"
            >
              <Upload className="w-4 h-4 ml-2" />
              إضافة العمل
            </Button>
          </form>
        </div>

        {/* Portfolio Items List */}
        <div className="bg-card border border-border/50 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-6">معرض الأعمال ({portfolioItems.length})</h2>

          {portfolioItems.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              لا توجد أعمال حالياً. أضف عملك الأول!
            </p>
          ) : (
            <div className="space-y-4">
              {portfolioItems.map((item) => (
                <div
                  key={item.id}
                  className="border border-border/50 rounded-lg p-4 flex justify-between items-start gap-4 hover:border-primary/50 transition-colors"
                >
                  <div className="flex-1">
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    {item.description && (
                      <p className="text-sm text-muted-foreground mb-2">
                        {item.description}
                      </p>
                    )}
                    {item.category && (
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        {item.category}
                      </span>
                    )}
                    <p className="text-xs text-muted-foreground mt-2" dir="ltr">
                      {item.video_url}
                    </p>
                  </div>

                  <Button
                    variant="destructive"
                    size="icon"
                    onClick={() => handleDeleteItem(item.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
