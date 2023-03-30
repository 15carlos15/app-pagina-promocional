import s1 from "../s1.png";
import s2 from "../s2.png";
import s3 from "../s3.png";
import s4 from "../s4.png";
import s5 from "../s5.png";
import s6 from "../s6.png";

export function Page2() {
  return (
    <section id="section2" className="bg-white w-full">
      <div className="text-center mt-20 mb-3">
        <h1 className="text-3xl">
          <b>Nuestros Servicios</b>
        </h1>
      </div>
      <div className="container mx-auto py-10 flex-wrap">
        <div className="lg:mb-10 lg:flex lg:flex-wrap lg:justify-center lg:items-center flex-col sm:flex-row sm:justify-center sm:items-center">
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 rounded">
            <div className="rounded-xl shadow-xl py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <div className="mx-auto max-w-xs flex justify-center items-center h-20 w-20 rounded-full bg-blue-400 hover:bg-red-500">
                  <img
                    className="flex justify-center items-center w-12 object-cover"
                    src={s1}
                    alt="imagen1"
                  />
                </div>
                <h1 className="text-2xl mb-4">
                  <b>Hosting Compartido</b>
                </h1>
              </div>
            </div>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 rounded">
            <div className="rounded-xl shadow-xl py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <div className="mx-auto max-w-xs flex justify-center items-center h-20 w-20 rounded-full bg-blue-400 hover:bg-red-500">
                  <img
                    className="flex justify-center items-center w-12 object-cover"
                    src={s2}
                    alt="imagen2"
                  />
                </div>
                <h1 className="text-2xl mb-4">
                  <b>Hosting Dedicado</b>
                </h1>
              </div>
            </div>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 rounded">
            <div className="rounded-xl shadow-xl py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <div className="mx-auto max-w-xs flex justify-center items-center h-20 w-20 rounded-full bg-blue-400 hover:bg-red-500">
                  <img
                    className="flex justify-center items-center w-12 object-cover"
                    src={s3}
                    alt="imagen3"
                  />
                </div>
                <h1 className="text-2xl mb-4">
                  <b>Cloud Hosting</b>
                </h1>
              </div>
            </div>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 rounded">
            <div className="rounded-xl shadow-xl py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <div className="mx-auto max-w-xs flex justify-center items-center h-20 w-20 rounded-full bg-blue-400 hover:bg-red-500">
                  <img
                    className="flex justify-center items-center w-12 object-cover"
                    src={s4}
                    alt="imagen4"
                  />
                </div>
                <h1 className="text-2xl mb-4">
                  <b>Servidor VPS</b>
                </h1>
              </div>
            </div>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 rounded">
            <div className="rounded-xl shadow-xl py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <div className="mx-auto max-w-xs flex justify-center items-center h-20 w-20 rounded-full bg-blue-400 hover:bg-red-500">
                  <img
                    className="flex justify-center items-center w-12 object-cover"
                    src={s5}
                    alt="imagen5"
                  />
                </div>
                <h1 className="text-2xl mb-4">
                  <b>Hosting Wordpress</b>
                </h1>
              </div>
            </div>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0 rounded">
            <div className="rounded-xl shadow-xl py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <div className="mx-auto max-w-xs flex justify-center items-center h-20 w-20 rounded-full bg-blue-400 hover:bg-red-500">
                  <img
                    className="flex justify-center items-center w-12 object-cover"
                    src={s6}
                    alt="imagen6"
                  />
                </div>
                <h1 className="text-2xl mb-4">
                  <b>Nombre de dominio</b>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
