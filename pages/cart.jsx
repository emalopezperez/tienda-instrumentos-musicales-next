import { useEffect, useState } from "react";
import Layout from "../components/layout";
import Image from "next/image";

const Cart = ({ carrito, eliminarProducto }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calcularTotal = carrito.reduce(
      (total, producto) => total + producto.cantidad * producto.precio,
      0
    );

    setTotal(calcularTotal);
  }, [carrito]);

  return (
    <Layout>
      <main className="">
        <h2 className=" flex justify-center mt-8 text-2xl xl:text-3xl text-gray-700 font-bold">
          Carrito
        </h2>

        <div className="">
          <div className="flex flex-col justify-center m-10 p-4">
            {carrito.length === 0
              ? "Carrito se encuentra vacio"
              : carrito.map((producto) => (
                  <div
                    className=" shadow p-5 mt-10 mb-3 flex lg:gap-2 gap-10 items-center  cursor-pointer"
                    key={producto.id}
                  >
                    <div className="md:w-4/6 ">
                      <div className="md:w-4/6">
                        <Image
                          width={100}
                          height={110}
                          src={producto.imagen}
                          alt={producto.nombre}
                        />
                      </div>
                      <div className="mt-6">
                        <p className="font-bold pb-4">{producto.nombre}</p>
                        <p>Cantidad: {producto.cantidad}</p>
                        <p>
                          Precio: $<span>{producto.precio}</span>
                        </p>
                        <p>
                          Subtotal: $
                          <span>{producto.precio * producto.cantidad}</span>
                        </p>
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={(id) => {
                          eliminarProducto(producto.id);
                        }}
                        type="button"
                        className="hover:bg-slate-200 flex gap-2  lg:px-5 lg:py-2 text-black rounded-md  uppercase shadow-md w-full text-center mt-3"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="lg:h-6 lg:w-6 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={1}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
          </div>
        </div>
        <aside className=" flex justify-center  rounded bg-gray-200 ">
          <div className="flex flex-col">
            <h3 className="font-bold mt-2 mb-4">Resumen del pedido</h3>
            <p className="font-bold mb-2">Total a pagar:</p>${total}
          </div>
        </aside>
      </main>
    </Layout>
  );
};

export default Cart;
