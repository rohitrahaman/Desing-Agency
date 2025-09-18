import { useEffect, useState } from "react";

function Worklist() {
  const [worklist, setWorklist] = useState([]);
  useEffect(() => {
    fetch("https://agency.teamrabbil.com/api/WorkList")
      .then((res) => res.json())
      .then((data) => setWorklist(data));
  }, []);
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-indigo-400">
          Work List
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          We provide the Perfect Solution to your business growth
        </p>

        <div className="flex items-center justify-center mt-5 mx-auto max-w-2xl grid-cols-1 gap-x-8  lg:max-w-none lg:grid-cols-2 ">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3 lg:pt-2">
            {worklist[0] && (
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    aria-hidden="true"
                    className="size-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
                    />
                  </svg>
                </div>
                <dt className="mt-4 text-base font-semibold text-white">
                  {worklist[0].title}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-400">
                  {worklist[0].des}
                </dd>
                <a className="text-white" href="#">
                  learn more
                </a>
              </div>
            )}
            {worklist[1] && (
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    aria-hidden="true"
                    className="size-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </div>
                <dt className="mt-4 text-base font-semibold text-white">
                  {worklist[1].title}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-400">
                  {worklist[1].des}
                </dd>
                <a className="text-white" href="#">
                  learn more
                </a>
              </div>
            )}
            {worklist[2] && (
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    aria-hidden="true"
                    className="size-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                </div>
                <dt className="mt-4 text-base font-semibold text-white">
                  {worklist[2].title}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-400">
                  {worklist[2].des}
                </dd>
                <a className="text-white" href="#">
                  learn more
                </a>
              </div>
            )}
          </dl>
        </div>
        <div className="flex items-center justify-center mt-10 mx-auto max-w-2xl grid-cols-1 gap-x-8  lg:max-w-none lg:grid-cols-2 ">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-4 lg:pt-2">
            {worklist[0] && (
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    aria-hidden="true"
                    className="size-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
                    />
                  </svg>
                </div>
                <dt className="mt-4 text-base font-semibold text-white">
                  {worklist[0].title}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-400">
                  {worklist[0].des}
                </dd>
                <a className="text-white" href="#">
                  learn more
                </a>
              </div>
            )}
            {worklist[0] && (
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    aria-hidden="true"
                    className="size-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 13.5V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 0 1 0 3m0-3a1.5 1.5 0 0 0 0 3m0 9.75V10.5"
                    />
                  </svg>
                </div>
                <dt className="mt-4 text-base font-semibold text-white">
                  {worklist[0].title}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-400">
                  {worklist[0].des}
                </dd>
                <a className="text-white" href="#">
                  learn more
                </a>
              </div>
            )}
            {worklist[1] && (
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    aria-hidden="true"
                    className="size-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </div>
                <dt className="mt-4 text-base font-semibold text-white">
                  {worklist[1].title}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-400">
                  {worklist[1].des}
                </dd>
                <a className="text-white" href="#">
                  learn more
                </a>
              </div>
            )}
            {worklist[2] && (
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    aria-hidden="true"
                    className="size-6 text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                </div>
                <dt className="mt-4 text-base font-semibold text-white">
                  {worklist[2].title}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-400">
                  {worklist[2].des}
                </dd>
                <a className="text-white" href="#">
                  learn more
                </a>
              </div>
            )}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Worklist;
