# MVC Forum

Bu proje, bir forum uygulamasını **Model-View-Controller (MVC)** mimarisi kullanarak geliştirmeyi amaçlamaktadır. MVC mimarisi, yazılım geliştirme sürecinde kodun yapılandırılmasını ve organize edilmesini sağlayan bir tasarım desenidir. Proje, forum uygulaması için ayrılmış olan Model, View ve Controller bileşenlerini içermekte olup forum uygulamasının geliştirilmesini sağlamakta ve kodun organizasyonu ile bakımını kolaylaştırmaktadır.

* **Model**

  Model kısmı, uygulamanın veri işleme ve mantıksal işlemlerinin yapıldığı bölümdür. Projede, ListModel ve CreateModel sınıfları yer almakta olup, axios kütüphanesi ile API istekleri gönderilmekte ve veritabanı işlemleri gerçekleştirilmektedir. ListModel, forumdaki gönderilerin listesini almak için API'ye istek gönderirken, CreateModel ise yeni gönderiler oluşturmak için API'ye POST isteği göndermektedir. Ayrıca hata yönetimi de Model kısmında gerçekleştirilmektedir.

* **View**
  
  View kısmı, kullanıcı arayüzünün görüntülendiği bölümdür. Bu projede, ListView ve CreateView bileşenleri bulunmaktadır. ListView, forumdaki gönderilerin listesini görüntülerken, CreateView yeni gönderi oluşturma formunu kullanıcıya sunmaktadır. View kısmı, kullanıcı etkileşimleri ile ilgili işlemleri Controller kısmına iletmektedir.

* **Controller**
  
  Controller kısmı, kullanıcı etkileşimlerini işleyen ve Model ile View arasında iletişimi sağlayan bölümdür. Bu projede, ListController ve CreateController bileşenleri bulunmaktadır. ListController, forumdaki gönderilerin listesini almak ve kullanıcı etkileşimlerini izlemekle sorumludur. CreateController ise yeni gönderi oluşturma formunun gönderilmesini işler. Controller, Model ve View arasında veri akışını sağlar ve kullanıcı etkileşimlerini yönetir.

## Kullanılan Teknolojiler

- Axios
- Json-Server
- React-Router-Dom
- React-Toastify
- Tailwind
- Uuid

## Ekran Gifi




