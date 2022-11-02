import Layout from "../components/layout";
import Image from "next/image";

const Cart = ({ carrito }) => {
  console.log(carrito);
  return (
    <Layout>
      <main className="">
        <h2 className=" flex justify-center m-2 text-2xl xl:text-3xl text-gray-700 font-bold">
          Carrito
        </h2>

        <div className="grid  gap-5 grid-cols-2 xl:grid-cols-3 mt-5">
          <div className="p-3">
            {carrito.length === 0
              ? "Carrito se encuentra vacio"
              : carrito.map((producto) => (
                  <div className=" p-2  cursor-pointer" key={producto.id}>
                    <div>
                      <div>
                        <Image
                          width={100}
                          height={120}
                          src={producto.imagen}
                          alt={producto.nombre}
                        />
                      </div>
                      <div className="">
                        <p className="font-bold">{producto.nombre}</p>
                        <p>
                          Precio: $<span>{producto.precio}</span>
                        </p>
                        <p>
                          Subtotal: $
                          <span>{producto.precio * producto.precio}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
          <aside className="p-3 rounded bg-gray-200 ">
            <h3 className="font-bold">Resumen del pedido</h3>
            <p>Total a pagar:</p>
          </aside>
        </div>
      </main>
    </Layout>
  );
};

export default Cart;
