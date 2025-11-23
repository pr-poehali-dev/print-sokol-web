import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function ContentSections() {
  return (
    <>
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Отзывы наших клиентов</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="User" className="text-primary" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Елена Смирнова</CardTitle>
                    <div className="flex gap-1 text-yellow-500">
                      {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Заказывала кружки с фото для подарков на Новый год. Качество печати отличное, цвета яркие! 
                  Сделали быстро, всего за 2 дня. Всем довольна, рекомендую!
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="User" className="text-primary" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Дмитрий Козлов</CardTitle>
                    <div className="flex gap-1 text-yellow-500">
                      {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Печатали корпоративные футболки для команды - 50 штук. Цены адекватные, качество супер. 
                  После стирок принт не потускнел. Спасибо за профессионализм!
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Icon name="User" className="text-primary" size={24} />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Анна Петрова</CardTitle>
                    <div className="flex gap-1 text-yellow-500">
                      {'★★★★★'.split('').map((star, i) => <span key={i}>{star}</span>)}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Заказала тарелку с портретом кота - получилось просто волшебно! Очень довольна результатом. 
                  Ребята помогли с макетом, всё объяснили. Буду заказывать ещё!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" style={{ backgroundColor: '#ee91ab' }}>
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наши работы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Примеры наших проектов — от единичных подарков до корпоративных тиражей
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer">
              <img 
                src="https://cdn.poehali.dev/projects/50f1d508-71f3-40aa-893a-67d9d4c34c45/files/72d1adcf-e042-47f4-abee-0265d6ccbd0b.jpg"
                alt="Кружка с логотипом"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-semibold">Кружка с логотипом</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer">
              <img 
                src="https://cdn.poehali.dev/projects/50f1d508-71f3-40aa-893a-67d9d4c34c45/files/05ed4e77-f5e3-4d90-813b-a489cba133d7.jpg"
                alt="Футболка с принтом"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-semibold">Футболка с принтом</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer">
              <img 
                src="https://cdn.poehali.dev/projects/50f1d508-71f3-40aa-893a-67d9d4c34c45/files/f4730f22-ce74-4e78-9c31-4906e55ace24.jpg"
                alt="Термос с брендингом"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-semibold">Термос с брендингом</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer">
              <img 
                src="https://cdn.poehali.dev/projects/50f1d508-71f3-40aa-893a-67d9d4c34c45/files/fc01df44-7744-40fd-8d18-f89481b8d89f.jpg"
                alt="Тарелка с фото"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-semibold">Тарелка с фото</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer">
              <img 
                src="https://cdn.poehali.dev/projects/50f1d508-71f3-40aa-893a-67d9d4c34c45/files/b4bae50d-d26b-4d79-ad56-aba2b7ac3ce4.jpg"
                alt="Набор кружек"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-semibold">Набор кружек</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer">
              <img 
                src="https://cdn.poehali.dev/projects/50f1d508-71f3-40aa-893a-67d9d4c34c45/files/e7cb2f93-0f27-4e51-be97-2be81a590211.jpg"
                alt="Премиум футболка"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-semibold">Премиум футболка</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24" style={{ backgroundColor: '#19677f' }}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">О нас</h2>
            <p className="text-lg text-white/90 mb-8">
              <strong>ПринтСОКОЛ</strong> — студия печати в Красноярске, специализирующаяся на сублимационной печати. 
              Мы создаем уникальную продукцию для частных лиц и бизнеса: от единичных подарков до крупных корпоративных тиражей.
            </p>
            <p className="text-lg text-white/90">
              Наша технология обеспечивает яркие, стойкие изображения, которые не выцветают и не стираются даже после многократных стирок. 
              Работаем быстро, качественно и с любовью к деталям!
            </p>
          </div>
        </div>
      </section>

      <section id="delivery" className="py-16 md:py-24" style={{ backgroundColor: '#ee91ab' }}>
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

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Часто задаваемые вопросы</h2>
            <p className="text-center text-muted-foreground mb-12">
              Ответы на популярные вопросы о наших услугах
            </p>
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="item-1" className="bg-white rounded-lg px-6 border">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Сколько времени занимает изготовление?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Стандартный срок изготовления — от 1 до 3 рабочих дней в зависимости от сложности и тиража. 
                  Срочные заказы обсуждаются индивидуально. Для крупных корпоративных заказов срок может быть увеличен до 5-7 дней.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-lg px-6 border">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Какой минимальный тираж для заказа?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  У нас нет минимального тиража — мы работаем от 1 штуки! Это идеально для персональных подарков. 
                  Для корпоративных заказов от 10 штук действуют скидки.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-lg px-6 border">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Стирается ли печать после стирки?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Нет! Мы используем технологию сублимационной печати, при которой краска проникает в структуру материала. 
                  Изображение не выцветает, не трескается и не стирается даже после многократных стирок при температуре до 40°C.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-white rounded-lg px-6 border">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Нужен ли готовый дизайн для заказа?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Не обязательно! Если у вас есть готовый макет — отлично. Если нет — мы поможем с разработкой дизайна. 
                  Можете прислать фото, логотип или просто описать идею, и мы подготовим макет для утверждения.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-white rounded-lg px-6 border">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Какие форматы файлов вы принимаете?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Мы работаем с любыми форматами: PNG, JPG, PDF, AI, PSD, CDR. 
                  Для лучшего качества рекомендуем векторные форматы (AI, PDF) или растровые изображения высокого разрешения (от 300 DPI).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-white rounded-lg px-6 border">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Есть ли гарантия на продукцию?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Да! Мы гарантируем качество печати и даем гарантию на брак производства. 
                  Если обнаружится производственный дефект, мы бесплатно изготовим замену. 
                  Перед отправкой все заказы проходят контроль качества.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
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
                <a href="tel:+79130378879" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Icon name="Phone" size={16} />
                  +7 (913) 037-88-79
                </a>
                <a href="mailto:art-angelmira@yandex.ru" className="flex items-center gap-2 hover:text-white transition-colors">
                  <Icon name="Mail" size={16} />
                  art-angelmira@yandex.ru
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

      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a
          href="https://vk.com/printmagia"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#0077FF] hover:bg-[#0066DD] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
          title="Мы ВКонтакте"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.785 16.241s.288-.032.436-.193c.136-.147.132-.423.132-.423s-.02-1.293.574-1.484c.586-.188 1.339 1.25 2.136 1.803.603.419 1.061.327 1.061.327l2.134-.03s1.117-.07.587-.96c-.043-.073-.309-.658-1.587-1.86-1.339-1.257-1.16-1.054.453-3.229.982-1.324 1.374-2.132 1.25-2.478-.118-.33-.847-.243-.847-.243l-2.402.015s-.178-.025-.31.056c-.129.079-.212.263-.212.263s-.379 1.02-.884 1.887c-1.064 1.827-1.49 1.924-1.664 1.81-.405-.267-.304-1.075-.304-1.648 0-1.792.268-2.54-.523-2.733-.263-.064-.456-.106-1.128-.113-.862-.009-1.592.003-2.005.208-.275.136-.487.44-.358.457.16.022.522.099.714.364.248.342.239 1.11.239 1.11s.143 2.11-.333 2.371c-.327.179-.775-.186-1.738-1.856-.493-.85-.865-1.789-.865-1.789s-.072-.178-.2-.273c-.155-.115-.372-.151-.372-.151l-2.283.015s-.343.01-.469.161c-.112.134-.009.411-.009.411s1.778 4.215 3.791 6.34c1.843 1.948 3.935 1.82 3.935 1.82h.949z"/>
          </svg>
        </a>
        <a
          href="https://wa.me/79130378879"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
          title="Написать в WhatsApp"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </div>
    </>
  );
}
