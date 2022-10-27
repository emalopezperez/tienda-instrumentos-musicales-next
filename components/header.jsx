import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className=" header w-full  bg-black/80">
      <div className=" flex flex-col justify-between xl:flex-row  ">
        <Link href="/">
          <h1 className="text-white text-xl p-2 cursor-pointer">LaMusica</h1>
        </Link>
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
