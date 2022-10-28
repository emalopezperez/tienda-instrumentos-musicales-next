import Image from "next/image";
import Link from "next/link";
import { formatearFecha } from "../utils/helpers";
import styles from "../styles/blog.module.css";

const Posts = ({ posts }) => {
  const { contenido, titulo, img, url, publishedAt } = posts;

  return (
    <article className="">
      <Image
        src={img.data.attributes.formats.medium.url}
        alt="imagen de los instrumentos"
        width={600}
        height={400}
      />

      <div className={styles.contenido}>
        <h3 className={styles.contenido.h3}>{titulo}</h3>
        <p className="text-gray-600 text-sm ">{formatearFecha( publishedAt)}</p>
        <p className={styles.resumen}>{contenido}</p>
        <Link
          className="text-orange-600"
          href={`/blog/${url}`}>
          Leer mas...
        </Link>
      </div>
    </article>
  );
};

export default Posts;
