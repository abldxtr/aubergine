export const Footer = () => {
  return (
    <footer>
      <div className="mx-auto max-w-7xl px-8 py-6 md:px-12 lg:px-36">
        <div className="pb-6 pt-16 text-center">
          <div>
            <p className="text-2xl font-semibold italic text-white lg:text-4xl">
              aubergine.
            </p>
            <p className="mt-1 text-sm text-onyx-300">
              Designed and built in the Åland Islands
              <br />
              by Michael Andreuzza.
            </p>
          </div>
          <div className="mt-11 flex flex-col items-center justify-center sm:flex-row">
            <a
              href="#"
              className="w-full rounded-lg px-3 py-2 text-sm text-onyx-300 transition delay-150 hover:bg-onyx-900 hover:text-white sm:w-fit"
            >
              Overview
            </a>
            <a
              href="#"
              className="w-full rounded-lg px-3 py-2 text-sm text-onyx-300 transition delay-150 hover:bg-onyx-900 hover:text-white sm:w-fit"
            >
              Style Guide
            </a>
            <a
              href="#"
              className="w-full rounded-lg px-3 py-2 text-sm text-onyx-300 transition delay-150 hover:bg-onyx-900 hover:text-white sm:w-fit"
            >
              FAQs
            </a>
            <a
              href="#"
              className="w-full rounded-lg px-3 py-2 text-sm text-onyx-300 transition delay-150 hover:bg-onyx-900 hover:text-white hover:delay-[0ms] sm:w-fit"
            >
              Social
            </a>
          </div>
        </div>

        {/* <!-- copy right --> */}
        <div className="mx-auto max-w-2xl">
          <div className="border-t border-onyx-800 pt-8 text-center text-onyx-300">
            <p>
              © Copyright <span>2023</span>. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
