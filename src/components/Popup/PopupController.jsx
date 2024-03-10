import { useEffect, useState } from "react";
import PopupView from "./PopupView";
import PopupModel from "./PopupModel";

const PopupController = ({ user, close }) => {
  // Gelen kullanıcı postlarına ait datayı, PopupView içinde ekrana basmak istiyoruz. Bunun için state tutup o state'i aktaracağız
  const [userPosts, setUserPosts] = useState([]);

  // PopupModel'in içindeki fonk.'a erişmek için örneğini al
  const model = new PopupModel();

  // pencere açıldığında kullanıcının gönderilerini alır
  useEffect(() => {
    model.getUserPosts(user).then((data) => setUserPosts(data));
  }, []);

  return <PopupView close={close} user={user} userPosts={userPosts} />;
};

export default PopupController;
