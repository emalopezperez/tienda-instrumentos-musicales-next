import Link from "next/link";
import Cart from "../pages/cart";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose , AiOutlineShoppingCart} from "react-icons/ai";

const Header = () => {
  return (
    <header className="items-center header w-full  bg-black/80">
      <div className=" flex flex-col justify-between xl:flex-row  ">
        <Link href="/">
          <h1 className="text-white text-2xl p-1 m-2 cursor-pointer">LaMusica</h1>
        </Link>
        <div className="bg-gray-200 rounded-full flex items-center mt-3 mb-2 px-1 w-[200px] sm:w-[400px] lg:w-[500px] h-8  lg:h-10">
          <AiOutlineSearch size={25} />
          <input
            className="bg-transparent  focus:outline-none "
            type="text"
            placeholder="Search Instruments"
          />
        </div>
        <nav className="flex gap-8 m-2 p-2 mx-4  text-white">
          <Link href="/">Home</Link>
          <Link href="/tienda">Tienda</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/cart">
            <AiOutlineShoppingCart size={23}/>
          </Link>
        </nav>
      </div>
      <img
          className="w-full max-h-[400px] object-cover"
          src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?cs=srgb&dl=pexels-vishnu-r-nair-1105666.jpg&fm=jpg&_gl=1*zlqurg*_ga*MTU2NzYwMDg1Mi4xNjM5NTMzNjc2*_ga_8JE65Q40S6*MTY2Njk2NjA2OS4yNi4xLjE2NjY5NjY0OTYuMC4wLjA."
          alt="/"
        />
    </header>
  );
};

export default Header;
