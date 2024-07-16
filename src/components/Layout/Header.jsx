import {Link} from "react-router-dom";
import Logo from "../../assets/images/logo.png";

export const Header = () => {
  return (
    <header className="flex  bg-customGray p-4 items-center justify-between shadow-md shadow-blue-600">
     <Link to="/">
      <img src={Logo}/>
     </Link> 
      <nav className="flex gap-4">
        <Link to="/"className="hover:bg-black text-white border-2 border-white font-semibold uppercase rounded px-9 py-2 blue-shadow-tr hover:box-blue-shadow hover:text-blue-500 transition ease-in-out duration-300">
          Home
        </Link>
        <Link to="/new-video"className="hover:bg-black text-white border-2 border-white font-semibold uppercase rounded px-9 py-2 blue-shadow-tr hover:box-blue-shadow hover:text-blue-500 transition ease-in-out duration-300">
          Nuevo video
        </Link>
      </nav>
    </header>
  )
}

export default Header;
