import axios from "axios";
import { toast } from "react-toastify";

export default class CreateModel{
    async createPost(newPost){
        try {
           await axios.post("http://localhost:3000/posts", newPost)
           toast.success("Gönderi Başarıyla Oluşturuldu")
           //return etmemiz gerekn veri yok. işlem başarılı olunca zaten veri kaydedilecek
        } catch (err) {
            toast.error("Veri Kaydedilirken Hata Oluştu :/")
            console.log(err)
        }
    }
}