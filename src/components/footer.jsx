import React from "react";
import {
  FaBtc,
  FaDollarSign,
  FaEuroSign,
  FaFacebookF,
  FaPaypal,
  FaRegArrowAltCircleRight,
  FaRegCreditCard,
  FaTelegramPlane,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-azulPagina-50 py-12">
      <div className="flex justify-center items-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap mx-4">
            <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0 text-center">
              <h2 className="text-white text-lg font-medium mb-4">Soporte</h2>
              <p className="text-gray-400 hover:text-white mb-2">WhatsApp</p>
              <p className="text-gray-400 hover:text-white mb-2">
                Support@hosting-ecommerce.com
              </p>
              <ul className="flex justify-center">
                <li className="mr-4">
                  <FaFacebookF className=" text-gray-400 hover:text-white h-5 w-auto" />
                </li>
                <li className="mr-4">
                  <FaTelegramPlane className=" text-gray-400 hover:text-white h-5 w-auto" />
                </li>
                <li className="mr-4">
                  <FaYoutube className=" text-gray-400 hover:text-white h-5 w-auto" />
                </li>
                <li className="mr-4">
                  <FaInstagram className=" text-gray-400 hover:text-white h-5 w-auto" />
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0 text-center">
              <h2 className="text-white text-lg font-medium mb-4">Links</h2>
              <ul className="flex flex-col justify-center items-center text-gray-400">
                <li className="mb-2">
                  <a
                    href="#"
                    className="hover:text-white flex flex-row items-center"
                  >
                    <FaRegArrowAltCircleRight className="mr-2" />
                    About
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="hover:text-white flex flex-row items-center"
                  >
                    <FaRegArrowAltCircleRight className="mr-2" />
                    Services
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="hover:text-white flex flex-row items-center"
                  >
                    <FaRegArrowAltCircleRight className="mr-2" />
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0 text-center">
              <h2 className="text-white text-lg font-medium mb-4">
                Hosting Website
              </h2>
              <p className="text-gray-400 mb-4">
                Somos un proveedor de hosting web con la misión de llevar el
                éxito a todos nuestros clientes. Lo hacemos mejorando
                constantemente la tecnología del servidor, brindando soporte
                profesional y haciendo que la experiencia de hosting web sea
                perfecta.
              </p>
            </div>
            <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0 text-center">
              <h2 className="text-white text-lg font-medium mb-4">
                Formas de pago
              </h2>
              <p className="text-gray-400 mb-2">Aceptamos pagos con:</p>
              <ul className="flex justify-center">
                <li className="mr-4">
                  <FaRegCreditCard className="h-5 w-auto text-gray-400 hover:text-white" />
                </li>
                <li className="mr-4">
                  <FaEuroSign className="h-5 w-auto text-gray-400 hover:text-white" />
                </li>
                <li className="mr-4">
                  <FaDollarSign className="h-5 w-auto text-gray-400 hover:text-white" />
                </li>
                <li className="mr-4">
                  <FaPaypal className="h-5 w-auto text-gray-400 hover:text-white" />
                </li>
                <li className="mr-4">
                  <FaBtc className="h-5 w-auto text-gray-400 hover:text-white" />
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8">
            <p className="text-gray-400 text-sm text-center">
              &copy; Todos los derechos reservados Hosting Website
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
