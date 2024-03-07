export const Hero = () => {
  return (
    <section className="relative">
      <div className="absolute inset-x-0 h-96 rotate-180 text-gray-500/20 opacity-60 [mask-image:linear-gradient(to_bottom,transparent,white)]">
        <svg
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid-pattern"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
              x="50%"
              y="100%"
              patternTransform="translate(0 -1)"
            >
              <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)"></rect>
        </svg>
      </div>
      {/* <!-- hero title --> */}
      <div className="relative mx-auto max-w-7xl px-8 pb-24 pt-32 md:px-12 lg:px-36 lg:pt-64">
        <div className="text-center">
          <h1 className="text-4xl text-white lg:text-5xl">
            Web development subscriptions
            <span className="text-onyx-400 md:block">
              {" "}
              to scale your life and business.{" "}
            </span>
          </h1>
          <p className="mt-4 text-[rgb(175_173_190)]">
            A design agency without a twist
          </p>
          {/* <!-- button --> */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <a
              href="http://google.com"
              className="rounded-xl bg-gradient-to-tr from-indigo-500 via-indigo-400 to-indigo-300 px-6 py-3 text-sm text-black hover:to-indigo-400"
            >
              See all pages
            </a>
            <a
              href="http://google.com"
              className="rounded-xl border border-[rgb(52_50_63)] bg-onyx-900 px-6 py-3 text-sm text-[rgb(175_173_190)] hover:text-blue-300"
            >
              Buy Aubergine
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
