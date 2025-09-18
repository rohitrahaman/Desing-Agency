import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

function Testimonial() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://agency.teamrabbil.com/api/TestimonialList")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div className="bg-gray-900">
      {/*header */}
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
      {/*testimonial */}
      <div className="bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Better Agency/SEO Solution At Your Fingertips
            </h2>
            <p className="mt-2 text-lg/8 text-gray-300">Testimonial List</p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-700 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex max-w-xl flex-col items-start justify-between"
              >
                <div className="flex items-center gap-x-4 text-xs">
                  <a
                    href={post.designation}
                    className="relative z-10 rounded-full bg-gray-800/60 px-3 py-1.5 font-medium text-gray-300 hover:bg-gray-800"
                  >
                    {post.id}
                  </a>
                </div>
                <div className="group relative grow">
                  <h3 className="mt-3 text-lg/6 font-semibold text-white group-hover:text-gray-300">
                    <a href={post.designation}>
                      <span className="absolute inset-0" />
                      {post.msg}
                    </a>
                  </h3>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                  <img
                    alt=""
                    src={post.image}
                    className="size-10 rounded-full bg-gray-800"
                  />
                  <div className="text-sm/6">
                    <p className="font-semibold text-white">
                      <a href={post.designation}>
                        <span className="absolute inset-0" />
                        {post.name}
                      </a>
                    </p>
                    <p className="text-gray-400">{post.designation}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/*footer */}
      <Footer />
    </div>
  );
}

export default Testimonial;
