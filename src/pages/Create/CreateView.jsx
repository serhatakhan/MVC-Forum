const CreateView = ( {handleSubmit} ) => {
  
  return (
    <div className="h-[88vh] grid place-items-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-3/4 max-w-[700px] bg-black p-8 rounded-lg">
        <h1 className="text-center text-xl">Yeni Gönderi Oluştur</h1>

        <div className="input-group">
          <input type="text" required name="user" className="input mb-1 w-full" />
          <label className="user-label">Kullanıcı Adı</label>
        </div>

        <div className="input-group">
          <input type="text" required name="title" className="input mb-1 w-full" />
          <label className="user-label">Başlık</label>
        </div>

        <div className="input-group">
          <textarea type="text" required name="text" className="max-h-[300px] min-h-[150px] input mb-1 w-full" />
          <label className="user-label">Açıklamanız</label>
        </div>

        <button type="submit" className="bg-orange-600 p-2 rounded-lg transition hover:bg-orange-700">Oluştur</button>
      </form>
    </div>
  );
};

export default CreateView;
