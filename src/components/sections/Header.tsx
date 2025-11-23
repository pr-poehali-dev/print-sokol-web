import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface HeaderProps {
  isQuickOrderOpen: boolean;
  setIsQuickOrderOpen: (open: boolean) => void;
  formData: {
    name: string;
    phone: string;
    email: string;
    comment: string;
  };
  setFormData: (data: any) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export default function Header({
  isQuickOrderOpen,
  setIsQuickOrderOpen,
  formData,
  setFormData,
  handleSubmit
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name="Sparkles" className="text-primary" size={28} />
          <span className="text-2xl font-bold">ПринтСОКОЛ</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <a href="#catalog" className="text-sm font-medium hover:text-primary transition-colors">Каталог</a>
          <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">О нас</a>
          <a href="#delivery" className="text-sm font-medium hover:text-primary transition-colors">Доставка</a>
          <a href="#contacts" className="text-sm font-medium hover:text-primary transition-colors">Контакты</a>
        </nav>
        <div className="flex items-center gap-4">
          <a href="tel:+79130378879" className="hidden sm:flex items-center gap-2 text-sm font-medium">
            <Icon name="Phone" size={16} />
            +7 (913) 037-88-79
          </a>
          <Dialog open={isQuickOrderOpen} onOpenChange={setIsQuickOrderOpen}>
            <DialogTrigger asChild>
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-foreground">
                Заказать звонок
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Заказать обратный звонок</DialogTitle>
                <DialogDescription>
                  Оставьте свой номер телефона, и мы перезвоним вам в ближайшее время
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="quick-name">Ваше имя</Label>
                  <Input
                    id="quick-name"
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quick-phone">Телефон</Label>
                  <Input
                    id="quick-phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quick-comment">Комментарий (необязательно)</Label>
                  <Textarea
                    id="quick-comment"
                    placeholder="Что бы вы хотели заказать?"
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    rows={3}
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-foreground">
                  Отправить заявку
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </header>
  );
}
