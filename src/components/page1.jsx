import imagen from "../imagen.png";

export function Page1() {
  return (
    <section className="bg-azulPagina-50 sm:my-0 pb-12">
      <div className="container mx-auto px-32 flex flex-col lg:flex-row flex-wrap justify-center items-center h-screen">
        <div className="flex-1 flex flex-col justify-center items-center p-8 text-center mt-16 lg:mt-0 lg:text-left">
          <h1 className="text-4xl  font-bold text-white mb-4 text-center">
            <b>Hosting-Website.com</b>
            <br />
            Rápido y Seguro
          </h1>
          <p className="text-lg text-white my-8">
            Con Hosting Website consigue un hosting rápido y seguro con las
            ultima tecnologia al mejor precio del mercado. Diseña tu web y
            consigue mas clientes para tu negocio con domino gratis. <br />
            <div className=" text-red-500 my-2">
              <b>Hosting Website la clave de tu éxito.</b>
            </div>
          </p>
          <a href="#section3">
          <button className="border bg-blue-400 text-white  py-2 px-16 rounded hover:bg-transparent">
            Ver planes
          </button>
          </a>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img className="w-1/2 mx-auto" src={imagen} alt="Imagen" />
        </div>
      </div>
    </section>
  );
}
