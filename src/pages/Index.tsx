import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import ProductCatalog from '@/components/sections/ProductCatalog';
import ContentSections from '@/components/sections/ContentSections';

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
    price: 'от 650 ₽',
    image: 'https://cdn.poehali.dev/projects/50f1d508-71f3-40aa-893a-67d9d4c34c45/files/c6a0037a-5093-4fa8-9e0e-06d03a1ee3e7.jpg',
    category: 'Тарелки'
  }
];

export default function Index() {
  const { toast } = useToast();
  const [selectedProduct, setSelectedProduct] = useState<typeof products[0] | null>(null);
  const [isQuickOrderOpen, setIsQuickOrderOpen] = useState(false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isProductOrderOpen, setIsProductOrderOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    comment: ''
  });
  const [calculatorData, setCalculatorData] = useState({
    product: '',
    quantity: '1',
    hasLogo: 'no'
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `🎨 Новая заявка с сайта ПринтСОКОЛ

👤 Имя: ${formData.name}
📱 Телефон: ${formData.phone}
📧 Email: ${formData.email}
🛍️ Товар: ${selectedProduct?.name || 'Не указан'}
💬 Комментарий: ${formData.comment}`;

    const whatsappUrl = `https://chat.whatsapp.com/FM1ES0iORU82XCDcwnc2Tc?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Открываем WhatsApp",
      description: "Отправьте сообщение для завершения заявки",
    });
    
    setFormData({ name: '', phone: '', email: '', comment: '' });
    setSelectedProduct(null);
    setIsQuickOrderOpen(false);
    setIsProductOrderOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        isQuickOrderOpen={isQuickOrderOpen}
        setIsQuickOrderOpen={setIsQuickOrderOpen}
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
      
      <HeroSection
        isCalculatorOpen={isCalculatorOpen}
        setIsCalculatorOpen={setIsCalculatorOpen}
        isQuickOrderOpen={isQuickOrderOpen}
        setIsQuickOrderOpen={setIsQuickOrderOpen}
        calculatorData={calculatorData}
        setCalculatorData={setCalculatorData}
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
      
      <ProductCatalog
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
        isProductOrderOpen={isProductOrderOpen}
        setIsProductOrderOpen={setIsProductOrderOpen}
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
      
      <ContentSections />
    </div>
  );
}