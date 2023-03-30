import page4 from "../page4.jpg";

export function Page4() {
  return (
    <section className="bg-azulPagina-50">
      <div className="container mx-auto px-16 flex flex-col lg:flex-row flex-wrap justify-center items-center pt-10 pb-10 h-full">
        <div className="flex-1 items-center justify-center w-full p-8">
          <img src={page4} alt="placeholder" />
        </div>
        <div className="flex-1 flex-col w-full p-8">
          <h5 className="text-2xl font-bold mb-4 text-white">
            Permítanos administrar su servidor
          </h5>
          <p className="text-base md:text-lg lg:text-xl text-white">
            Despreocúpate y permite que profesionales administren y mantengan
            actualizado su VPS cloud sin cargos adicionales. Mantén tu servidor
            con las últimas actualizaciones de rendimiento y seguridad sin
            cargos extras.
          </p>
        </div>
      </div>
    </section>
  );
}
