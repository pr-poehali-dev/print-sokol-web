import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

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
    price: 'от 550 ₽',
    image: 'https://cdn.poehali.dev/projects/50f1d508-71f3-40aa-893a-67d9d4c34c45/files/14feb22f-5e5d-4b0e-96cb-afe7add706c1.jpg',
    category: 'Термосы'
  },
  {
    id: 4,
    name: 'Тарелки с печатью',
    description: 'Декоративные тарелки с фото, подарочные тарелки на заказ',
    price: 'от 550 ₽',
    image: 'https://cdn.poehali.dev/projects/50f1d508-71f3-40aa-893a-67d9d4c34c45/files/c6a0037a-5093-4fa8-9e0e-06d03a1ee3e7.jpg',
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

interface ProductCatalogProps {
  selectedProduct: typeof products[0] | null;
  setSelectedProduct: (product: typeof products[0] | null) => void;
  isProductOrderOpen: boolean;
  setIsProductOrderOpen: (open: boolean) => void;
  formData: {
    name: string;
    phone: string;
    email: string;
    comment: string;
  };
  setFormData: (data: any) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export default function ProductCatalog({
  selectedProduct,
  setSelectedProduct,
  isProductOrderOpen,
  setIsProductOrderOpen,
  formData,
  setFormData,
  handleSubmit
}: ProductCatalogProps) {
  return (
    <>
      <section className="py-16 md:py-24" style={{ backgroundColor: '#19677f' }}>
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Почему выбирают нас?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="border-2 hover:border-white transition-all duration-300 hover:shadow-lg animate-scale-in bg-white/90" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: '#ffe5f0' }}>
                    <Icon name={advantage.icon as any} style={{ color: '#fc649c' }} size={24} />
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

      <section id="catalog" className="py-16 md:py-24" style={{ backgroundColor: '#ee91ab' }}>
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Наша продукция</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in" style={{ animationDelay: `${index * 100}ms`, background: 'linear-gradient(135deg, #ee91ab 0%, #19677f 100%)' }}>
                <div className="aspect-square overflow-hidden bg-gray-50">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="text-xs font-medium text-white mb-1">{product.category}</div>
                  <CardTitle className="text-xl text-white">{product.name}</CardTitle>
                  <CardDescription className="text-white/90">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">{product.price}</span>
                    <Dialog open={isProductOrderOpen && selectedProduct?.id === product.id} onOpenChange={(open) => {
                      setIsProductOrderOpen(open);
                      if (!open) setSelectedProduct(null);
                    }}>
                      <DialogTrigger asChild>
                        <Button 
                          onClick={() => {
                            setSelectedProduct(product);
                            setIsProductOrderOpen(true);
                          }}
                          className="bg-white hover:bg-white/90 text-gray-900"
                        >
                          Заказать
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[500px]">
                        <DialogHeader>
                          <DialogTitle>Оформить заказ</DialogTitle>
                          <DialogDescription>
                            {selectedProduct?.name} - {selectedProduct?.price}
                          </DialogDescription>
                        </DialogHeader>
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div className="space-y-2">
                            <Label htmlFor="name">Ваше имя</Label>
                            <Input
                              id="name"
                              placeholder="Иван Иванов"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Телефон</Label>
                            <Input
                              id="phone"
                              type="tel"
                              placeholder="+7 (___) ___-__-__"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              type="email"
                              placeholder="example@mail.ru"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="comment">Комментарий к заказу</Label>
                            <Textarea
                              id="comment"
                              placeholder="Укажите желаемое количество, цвет, размер и другие детали"
                              value={formData.comment}
                              onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                              rows={4}
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="file">Загрузить макет/фото (необязательно)</Label>
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
    </>
  );
}