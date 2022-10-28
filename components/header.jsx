import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  return (
    <header className="items-center header w-full  bg-black/80">
      <div className=" flex flex-col justify-between xl:flex-row  ">
        <Link href="/">
          <h1 className="text-white text-xl p-1 m-2 cursor-pointer">LaMusica</h1>
        </Link>
        <div className="bg-gray-200 rounded-full flex items-center mt-3 px-1 w-[200px] sm:w-[400px] lg:w-[500px] h-8  lg:h-10">
          <AiOutlineSearch size={25} />
          <input
            className="bg-transparent  focus:outline-none "
            type="text"
            placeholder="Search Instruments"
          />
        </div>
        <nav className="flex gap-6 m-2 p-2 font-bold text-white">
          <Link href="/">Home</Link>
          <Link href="/tienda">Tienda</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/nosotros">Nosotros</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
