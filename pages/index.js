import Layout from "../components/layout";
import Instrumentos from "../components/instrumentos";
import Posts from "../components/posts";
import Curso from "../components/curso";
import styles from "../styles/grid.module.css";

export default function Home({ blogs, instrumentos, curso }) {
  return (
    <Layout>
      <main>
        <h2 className=" flex justify-center mt-8 m-2 text-2xl xl:text-3xl text-gray-700 font-bold">
          Nuestra Coleccion
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-5 aling-center m-auto w-[180px] xl:w-[1000px]">
          {instrumentos?.map((element) => (
            <Instrumentos key={element.id} data={element.attributes} />
          ))}
        </div>
      </main>

      <Curso curso={curso} />

      <section>
        <h2 className="flex justify-center mt-12 m-2 text-2xl xl:text-3xl text-gray-700 font-bold">
          Blog
        </h2>
        <div className={styles.grid}>
          {blogs?.map((posts) => (
            <Posts key={posts.id} posts={posts.attributes} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const urlGuitarras = `${process.env.API_URL}/instrumentos?populate=img`;
  const urlPosts = `${process.env.API_URL}/blogs?populate=img`;
  const urlCurso = `${process.env.API_URL}/curso?populate=img`;

  const [resGuitarras, resPosts, resCurso] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPosts),
    fetch(urlCurso),
  ]);
  const [{ data: instrumentos }, { data: blogs }, { data: curso }] =
    await Promise.all([resGuitarras.json(), resPosts.json(), resCurso.json()]);

  return {
    props: {
      instrumentos,
      blogs,
      curso,
    },
  };
}
