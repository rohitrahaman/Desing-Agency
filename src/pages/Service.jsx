import { useEffect, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router";
import Footer from "../components/Footer";

function Service() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [services, setService] = useState([]);
  useEffect(() => {
    fetch("https://agency.teamrabbil.com/api/AllProject")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  return (
    <div className="bg-gray-900">
      {/*Header*/}
      <header className=" inset-x-0 top-0 z-50">
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
            <div className="mt-6  flex-row">
              <div className="-my-6 divide-y divide-white/10">
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
      {/*service */}
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            We Provide BestWeb design services
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {services.map((service) => (
              <div key={service.id} className="group relative">
                <img
                  alt=""
                  src={service.image}
                  className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80"
                />
                <div className="mt-4 ">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href={service.live}>
                        <span aria-hidden="true" className="absolute inset-0" />
                        {service.title}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      {service.remark}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*footer */}
      <Footer />
    </div>
  );
}

export default Service;
