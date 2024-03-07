import Link from "next/link";
("next/link");

export const Header = () => {
  return (
    <header className="fixed top-2 z-50 mx-auto w-full px-8 lg:top-8">
      <div className="mx-auto rounded-xl border border-onyx-800 bg-onyx-900/60 p-3 backdrop-blur-xl backdrop-filter lg:max-w-lg lg:rounded-2xl">
        <div className="flex items-center justify-between">
          {/* <!-- 1 --> */}
          <div>
            <Link
              href="#"
              className="flex items-center pl-2 text-xs text-white transition hover:text-white/50"
            >
              Aubergine
            </Link>
          </div>

          {/* <!-- 2 --> */}
          <nav>
            <ul className="hidden items-center gap-3 text-white md:flex">
              <li className="">
                <Link
                  href="#"
                  className="px-2 py-10 text-xs text-white transition hover:text-blue-300"
                >
                  Overview
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="px-2 py-10 text-xs text-white transition hover:text-blue-300"
                >
                  Style Guide
                </Link>
              </li>
              <li>
                <a href="#" className=""></a>
                <Link
                  href="#"
                  className="rounded-lg bg-gradient-to-tr from-blue-500 via-blue-400 to-blue-300 px-4 py-2 text-xs text-onyx-950 transition duration-300 hover:to-blue-400"
                >
                  Buy Aubergine
                </Link>
              </li>
            </ul>
            <div className="flex cursor-pointer text-zinc-400 md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};
