import { useEffect, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router";

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [heros, setHeros] = useState([]);
  useEffect(() => {
    fetch("https://agency.teamrabbil.com/api/HeroList")
      .then((res) => res.json())
      .then((data) => setHeros(data));
  }, []);

  return (
    <div className="bg-gray-900">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img alt="" src="/public/da.png" className="h-52 w-auto" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 text-white">
            <Link to="/">Home</Link>

            <Link to="/team">Team</Link>

            <Link to="/service">Service</Link>

            <Link to="/projects">Projects</Link>

            <Link to="/testimonial">Testimonials</Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link to="/login" className="text-sm/6 font-semibold text-white">
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-200"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6  flex-col">
              <div className="-my-6 divide-y flex-col divide-white/10">
                <div className="space-y-2 py-6 text-white ">
                  <Link to="/" className="block">
                    Home
                  </Link>
                  <Link to="/team" className="block">
                    Team
                  </Link>
                  <Link to="/service" className="block">
                    Service
                  </Link>
                  <Link to="/projects" className="block">
                    Projects
                  </Link>

                  <Link to="/testimonial" className="block">
                    Testimonials
                  </Link>
                </div>
                <div className="py-6">
                  <Link
                    to="/login"
                    className="text-sm/6 font-semibold text-white"
                  >
                    Log in <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>

        <div className="lg:flex sm:flex-row gap-4 px-4">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-left">
              <h1
                key={heros.index}
                className="text-balance text-5xl font-semibold tracking-tight text-white sm:text-7xl"
              >
                {heros.title}
              </h1>
              <p className="mt-8 text-pretty text-lg font-medium text-gray-400 sm:text-xl/8">
                {heros.description}
              </p>

              <div className="mt-10 flex items-left justify-left gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
          <div className="h-96 w-80 mt-52">
            <div className="grid grid-cols-[repeat(2,1fr)] grid-rows-[repeat(2,1fr)] gap-y-[10px] gap-x-[10px]">
              <div className="row-1 row-2 col-1 col-2">
                <img
                  src={heros.image1}
                  alt="Hero 1"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="row-2 row-3 col-1 col-2">
                <img
                  src={heros.image2}
                  alt="Hero 2"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="row-1 row-2 col-2 col-3">
                <img
                  src={heros.image3}
                  alt="Hero 3"
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="row-2 row-3 col-2 col-3">
                <img
                  src={heros.image4}
                  alt="Hero 4"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-2 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              alt="Transistor"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />

            <img
              alt="Reform"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />

            <img
              alt="Tuple"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            />

            <img
              alt="SavvyCal"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg"
              width={158}
              height={48}
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            />

            <img
              alt="Statamic"
              src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg"
              width={158}
              height={48}
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
