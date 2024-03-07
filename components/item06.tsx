export const Item06 = () => {
  return (
    <section>
      {/* <!-- hero like title --> */}
      <div className="mx-auto max-w-7xl px-8 py-24 md:px-12 lg:px-36">
        <div className="text-center">
          <h1 className="text-4xl text-white lg:text-5xl">
            Apply now and we will let you know
            <span className="text-onyx-400 md:block">
              if we are the right fit for you in 48h.{" "}
            </span>
          </h1>
          <p className="mt-4 text-[rgb(175_173_190)]">
            Clean design and well craftwed websites are waiting for you.
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
              className="rounded-xl border border-[rgb(52_50_63)] bg-onyx-900 px-6 py-3 text-sm text-[rgb(175_173_190)] transition duration-500 hover:border-onyx-400 hover:text-blue-300"
            >
              Buy Aubergine
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
