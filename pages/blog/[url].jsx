import Layout from "../../components/Layout";
import Image from "next/image";
import { formatearFecha } from "../../utils/helpers";
import styles from "../../styles/blog.module.css";

const Post = ({ data }) => {
  const { contenido, titulo, img, url, publishedAt } = data[0].attributes;

  return (
    <Layout>
      <article className="flex flex-col xl:flex-row m-8 xl:m-16 ">
        <Image
          className="m-2"
          src={img.data.attributes.formats.medium.url}
          alt="imagen de los instrumentos"
          width={600}
          height={400}
        />

        <div className={styles.contenido}>
          <h3 className={styles.contenido.h3}>{titulo}</h3>
          <p className="text-gray-600 text-sm ">
            {formatearFecha(publishedAt)}
          </p>
          <p className={styles.texto}>{contenido}</p>
        </div>
      </article>
    </Layout>
  );
};

export default Post;

export async function getServerSideProps({ query: { url } }) {
  const respuesta = await fetch(
    `${process.env.API_URL}/blogs?filters[url]=${url}&populate=img`
  );
  const { data } = await respuesta.json();

  return {
    props: { data },
  };
}
