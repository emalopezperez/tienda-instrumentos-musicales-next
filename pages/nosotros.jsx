import Layout from "../components/Layout";
import Image from "next/image";

const Nosotros = () => {
  return (
    <Layout>
      <main className="container mt-3">
        <div className="flex justify-center flex-col">
          <h2 className=" flex justify-center m-2 text-2xl xl:text-3xl text-orange-700 font-bold">
            Nosotros
          </h2>

          <div className="flex justify-center flex-col sm:flex-row mt-4 gap-2 p-4">
            <Image
              className=""
              src="/img/nosotros.jpg"
              alt="imagen sobre nosotros"
              width={800}
              height={600}
            />
            <div className="  p-8">
              <p className="">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perspiciatis, debitis a. Voluptatum, explicabo accusantium? Qui
                recusandae, debitis itaque tenetur quia officiis veritatis
                cupiditate quaerat provident excepturi, ratione a voluptate
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam mollitia quisquam, nihil numquam eius qui. Perferendis maxime ex eaque temporibus aut, reiciendis laborum quod a facilis deleniti impedit debitis numquam.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis neque laudantium sunt quibusdam minima rem dicta rerum, earum dolorum distinctio maxime quod cum officiis, asperiores ullam molestias in ipsa! Delectus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi eveniet, ratione corrupti quo quibusdam mollitia perferendis dicta ipsa asperiores aliquid neque quae, architecto labore enim cupiditate nihil! Explicabo, harum aliquid.
              </p>
              <p className="">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perspiciatis, debitis a. Voluptatum, explicabo accusantium? Qui
                recusandae, debitis itaque tenetur quia officiis veritatis
                cupiditate quaerat provident excepturi, ratione a voluptate
                dolorum.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
