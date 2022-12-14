import Detalles from "../../components/detalles";
import Layout from "../../components/layout";

const Producto = ({ data , carrito, agregarCarrito,eliminarProducto}) => {
  return (
    <Layout>
      <div className="">
        {data.map((element) => (
          <Detalles
            key={element.attributes.id}
            element={element}
            carrito={carrito}
            agregarCarrito={agregarCarrito}
            eliminarProducto={eliminarProducto}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Producto;

export async function getServerSideProps({ query: { url } }) {
  const respuesta = await fetch(
    `${process.env.API_URL}/instrumentos?filters[url]=${url}&populate=img`
  );
  const { data } = await respuesta.json();

  return {
    props: { data },
  };
}
