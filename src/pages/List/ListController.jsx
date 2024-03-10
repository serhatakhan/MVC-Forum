import { useEffect, useState } from "react";
import ListView from "./ListView";
import ListModel from "./ListModel";

// KULLANICI ETKİLEŞİMLERİ CONTROLLER'DA 

const ListController = () => {
  // state'ler
  const [posts, setPosts] = useState([])
  const [selectedUser, setSelectedUser] = useState(null) // seçili kullanıcı için state tuttuk  

  
  // * Bir class'ın içindeki bir fonksiyona(uygulamamızda istek atan fonksiyona erişmek istiyoruz-getPosts'a yani) 
  // erişmek istiyorsak o class'ın new anahtar kelimesiyle örneğini almamız lazım.
  // * Sonra oluşturduğumuz model üzerinden o classın içindeki fonk'a erişebiliyoruz. (useEffect içinde model.getPosts())
  const model = new ListModel()

  // useEffect ile kullanıcı etkileşimi izlediğimizden, controller dosyasında tanımlarız.
  useEffect(()=>{
    model.getPosts()
    .then((data)=> setPosts(data))
  }, [])

  // CONTROLLER'LAR SADECE VIEW BİLEŞENİNİ DÖNDÜRÜR !!!
  return <ListView posts={posts} setSelectedUser={setSelectedUser} selectedUser={selectedUser} />;
};

export default ListController;
