import { Link, NavLink } from "react-router-dom"

const HeaderView = () => {
  return (
    <header className="p-5 bg-black flex justify-between">
        <h1 className="text-orange-400 font-bold text-2xl">
            <Link to={"/"} >MVC Forum</Link>
        </h1>

        {/* aktif olanı gizledik. böylece hangisi aktifse diğer NavLink görünecek. */}
        <nav className="text-orange-400 flex gap-4 items-center">
            <NavLink to={"/"} >Gönderiler</NavLink>
            <NavLink to={"/create"} >Gönderi Ekle</NavLink>
        </nav>
    </header>
  )
}

export default HeaderView