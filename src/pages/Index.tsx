import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const services = [
    {
      title: "Маникюр",
      description: "Классический и европейский маникюр с покрытием",
      icon: "Scissors",
      price: "от 800₽",
    },
    {
      title: "Гель-лак",
      description: "Стойкое покрытие до 3 недель",
      icon: "Paintbrush",
      price: "от 1200₽",
    },
    {
      title: "Наращивание",
      description: "Создание идеальной длины и формы",
      icon: "Zap",
      price: "от 2000₽",
    },
    {
      title: "Педикюр",
      description: "Профессиональный уход за стопами",
      icon: "Heart",
      price: "от 1500₽",
    },
  ];

  const portfolioImages = [
    "/img/941e21a6-2978-49cf-9172-1227d21527e5.jpg",
    "/img/3eb033f1-6914-4085-9434-cf8fbb998fae.jpg",
    "/img/e5ceb635-4b46-4c0f-8c00-316c80e3dce3.jpg",
  ];

  const advantages = [
    {
      icon: "Award",
      title: "Опытные мастера",
      description: "Более 5 лет профессионального опыта",
    },
    {
      icon: "Shield",
      title: "Стерильность",
      description: "Соблюдение всех санитарных норм",
    },
    {
      icon: "Clock",
      title: "Точность",
      description: "Запись по времени без опозданий",
    },
    {
      icon: "Sparkles",
      title: "Качество",
      description: "Только премиальные материалы",
    },
  ];

  const reviews = [
    {
      name: "Анна М.",
      text: "Потрясающий сервис! Маникюр держится уже третью неделю.",
      rating: 5,
    },
    {
      name: "Елена К.",
      text: "Очень довольна наращиванием. Мастер настоящий профессионал!",
      rating: 5,
    },
    {
      name: "Ольга Т.",
      text: "Уютная атмосфера и прекрасный результат. Рекомендую!",
      rating: 5,
    },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Форма отправлена:", formData);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-pink-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">L.A.K.I</div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Главная
              </a>
              <a
                href="#services"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Услуги
              </a>
              <a
                href="#portfolio"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Портфолио
              </a>
              <a
                href="#about"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                О нас
              </a>
              <a
                href="#reviews"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Отзывы
              </a>
              <a
                href="#contacts"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Контакты
              </a>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              Записаться
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-20 pb-16 bg-gradient-to-b from-pink-50 to-white"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Салон красоты <span className="text-primary">L.A.K.I</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Профессиональный маникюр, педикюр и nail-дизайн в уютной
              атмосфере. Создаем красоту ваших ногтей с любовью к деталям.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-lg px-8"
              >
                <Icon name="Calendar" className="mr-2" size={20} />
                Записаться онлайн
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="Phone" className="mr-2" size={20} />
                Позвонить
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр услуг для красоты и здоровья ваших ногтей
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:scale-105 border-pink-100"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon
                      name={service.icon}
                      size={32}
                      className="text-primary"
                    />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-primary font-semibold text-lg">
                    {service.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Портфолио</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Примеры наших работ - каждый ноготок создан с душой
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {portfolioImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={image}
                  alt={`Работа ${index + 1}`}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Icon name="Eye" size={32} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                О студии L.A.K.I
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Мы создали пространство, где каждая деталь продумана для вашего
                комфорта. Наша команда профессионалов использует только
                качественные материалы и современные техники nail-арта.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                В салоне L.A.K.I мы верим, что красивые ногти - это не роскошь,
                а необходимая часть ухода за собой. Каждый клиент для нас
                особенный.
              </p>
              <Button className="bg-primary hover:bg-primary/90">
                Узнать больше
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {advantages.map((advantage, index) => (
                <Card
                  key={index}
                  className="text-center border-pink-100 hover:shadow-md transition-shadow"
                >
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon
                        name={advantage.icon}
                        size={24}
                        className="text-primary"
                      />
                    </div>
                    <h3 className="font-semibold mb-2">{advantage.title}</h3>
                    <p className="text-sm text-gray-600">
                      {advantage.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16 bg-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Отзывы клиентов
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Что говорят о нас наши довольные клиенты
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card
                key={index}
                className="border-pink-100 hover:shadow-lg transition-shadow"
              >
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={20}
                        className="text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{review.text}"</p>
                  <p className="font-semibold text-primary">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Контакты</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Свяжитесь с нами для записи или консультации
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Информация</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="MapPin" size={24} className="text-primary mr-4" />
                  <span className="text-lg">ул. Примерная, 123, Москва</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Phone" size={24} className="text-primary mr-4" />
                  <span className="text-lg">+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" size={24} className="text-primary mr-4" />
                  <span className="text-lg">Пн-Вс: 9:00 - 21:00</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={24} className="text-primary mr-4" />
                  <span className="text-lg">info@laki-salon.ru</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Записаться</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  name="name"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="border-pink-200 focus:border-primary"
                />
                <Input
                  name="phone"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="border-pink-200 focus:border-primary"
                />
                <Input
                  name="service"
                  placeholder="Услуга"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="border-pink-200 focus:border-primary"
                />
                <Textarea
                  name="message"
                  placeholder="Комментарий"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="border-pink-200 focus:border-primary min-h-[100px]"
                />
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold text-primary mb-4">L.A.K.I</div>
          <p className="text-gray-400 mb-4">Салон красоты ногтей</p>
          <div className="flex justify-center space-x-6">
            <Icon
              name="Instagram"
              size={24}
              className="text-primary hover:scale-110 transition-transform cursor-pointer"
            />
            <Icon
              name="Facebook"
              size={24}
              className="text-primary hover:scale-110 transition-transform cursor-pointer"
            />
            <Icon
              name="MessageCircle"
              size={24}
              className="text-primary hover:scale-110 transition-transform cursor-pointer"
            />
          </div>
          <div className="mt-6 text-sm text-gray-500">
            © 2024 L.A.K.I. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
