import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "Маникюр",
      description: "Классический и европейский маникюр с покрытием",
      price: "от 800₽",
      gradient: "from-pink-400 to-rose-400",
    },
    {
      title: "Гель-лак",
      description: "Стойкое покрытие до 3 недель",
      price: "от 1200₽",
      gradient: "from-rose-400 to-pink-500",
    },
    {
      title: "Наращивание",
      description: "Создание идеальной длины и формы",
      price: "от 2000₽",
      gradient: "from-pink-500 to-fuchsia-500",
    },
    {
      title: "Педикюр",
      description: "Профессиональный уход за стопами",
      price: "от 1500₽",
      gradient: "from-fuchsia-400 to-purple-400",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Floating Navigation */}
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="bg-white/80 backdrop-blur-xl border border-pink-200/50 rounded-2xl px-6 py-3 shadow-xl">
          <div className="flex items-center space-x-8">
            <div className="text-xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              L.A.K.I
            </div>
            <div className="hidden md:flex space-x-6 text-sm">
              <a
                href="#home"
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                Главная
              </a>
              <a
                href="#services"
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#portfolio"
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                Портфолио
              </a>
              <a
                href="#contacts"
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                Контакты
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Asymmetric Layout */}
      <section
        id="home"
        className="min-h-screen flex items-center relative overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-rose-400/20 to-pink-400/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`space-y-8 ${isVisible ? "animate-slide-up" : "opacity-0"}`}
          >
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full text-sm font-medium text-pink-600">
                ✨ Премиум nail-студия
              </div>
              <h1 className="text-6xl lg:text-7xl font-black leading-tight">
                <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  L.A.K.I
                </span>
                <br />
                <span className="text-gray-800">NAIL SALON</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                Создаем уникальный nail-арт в атмосфере роскоши. Каждый ноготок
                — произведение искусства.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0 px-8 py-6 text-lg font-medium rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-glow"
              >
                Записаться сейчас
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-pink-200 hover:border-pink-300 text-gray-700 px-8 py-6 text-lg rounded-2xl backdrop-blur-sm"
              >
                Посмотреть работы
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-500">500+</div>
                <div className="text-sm text-gray-600">Довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-500">5+</div>
                <div className="text-sm text-gray-600">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-500">100+</div>
                <div className="text-sm text-gray-600">Видов дизайна</div>
              </div>
            </div>
          </div>

          {/* Right Bento Grid */}
          <div
            className={`grid grid-cols-2 gap-4 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
            style={{ animationDelay: "0.2s" }}
          >
            {/* Main Image */}
            <div className="col-span-2 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-3xl blur opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
              <img
                src="/img/941e21a6-2978-49cf-9172-1227d21527e5.jpg"
                alt="Nail Art Showcase"
                className="relative w-full h-64 object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Service Cards */}
            <Card className="bg-white/60 backdrop-blur-xl border-0 shadow-xl rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-wiggle">
                  💅
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Маникюр</h3>
                <p className="text-sm text-gray-600">от 800₽</p>
              </CardContent>
            </Card>

            <Card className="bg-white/60 backdrop-blur-xl border-0 shadow-xl rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:animate-wiggle">
                  ✨
                </div>
                <h3 className="font-bold text-gray-800 mb-2">Гель-лак</h3>
                <p className="text-sm text-gray-600">от 1200₽</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section id="services" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Наши услуги
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Полный спектр nail-услуг в современном формате
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Large Service Card */}
            <div className="md:col-span-2 md:row-span-2">
              <Card className="h-full bg-gradient-to-br from-pink-500 to-purple-600 border-0 shadow-2xl rounded-3xl overflow-hidden group hover:scale-105 transition-all duration-500">
                <CardContent className="p-8 h-full flex flex-col justify-between text-white relative">
                  <div className="absolute top-4 right-4 text-6xl opacity-20">
                    💅
                  </div>
                  <div>
                    <h3 className="text-3xl font-black mb-4">
                      Премиум маникюр
                    </h3>
                    <p className="text-lg opacity-90 mb-6">
                      Комплексный уход с авторским дизайном от наших
                      топ-мастеров
                    </p>
                    <div className="text-2xl font-bold">от 800₽</div>
                  </div>
                  <Button className="self-start bg-white/20 hover:bg-white/30 border-white/30 text-white backdrop-blur-sm">
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Smaller Service Cards */}
            {services.slice(1).map((service, index) => (
              <Card
                key={index}
                className="bg-white/80 backdrop-blur-xl border-0 shadow-xl rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${service.gradient} rounded-2xl flex items-center justify-center mb-4 group-hover:animate-wiggle`}
                  >
                    <span className="text-2xl">
                      {index === 0 ? "💎" : index === 1 ? "🔮" : "👣"}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <div className="text-lg font-bold text-pink-500">
                    {service.price}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Portfolio Preview */}
            <div className="md:col-span-2">
              <Card className="h-40 bg-gradient-to-r from-purple-100 to-pink-100 border-0 shadow-xl rounded-2xl overflow-hidden group hover:scale-105 transition-all duration-300">
                <CardContent className="p-6 h-full flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      Наше портфолио
                    </h3>
                    <p className="text-gray-600">Более 1000 уникальных работ</p>
                  </div>
                  <div className="text-4xl group-hover:animate-wiggle">🎨</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Masonry */}
      <section
        id="portfolio"
        className="py-20 bg-gradient-to-b from-white to-pink-50"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Портфолио
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                src: "/img/941e21a6-2978-49cf-9172-1227d21527e5.jpg",
                height: "h-80",
              },
              {
                src: "/img/3eb033f1-6914-4085-9434-cf8fbb998fae.jpg",
                height: "h-96",
              },
              {
                src: "/img/e5ceb635-4b46-4c0f-8c00-316c80e3dce3.jpg",
                height: "h-80",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                  src={item.src}
                  alt={`Portfolio ${index + 1}`}
                  className={`w-full ${item.height} object-cover group-hover:scale-110 transition-transform duration-700`}
                />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                  <h3 className="text-lg font-bold mb-1">Авторский дизайн</h3>
                  <p className="text-sm opacity-90">
                    Уникальная работа мастера
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Split Layout */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-black mb-8">
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  О студии L.A.K.I
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Мы создали пространство, где каждая деталь продумана для вашего
                комфорта. Здесь работают true профессионалы своего дела.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {[
                  { icon: "🏆", title: "Награды", desc: "Лучшая студия 2024" },
                  {
                    icon: "🛡️",
                    title: "Стерильность",
                    desc: "Европейские стандарты",
                  },
                  { icon: "⚡", title: "Скорость", desc: "Без опозданий" },
                  { icon: "💎", title: "Качество", desc: "Премиум материалы" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="text-center p-4 rounded-2xl bg-gradient-to-br from-pink-50 to-purple-50 hover:scale-105 transition-transform duration-300"
                  >
                    <div className="text-3xl mb-2">{item.icon}</div>
                    <h4 className="font-bold text-gray-800 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-500 rounded-3xl blur-xl opacity-30 animate-glow"></div>
              <Card className="relative bg-white/90 backdrop-blur-xl border-0 shadow-2xl rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">
                    Отзывы клиентов
                  </h3>
                  <div className="space-y-6">
                    {[
                      {
                        name: "Анна М.",
                        text: "Невероятный сервис! Маникюр держится уже месяц 💅",
                        rating: 5,
                      },
                      {
                        name: "Елена К.",
                        text: "Мастера - настоящие художники! Рекомендую 🎨",
                        rating: 5,
                      },
                    ].map((review, index) => (
                      <div
                        key={index}
                        className="p-4 rounded-2xl bg-gradient-to-br from-pink-50 to-white"
                      >
                        <div className="flex mb-2">
                          {[...Array(review.rating)].map((_, i) => (
                            <span key={i} className="text-yellow-400">
                              ⭐
                            </span>
                          ))}
                        </div>
                        <p className="text-gray-600 italic mb-2">
                          "{review.text}"
                        </p>
                        <p className="font-semibold text-pink-600">
                          {review.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Modern Form */}
      <section
        id="contacts"
        className="py-20 bg-gradient-to-br from-pink-50 to-purple-100"
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black mb-6">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Записаться
              </span>
            </h2>
            <p className="text-xl text-gray-600">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-8">
                Контактная информация
              </h3>

              {[
                {
                  icon: "MapPin",
                  title: "Адрес",
                  desc: "ул. Примерная, 123, Москва",
                },
                { icon: "Phone", title: "Телефон", desc: "+7 (999) 123-45-67" },
                {
                  icon: "Clock",
                  title: "Режим работы",
                  desc: "Пн-Вс: 9:00 - 21:00",
                },
                { icon: "Mail", title: "Email", desc: "info@laki-salon.ru" },
              ].map((contact, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-6 p-6 bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg hover:scale-105 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-pink-400 to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Icon
                      name={contact.icon}
                      size={24}
                      className="text-white"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">
                      {contact.title}
                    </h4>
                    <p className="text-gray-600">{contact.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Modern Form */}
            <Card className="bg-white/90 backdrop-blur-xl border-0 shadow-2xl rounded-3xl overflow-hidden">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Онлайн запись
                </h3>
                <form className="space-y-6">
                  <div className="space-y-4">
                    <Input
                      placeholder="Ваше имя"
                      className="border-0 bg-gray-50 rounded-2xl py-6 px-6 text-lg focus:ring-2 focus:ring-pink-300 transition-all duration-300"
                    />
                    <Input
                      placeholder="Телефон"
                      className="border-0 bg-gray-50 rounded-2xl py-6 px-6 text-lg focus:ring-2 focus:ring-pink-300 transition-all duration-300"
                    />
                    <Input
                      placeholder="Услуга"
                      className="border-0 bg-gray-50 rounded-2xl py-6 px-6 text-lg focus:ring-2 focus:ring-pink-300 transition-all duration-300"
                    />
                    <Textarea
                      placeholder="Комментарий"
                      className="border-0 bg-gray-50 rounded-2xl p-6 text-lg focus:ring-2 focus:ring-pink-300 transition-all duration-300 min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0 py-6 text-lg font-medium rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Отправить заявку
                    <Icon name="Send" className="ml-2" size={20} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="text-3xl font-black bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-6">
            L.A.K.I
          </div>
          <p className="text-gray-400 mb-8">
            Nail Salon • Beauty Studio • Art Space
          </p>
          <div className="flex justify-center space-x-8 mb-8">
            {["Instagram", "Telegram", "WhatsApp"].map((social, index) => (
              <div
                key={index}
                className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"
              >
                <Icon
                  name={
                    social === "Instagram"
                      ? "Instagram"
                      : social === "Telegram"
                        ? "MessageCircle"
                        : "Phone"
                  }
                  size={20}
                />
              </div>
            ))}
          </div>
          <div className="text-sm text-gray-500">
            © 2024 L.A.K.I Nail Salon. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
