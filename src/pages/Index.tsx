import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const products = [
  {
    id: 1,
    name: 'Кружки с печатью',
    description: 'Подарочные кружки с фото, кружки для руководителя, с логотипом компании',
    price: 'от 550 ₽',
    image: 'https://cdn.poehali.dev/projects/50f1d508-71f3-40aa-893a-67d9d4c34c45/files/ba57f015-ff0b-4684-89cf-9b8749abba7c.jpg',
    category: 'Кружки'
  },
  {
    id: 2,
    name: 'Футболки с принтом',
    description: 'Корпоративный мерч, подарочные футболки, одежда с вашим дизайном',
    price: 'от 890 ₽',
    image: 'https://cdn.poehali.dev/projects/50f1d508-71f3-40aa-893a-67d9d4c34c45/files/64a837b9-ba35-431a-aff5-458528924e9e.jpg',
    category: 'Футболки'
  },
  {
    id: 3,
    name: 'Термосы с логотипом',
    description: 'Брендированные термосы для сотрудников, подарки партнерам',
    price: 'от 1200 ₽',
    image: 'https://cdn.poehali.dev/projects/50f1d508-71f3-40aa-893a-67d9d4c34c45/files/14feb22f-5e5d-4b0e-96cb-afe7add706c1.jpg',
    category: 'Термосы'
  },
  {
    id: 4,
    name: 'Тарелки с печатью',
    description: 'Декоративные тарелки с фото, подарочные тарелки на заказ',
    price: 'от 650 ₽',
    image: 'https://cdn.poehali.dev/projects/50f1d508-71f3-40aa-893a-67d9d4c34c45/files/ba57f015-ff0b-4684-89cf-9b8749abba7c.jpg',
    category: 'Тарелки'
  }
];

const advantages = [
  {
    icon: 'Shield',
    title: 'Сублимационная печать',
    description: 'Изображение не стирается и не выцветает'
  },
  {
    icon: 'Zap',
    title: 'Быстрый заказ',
    description: 'Изготовление от 1 дня'
  },
  {
    icon: 'Package',
    title: 'Любые тиражи',
    description: 'От 1 штуки до крупного заказа'
  },
  {
    icon: 'Truck',
    title: 'Доставка по России',
    description: 'По Красноярску и всей стране'
  }
];

export default function Index() {
  const { toast } = useToast();
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    comment: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: '', phone: '', email: '', comment: '' });
  };

  return (
    <div className="min-h-screen bg-white">
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
            <a href="tel:+73912345678" className="hidden sm:flex items-center gap-2 text-sm font-medium">
              <Icon name="Phone" size={16} />
              +7 (391) 234-56-78
            </a>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-foreground">
              Заказать звонок
            </Button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/20 to-white py-20 md:py-32">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Печать на кружках, футболках, термосах в Красноярске
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Качественная сублимационная печать от 1 штуки. Изготовление от 1 дня
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-foreground text-lg px-8">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Почему выбирают нас?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={advantage.icon as any} className="text-primary" size={24} />
                  </div>
                  <CardTitle className="text-xl">{advantage.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{advantage.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 md:py-24 bg-secondary/5">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Наша продукция</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="aspect-square overflow-hidden bg-gray-50">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="text-xs font-medium text-primary mb-1">{product.category}</div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">{product.price}</span>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button 
                          onClick={() => setSelectedProduct(product)}
                          className="bg-primary hover:bg-primary/90 text-foreground"
                        >
                          Заказать
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[500px]">
                        <DialogHeader>
                          <DialogTitle>Оформить заказ</DialogTitle>
                          <DialogDescription>
                            {selectedProduct?.name} — {selectedProduct?.price}
                          </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div>
                            <Label htmlFor="name">Имя *</Label>
                            <Input
                              id="name"
                              required
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder="Ваше имя"
                            />
                          </div>
                          <div>
                            <Label htmlFor="phone">Телефон *</Label>
                            <Input
                              id="phone"
                              type="tel"
                              required
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="+7 (___) ___-__-__"
                            />
                          </div>
                          <div>
                            <Label htmlFor="email">E-mail</Label>
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="your@email.com"
                            />
                          </div>
                          <div>
                            <Label htmlFor="comment">Комментарий к заказу</Label>
                            <Textarea
                              id="comment"
                              value={formData.comment}
                              onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                              placeholder="Опишите ваши пожелания..."
                              rows={4}
                            />
                          </div>
                          <div>
                            <Label htmlFor="file">Загрузить макет/фото</Label>
                            <Input
                              id="file"
                              type="file"
                              accept="image/*,.pdf"
                            />
                          </div>
                          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-foreground">
                            Отправить заявку
                          </Button>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">О нас</h2>
            <p className="text-lg text-muted-foreground mb-8">
              <strong>ПринтСОКОЛ</strong> — студия печати в Красноярске, специализирующаяся на сублимационной печати. 
              Мы создаем уникальную продукцию для частных лиц и бизнеса: от единичных подарков до крупных корпоративных тиражей.
            </p>
            <p className="text-lg text-muted-foreground">
              Наша технология обеспечивает яркие, стойкие изображения, которые не выцветают и не стираются даже после многократных стирок. 
              Работаем быстро, качественно и с любовью к деталям!
            </p>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-16 md:py-24 bg-secondary/5">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Доставка и оплата</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Truck" className="text-primary" />
                  Доставка
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">По Красноярску</h4>
                  <p className="text-muted-foreground">Курьерская доставка — от 200 ₽<br />Доставка 1-2 дня</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">По России</h4>
                  <p className="text-muted-foreground">СДЭК, Boxberry, Почта России<br />Стоимость рассчитывается индивидуально</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="CreditCard" className="text-primary" />
                  Оплата
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Способы оплаты</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Наличными при получении</li>
                    <li>• Картой онлайн (Сбербанк, ЮКасса)</li>
                    <li>• Безналичный расчет для юр. лиц</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer id="contacts" className="bg-gray-900 text-white py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Sparkles" size={24} />
                <span className="text-xl font-bold">ПринтСОКОЛ</span>
              </div>
              <p className="text-gray-400">
                Студия печати в Красноярске.<br />
                Качественная сублимационная печать от 1 штуки.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-400">
                <a href="tel:+73912345678" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Icon name="Phone" size={16} />
                  +7 (391) 234-56-78
                </a>
                <a href="mailto:info@print-sokol.ru" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Icon name="Mail" size={16} />
                  info@print-sokol.ru
                </a>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  г. Красноярск
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Навигация</h3>
              <div className="space-y-2">
                <a href="#catalog" className="block text-gray-400 hover:text-white transition-colors">Каталог</a>
                <a href="#about" className="block text-gray-400 hover:text-white transition-colors">О нас</a>
                <a href="#delivery" className="block text-gray-400 hover:text-white transition-colors">Доставка и оплата</a>
                <a href="#contacts" className="block text-gray-400 hover:text-white transition-colors">Контакты</a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ПринтСОКОЛ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
