import { useEffect, useState } from "react";

export default function Featured() {
  const [features, setFeatures] = useState([]);
  useEffect(() => {
    fetch("https://agency.teamrabbil.com/api/FeaturedProject")
      .then((res) => res.json())
      .then((data) => setFeatures(data));
  }, []);

  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-indigo-400">
          Featured Project
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          We provide the Perfect Solution to your business growth
        </p>
        <div>
          <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
            {features[0] && (
              <div className="relative lg:row-span-2">
                <div className="absolute inset-px rounded-lg bg-gray-800 lg:rounded-l-[2rem]" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                  <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                    <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                      {features[0].title}
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit
                      maiores impedit.
                    </p>
                  </div>
                  <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                    <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 outline outline-1 outline-white/20">
                      <img
                        alt=""
                        src={features[0].image}
                        className="size-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow outline outline-1 outline-white/15 lg:rounded-l-[2rem]" />
              </div>
            )}
            {features[1] && (
              <div className="relative max-lg:row-start-1">
                <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-t-[2rem]" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                  <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                    <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                      {features[1].title}
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit
                      maiores impedit.
                    </p>
                  </div>
                  <div className="flex flex-1 items-center justify-center px-8 max-lg:pb-12 max-lg:pt-10 sm:px-10 lg:pb-2">
                    <img
                      alt=""
                      src={features[1].image}
                      className="w-full max-lg:max-w-xs"
                    />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow outline outline-1 outline-white/15 max-lg:rounded-t-[2rem]" />
              </div>
            )}
            {features[2] && (
              <div className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
                <div className="absolute inset-px rounded-lg bg-gray-800" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
                  <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                    <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                      {features[2].title}
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                      Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                      suspendisse semper morbi.
                    </p>
                  </div>
                  <div className="flex flex-1 items-center [container-type:inline-size] max-lg:py-6 lg:pb-2">
                    <img
                      alt=""
                      src={features[2].image}
                      className="h-[min(152px,40cqw)] object-cover"
                    />
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow outline outline-1 outline-white/15" />
              </div>
            )}
            {features[3] && (
              <div className="relative lg:row-span-2">
                <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-b-[2rem] lg:rounded-r-[2rem]" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
                  <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
                    <div className="px-8 pb-3 pt-8 sm:px-10 sm:pb-0 sm:pt-10">
                      <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">
                        {features[3].title}
                      </p>
                      <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                        Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                        suspendisse semper morbi.
                      </p>
                    </div>
                    <div className="relative min-h-[30rem] w-full grow [container-type:inline-size] max-lg:mx-auto max-lg:max-w-sm">
                      <div className="absolute inset-x-10 bottom-0 top-10 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 outline outline-1 outline-white/20">
                        <img
                          alt=""
                          src={features[3].image}
                          className="size-full object-cover object-top"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
