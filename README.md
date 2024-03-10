# Kütüphaneler

- axios
- json-server
- react-router-dom
- tailwind

# MVC (Model - View - Controller)

* Model:

- Uygulamanın veri mantığını ve yapısını temsil eder. Örn:
- Bileşende tutulacak bir state'in 'başlangıç değeri',
- Veriyi formatlamaya yarayan bir fonksiyon,
- Api istekleri,
- Genellikle `class` yapısıyla tanımlanır.

* View:

- Son kullancının gördüğü tasarımdır.
- Bileşenin return satırına yazdığımız jsx elementleri burada tanımlanır.

* Controller:

- View ile Model arasındaki bağlantıyı sağlar.
- Kullancı etkileşimiyle tetiklenecek tüm fonksiyonlar, stateler vb yapılar burada tanımlanır.


# MVC Klasör Yapısı:

## 1.YOL:
- public
- src
- - pages
- - - MainPage
- - - - MainPageController
- - - - MainPageView
- - - - MainPageModel
- - - AuthPage
- - - - AuthPageController
- - - - AuthPageView
- - - - AuthPageModel

## 2.YOL:
- public
- src
- - controllers
- - - MainPageController
- - - AuthPageController
- - models
- - - MainPageModel
- - - AuthPageModel
- - views
- - - MainPageView
- - - AuthPageView
