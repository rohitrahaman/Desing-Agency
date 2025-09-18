import { useEffect, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router";
import Footer from "../components/Footer";

function Team() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [people, setPeople] = useState([]);
  useEffect(() => {
    fetch("https://agency.teamrabbil.com/api/TeamList")
      .then((res) => res.json())
      .then((data) => setPeople(data));
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
              <img alt="" src="da.png" className="h-52 w-auto" />
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
              <a href="/" className="-m-1.5 p-1.5">
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
                <div className="space-y-2 py-6 text-white">
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
      {/*Team */}
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-xl">
            <h2 className="text-pretty text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Meet our leadership
            </h2>
            <p className="mt-6 text-lg/8 text-gray-400">
              We are a dynamic group of individuals who are passionate about
              what we do and dedicated to delivering the best results for our
              clients.
            </p>
          </div>
          <ul
            role="list"
            className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
          >
            {people.map((person) => (
              <li>
                <div className="flex items-center gap-x-6">
                  <img
                    alt=""
                    src={person.image}
                    className="size-16 rounded-full outline outline-1 -outline-offset-1 outline-white/10"
                  />
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-white">
                      {person.name}
                    </h3>
                    <p className="text-sm/6 font-semibold text-indigo-400">
                      {person.bio}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/*Footer */}
      <Footer />
    </div>
  );
}

export default Team;
