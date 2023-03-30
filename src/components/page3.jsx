import laptop from "../laptop.svg";

export function Page3() {
  return (
    <section id="section1" className="sm:my-0 lg:my-16 pb-12">
      <div className="container mx-auto px-32 flex flex-col lg:flex-row flex-wrap justify-center items-center">
        <div className="flex-1 p-8 text-center mt-16 lg:mt-0 lg:text-left">
          <h1 className="text-4xl font-bold mb-4">
            <b>Sobre nosotros</b>
          </h1>
          <p className="text-lg my-8">
            Hosting Website nació primero como hosting-website.net.ve en el año
            2020 como un pequeño emprendimiento familiar, llenos de muchos
            sueños y metas. Con altos y bajos, en un país con problemas
            económicos (para ese entonces). Hoy, con más de 3 años de
            experiencia, estamos más comprometidos que nunca con nuestros
            clientes y con nuestro país. Y de esta manera, brindarles el mejor
            servicio, con la mejor atención, con los mayores estándares
            internacionales, y al mejor precio.
          </p>
          <button className="border border-red-600 bg-red-600 py-2 px-16 rounded hover:bg-transparent text-white hover:text-black">
            Lee mas
          </button>
        </div>
        <div className="flex-1 flex justify-center items-center ">
          <img className="w-full mx-auto" src={laptop} alt="Imagen" />
        </div>
      </div>
    </section>
  );
}
