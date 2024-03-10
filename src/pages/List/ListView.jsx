import PopupController from "../../components/Popup/PopupController";

const ListView = ({ posts, setSelectedUser, selectedUser }) => {

  console.log(selectedUser)
  return (
    <div className="px-6 py-6 md:px-40 lg:px-52">
      <h1>
        Gönderi Sayısı <span className="font-bold">{posts.length} </span>
      </h1>

      <div>
        {posts.length === 0 ? (
          <p>yükleniyor..</p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="bg-black w-full p-5 my-5 rounded-md shadow-zinc-400 shadow-md cursor-pointer transition hover:shadow-orange-400 ">
              <div className="flex justify-between">
                <h3 className="font-bold">{post.title}</h3>
                <p
                  onClick={() => setSelectedUser(post.user)}
                  className="text-orange-400 hover:underline">{post.user}</p>
              </div>
              {/* paragrafa tıklandığında mevcut posttaki user'ı state'e aktardık */}

              <p>{post.text}</p>
            </div>
          ))
        )}
      </div>

      {/* bir kullanıcı seçilirse ekrana onun gönderilerini bastığımız pencere aç */}
      {selectedUser && <PopupController user={selectedUser} close={()=> setSelectedUser(null)} /> }
    </div>
  );
};
// Popup'ı kapatmak için mevcut selectedUser'ı null'a çekmemiz lazım. ondan dolayı prop olarak
// onu null'a çekecek fonksiyonu tanımlayıp gönderdik

export default ListView;
