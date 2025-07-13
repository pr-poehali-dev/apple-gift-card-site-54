import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const giftCards = [
    { amount: 1000, popular: false },
    { amount: 2500, popular: true },
    { amount: 5000, popular: false },
    { amount: 10000, popular: false }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Apple" size={24} className="text-gray-900" />
              <span className="text-xl font-semibold text-gray-900">Gift Cards</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#catalog" className="text-gray-600 hover:text-gray-900 transition-colors">Каталог</a>
              <a href="#payment" className="text-gray-600 hover:text-gray-900 transition-colors">Оплата</a>
              <a href="#contacts" className="text-gray-600 hover:text-gray-900 transition-colors">Контакты</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Apple Gift Cards
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Мгновенная доставка цифровых подарочных карт Apple. 
            Покупайте приложения, игры, музыку и многое другое.
          </p>
          <div className="flex justify-center items-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center">
              <Icon name="Zap" size={16} className="mr-2 text-blue-500" />
              Мгновенная доставка
            </div>
            <div className="flex items-center">
              <Icon name="Shield" size={16} className="mr-2 text-green-500" />
              Безопасная оплата
            </div>
            <div className="flex items-center">
              <Icon name="Headphones" size={16} className="mr-2 text-purple-500" />
              24/7 поддержка
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Section */}
      <section id="catalog" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Выберите номинал</h2>
            <p className="text-gray-600">Доступные номиналы подарочных карт Apple</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {giftCards.map((card, index) => (
              <Card key={index} className={`relative hover:shadow-lg transition-shadow ${card.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {card.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-3 py-1 text-xs font-semibold rounded-full">
                      Популярный
                    </span>
                  </div>
                )}
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <img 
                      src="/img/c06140ec-8e02-4505-a78d-9b54ce39185b.jpg" 
                      alt="Apple Gift Card"
                      className="w-24 h-24 mx-auto object-contain"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {card.amount.toLocaleString()} ₽
                  </h3>
                  <p className="text-gray-600 mb-4">Подарочная карта Apple</p>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600">
                    Купить сейчас
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Section */}
      <section id="payment" className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Оформление заказа</h2>
            <p className="text-gray-600">Заполните форму для получения подарочной карты</p>
          </div>

          <Card>
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="email">Email для доставки</Label>
                    <Input id="email" type="email" placeholder="your@email.com" className="mt-2" />
                  </div>
                  <div>
                    <Label htmlFor="amount">Номинал карты</Label>
                    <select className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>1000 ₽</option>
                      <option>2500 ₽</option>
                      <option>5000 ₽</option>
                      <option>10000 ₽</option>
                    </select>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Способ оплаты</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button variant="outline" className="h-12">
                      <Icon name="CreditCard" size={20} className="mr-2" />
                      Карта
                    </Button>
                    <Button variant="outline" className="h-12">
                      <Icon name="Smartphone" size={20} className="mr-2" />
                      СБП
                    </Button>
                    <Button variant="outline" className="h-12">
                      <Icon name="Wallet" size={20} className="mr-2" />
                      Кошелек
                    </Button>
                  </div>
                </div>

                <Button className="w-full h-12 bg-blue-500 hover:bg-blue-600 text-lg">
                  Оплатить и получить карту
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  После оплаты код карты будет отправлен на указанный email в течение 1 минуты
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Поддержка</h2>
            <p className="text-gray-600">Мы всегда готовы помочь вам</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Icon name="Mail" size={32} className="mx-auto mb-4 text-blue-500" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email</h3>
                <p className="text-gray-600">support@giftcards.ru</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Icon name="MessageCircle" size={32} className="mx-auto mb-4 text-green-500" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Телеграм</h3>
                <p className="text-gray-600">@giftcards_support</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Icon name="Clock" size={32} className="mx-auto mb-4 text-purple-500" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Время работы</h3>
                <p className="text-gray-600">24/7</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Apple" size={20} />
              <span className="text-lg font-semibold">Gift Cards</span>
            </div>
            <div className="text-sm text-gray-400">
              © 2024 Apple Gift Cards. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;