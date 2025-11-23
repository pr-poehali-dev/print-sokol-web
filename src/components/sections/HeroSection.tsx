import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  isCalculatorOpen: boolean;
  setIsCalculatorOpen: (open: boolean) => void;
  isQuickOrderOpen: boolean;
  setIsQuickOrderOpen: (open: boolean) => void;
  calculatorData: {
    product: string;
    quantity: string;
    hasLogo: string;
  };
  setCalculatorData: (data: any) => void;
  formData: {
    name: string;
    phone: string;
    email: string;
    comment: string;
  };
  setFormData: (data: any) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export default function HeroSection({
  isCalculatorOpen,
  setIsCalculatorOpen,
  isQuickOrderOpen,
  setIsQuickOrderOpen,
  calculatorData,
  setCalculatorData,
  formData,
  setFormData,
  handleSubmit
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden py-20 md:py-32" style={{ backgroundColor: '#ee91ab' }}>
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Печать на кружках, футболках, термосах в Красноярске
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Качественная сублимационная печать от 1 штуки. Изготовление от 1 дня
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog open={isCalculatorOpen} onOpenChange={setIsCalculatorOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-foreground text-lg px-8">
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                  <DialogTitle>Калькулятор стоимости</DialogTitle>
                  <DialogDescription>
                    Выберите параметры для расчета стоимости заказа
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="calc-product">Выберите товар</Label>
                    <Select value={calculatorData.product} onValueChange={(value) => setCalculatorData({ ...calculatorData, product: value })}>
                      <SelectTrigger id="calc-product">
                        <SelectValue placeholder="Выберите товар" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mugs">Кружки с печатью (от 550 ₽)</SelectItem>
                        <SelectItem value="tshirts">Футболки с принтом (от 890 ₽)</SelectItem>
                        <SelectItem value="thermos">Термосы с логотипом (от 550 ₽)</SelectItem>
                        <SelectItem value="plates">Тарелки с печатью (от 650 ₽)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="calc-quantity">Количество (шт)</Label>
                    <Input
                      id="calc-quantity"
                      type="number"
                      min="1"
                      value={calculatorData.quantity}
                      onChange={(e) => setCalculatorData({ ...calculatorData, quantity: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="calc-logo">Свой дизайн/логотип</Label>
                    <Select value={calculatorData.hasLogo} onValueChange={(value) => setCalculatorData({ ...calculatorData, hasLogo: value })}>
                      <SelectTrigger id="calc-logo">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="yes">Да, есть готовый дизайн</SelectItem>
                        <SelectItem value="no">Нет, нужна помощь с дизайном</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-2">Примерная стоимость:</p>
                    <p className="text-3xl font-bold text-primary">
                      {calculatorData.product && calculatorData.quantity
                        ? `от ${(() => {
                            const prices: Record<string, number> = { mugs: 550, tshirts: 890, thermos: 550, plates: 650 };
                            const basePrice = prices[calculatorData.product] || 0;
                            const qty = parseInt(calculatorData.quantity) || 1;
                            const discount = qty >= 50 ? 0.85 : qty >= 20 ? 0.9 : qty >= 10 ? 0.95 : 1;
                            return Math.round(basePrice * qty * discount);
                          })()} ₽`
                        : 'Выберите товар'}
                    </p>
                    {parseInt(calculatorData.quantity) >= 10 && (
                      <p className="text-xs text-green-600 mt-2">✓ Применена скидка за объем!</p>
                    )}
                  </div>
                  <Button 
                    onClick={() => {
                      setIsCalculatorOpen(false);
                      setIsQuickOrderOpen(true);
                      setFormData({ ...formData, comment: `Расчет: ${calculatorData.product}, количество: ${calculatorData.quantity}` });
                    }}
                    className="w-full bg-primary hover:bg-primary/90 text-foreground"
                  >
                    Оформить заказ
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            <Dialog open={isQuickOrderOpen} onOpenChange={setIsQuickOrderOpen}>
              <DialogTrigger asChild>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Связаться с нами
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Связаться с нами</DialogTitle>
                  <DialogDescription>
                    Оставьте контакты, и мы свяжемся с вами для уточнения деталей
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="hero-name">Ваше имя</Label>
                    <Input
                      id="hero-name"
                      placeholder="Иван Иванов"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hero-phone">Телефон</Label>
                    <Input
                      id="hero-phone"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="hero-comment">Комментарий</Label>
                    <Textarea
                      id="hero-comment"
                      placeholder="Расскажите о вашем заказе"
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
      </div>
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
