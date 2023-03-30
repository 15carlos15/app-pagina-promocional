import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Sobre", href: "#section1" },
  { name: "Servicios", href: "#section2" },
  { name: "Precios", href: "#section3" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="">
      <header className="inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8 bg-azulPagina-50"
          aria-label="Global"
        >
          <div className="flex lg:flex-1 text-white">
            <a
              href="#"
              className="flex inline-flex -m-1.5 p-1.5 text-2xl font-bold hover:text-red-400"
            >
              <span>HOSTING WEBSITE</span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="text-white -m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="text-white hidden lg:flex lg:gap-x-12 ">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-white py-1 px-4 text-lg font-semibold leading-6 hover:text-red-400 hover:rounded"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className=" border-l border-t fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-azulPagina-50 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-end justify-end">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-white -mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 hover:text-red-400 hover:rounded"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}
