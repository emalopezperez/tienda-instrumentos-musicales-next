import Layout from "../components/Layout";
import Posts from "../components/posts";
import styles from "../styles/grid.module.css";

const Blog = ({ data }) => {
  return (
    <Layout>
      <main>
        <h2 className="flex justify-center mt-12 m-2 text-2xl xl:text-3xl text-orange-700 font-bold">
          Blog
        </h2>
        <div className={styles.grid}>
          {data?.map((posts) => (
            <Posts key={posts.id} posts={posts.attributes} />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default Blog;

export async function getServerSideProps() {
  const respuesta = await fetch(`${process.env.API_URL}/blogs?populate=img`);
  const { data } = await respuesta.json();

  return {
    props: { data },
  };
}
