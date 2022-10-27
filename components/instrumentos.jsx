import Image from "next/image";
import Link from "next/link";
import styles from "../styles/instrumento.module.css"

const Instrumentos = ({ data }) => {
  const { nombre, precio, descripcion, img, url } = data;

  return (
    <main className=" mt-1 lg:mt-8">
      <div className=" p-2">
        <Image src={img.data.attributes.formats.medium.url} alt="imagen de los instrumentos" width={600} height={400}/>
        <h2 className="text-xl text-gray-700 mb-4">{data.nombre}</h2>
        <p className={styles.descripcion}>{data.descripcion}</p>
        <p className=" flex justify-center m-4 text-xl text-orange-700">${data.precio}</p>
        <Link
          className="flex justify-center text-sm mt-2"
          href={`/instrumentos/${url}`}>
          Ver mas...
        </Link>
      </div>
    </main>
  );
};

export default Instrumentos;
