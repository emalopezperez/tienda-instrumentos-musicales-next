import Layout from "../components/Layout";
import Instrumentos from "../components/instrumentos";

const Tienda = ({ data }) => {
  return (
    <Layout>
      <main className="">
        <h2 className=" flex justify-center mt-8 m-2 text-2xl xl:text-3xl text-orange-700 font-bold">
          Nuestra Coleccion
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-5 aling-center m-auto w-[180px] xl:w-[1000px]">
          {data?.map((element) => (
            <Instrumentos key={element.id} data={element.attributes} />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export default Tienda;

export async function getServerSideProps() {
  const respuesta = await fetch(
    `${process.env.API_URL}/instrumentos?populate=img`
  );
  const { data } = await respuesta.json();

  return {
    props: { data },
  };
}
