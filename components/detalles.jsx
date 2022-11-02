import { useState } from "react";
import Image from "next/image";

const Detalles = ({ element, key, agregarCarrito, carrito, eliminarProducto }) => {
  const { nombre, img, descripcion, precio } = element.attributes;

  const [cantidad, setCantidad] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cantidad < 1) {
      console.log("error bajo");
    } else {
      const instrumentosSeleccionados = {
        id: element.id,
        precio: precio,
        nombre: nombre,
        imagen: img.data.attributes.url,
        cantidad: cantidad,
      };

      agregarCarrito(instrumentosSeleccionados);
    }
  };

  

  return (
    <main className="  mt-1 lg:mt-8">
      <div className="relative px-4 py-8 mx-auto  max-w-screen-xl">
        <div className="grid gap-8 lg:items-start lg:grid-cols-4 ">
          <div className="lg:col-span-3">
            <div className="relative mt-4">
              <Image
                src={img.data.attributes.url}
                alt="imagen de los instrumentos"
                width={200}
                height={100}
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/75 text-white px-3 py-1.5 inline-flex items-center">
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>

                <span className="text-xs ml-1.5">Hover to zoom</span>
              </div>
            </div>
          </div>

          <div className="lg:top-0 lg:sticky text-black">
            <div className="space-y-4 lg:pt-8 border-black p-4">
              <div>
                <span className="text-xs text-stone-400">
                  Nuevo | 2 vendidos
                </span>
              </div>
              <div>
                <h1 className="text-2xl  lg:text-3xl text-center text-black">
                  {nombre}
                </h1>
              </div>

              <div className=" felx justify-center p-2 bg-gray-100  border-black">
                <p className="text-sm">
                  <span className="block text-xs border-zinc-800 text-teal-700">
                    Envío gratis a todo el país
                  </span>
                </p>
              </div>

              <div className=" p-10 bg-gray-100  border-black ">
                <p className="text-sm">
                  <span className="block text-xs border-zinc-800 text-black">
                    Color: <span className="text-stone-400">Negro</span>
                  </span>
                </p>
                <p className="text-sm">
                  <span className="block text-xs border-zinc-800 text-black">
                    Stock: <span className="text-stone-400">disponible</span>
                  </span>
                </p>
              </div>
              <div className="flex justify-center p-7">
                <p className="text-2xl">${precio}</p>
              </div>
              <form
                onSubmit={handleSubmit}
                className="flex justify-center flex-col mt-6 gap-4"
              >
                <label className="" htmlFor="cantidad ">
                  <select
                    onChange={(e) => setCantidad(Number(e.target.value))}
                    className="rounded-xl mt-2 bg-gray-100"
                    id="cantidad"
                  >
                    <option value="0">Cantidad</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                  <div className=" mt-2">
                    <input
                      className="cursor-pointer py-1 px-1 bg-red-400 rounded-xl text-white"
                      type="submit"
                      value="Agregar al carrito"
                    />
                  </div>
                </label>
              </form>
            </div>
          </div>

          <div className="lg:col-span-3 text-black">
            <div className="prose max-w-none">
              <p>{descripcion}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Detalles;
