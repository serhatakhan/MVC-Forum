import axios from "axios";

// * Veri ile alakalı her türlü yapıyı Model'de tanımlarız.(Aşağıda api isteği atan fonk'u bu yüzden model'de)
// * Model oluştururken genelde class'ları tercih ederiz.
export default class ListModel {
  // api'den post verilerini alıp döndüren fonk.
  async getPosts() {
    try {
      const res = await axios.get("http://localhost:3000/posts");
      return res.data;

    } catch (err) {
      alert("üzgünüz bir hata oluştu");
      console.log(err);
    }
  }
}
// * Hata olma ihtimaline karşılık, async-await ile yazdığımız kodları,
// try-catch bloğuna almayı ihmal etmemek gerek.
