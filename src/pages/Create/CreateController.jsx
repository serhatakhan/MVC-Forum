import { v4 } from "uuid";
import CreateView from "./CreateView";
import CreateModel from "./CreateModel";
import { useNavigate } from "react-router-dom";

const CreateController = () => {
  // createPost fonk. kullanabilmek için class'ın bir örneğini oluştur
  const model = new CreateModel()

  const navigate = useNavigate()

  // form gönderilince çalışacak olan fonk
  const handleSubmit =(e)=>{
    e.preventDefault()

    // 1) inputlardaki verileri alıp bir post nesnesi oluştur.
    const form = new FormData(e.target)
    const newPost = Object.fromEntries(form.entries())

    // 2) post nesnesine id değeri ekle (nesneye değer eklerken . koyuyoruz)
    newPost.id = v4()

    // 3) api'ye veriyi kaydet ve anasayfaya yönlendir
    model.createPost(newPost)
    .then(()=> navigate("/"))

    // formu sıfırla (kullanıcı formu gönderdikten sonra zaten başka sayfaya yönleneceği için buna pek gerek yok)
    e.target.reset()
  }

  // CONTROLLER'LAR SADECE VIEW BİLEŞENİNİ DÖNDÜRÜR.
  return <CreateView handleSubmit={handleSubmit} />;
};

export default CreateController;
