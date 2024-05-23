export const Item05 = () => {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-8 py-12 md:px-12 lg:px-36 lg:py-24">
        <div className="max-w-3xl text-center lg:mx-auto">
          <h3 className="text-4xl text-white">
            We have worked with the creme of the
            <span className="text-onyx-400 md:block">
              crop and this is what they have to say
            </span>
          </h3>
        </div>
        <ul className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <li className="hidden lg:block">
            <div className="h-full rounded-3xl border border-onyx-800 bg-gradient-to-tr from-onyx-950 to-onyx-700 p-4 lg:p-8">
              <div className="group flex h-full flex-col justify-between">
                <div>
                  <span className="text-sm font-medium leading-6 text-white">
                    {" "}
                    Amrit Nagi{" "}
                  </span>
                  <p>
                    <a
                      className="text-sm text-onyx-300 group-hover:text-blue-300"
                      href="#"
                    >
                      Founder of Tailwind Toolbox
                    </a>
                  </p>
                </div>
                <div className="mt-12 space-y-3">
                  <p className="text-sm text-onyx-300">
                    “The Lorem Ipsum Company has been an integral part of our
                    content marketing success. We have seen a notable increase
                    in organic leads since we began using their services in
                    2012.”
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="lg:col-span-2">
            <div className="h-full rounded-3xl border border-onyx-800 bg-gradient-to-tr from-onyx-950 to-onyx-700 p-4 lg:p-8">
              <div className="group flex h-full flex-col justify-between">
                <div className="flex flex-col gap-4 pb-6 md:flex-row lg:items-center">
                  <div className="overflow-hidden lg:p-2">
                    <img
                      alt="codeboje"
                      src="https://d33wubrfki0l68.cloudfront.net/cabc8d70a84f6d78e56c5cd2db3f54ab6462325d/95045/images/testimonials/gabi.jpeg"
                      width="56"
                      height="56"
                      decoding="async"
                      data-mining="future"
                      className="h-20 w-20 shrink-0 rounded-full object-cover grayscale"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <span className="text-sm font-medium leading-6 text-white lg:text-lg">
                      {" "}
                      Brad Pit{" "}
                    </span>
                    <p>
                      <a
                        className="text-sm text-onyx-300 group-hover:text-blue-300"
                        href="#"
                      >
                        Software Engineer
                      </a>
                    </p>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-onyx-300 lg:text-lg">
                    Aubergine has helped me with many designs, and I couldnt
                    follow his working speed when we worked together. His
                    designs are slick, and he delivers a lot of value; he is
                    constantly iterating his designs improving.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="lg:col-span-2">
            <div className="relative h-full rounded-3xl border border-onyx-800 bg-gradient-to-tr from-onyx-950 to-onyx-700 p-4 lg:p-8">
              <div className="group relative flex h-full flex-col justify-between">
                <div className="flex flex-col gap-4 pb-6 md:flex-row lg:items-center">
                  <div className="overflow-hidden lg:p-2">
                    <img
                      alt=""
                      src="https://pbs.twimg.com/profile_images/1039477099768295424/DkFxqf2V_400x400.jpg"
                      width="56"
                      height="56"
                      decoding="async"
                      data-mining="future"
                      className="h-20 w-20 shrink-0 rounded-full object-cover grayscale"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <span className="text-sm font-medium leading-6 text-white lg:text-lg">
                      {" "}
                      Volkan Kaya{" "}
                    </span>
                    <p>
                      <a
                        className="text-sm text-onyx-300 group-hover:text-blue-300"
                        href="#"
                      >
                        Founder of Versoly.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="text-sm text-onyx-300 lg:text-lg">
                    Aubergine is a rare breed of designer &amp; developer that
                    understands business needs. He leveraged his previous
                    experience to build out a few landing pages very quickly for
                    Versoly.
                  </p>
                </div>
              </div>
            </div>
          </li>
          <li className="hidden lg:block">
            <div className="shadow-massive h-full rounded-3xl border border-onyx-800 bg-gradient-to-tr from-onyx-950 to-onyx-700 p-4 lg:p-8">
              <div className="group flex h-full flex-col justify-between">
                <div>
                  <span className="text-sm font-medium leading-6 text-white">
                    {" "}
                    Tony Lea{" "}
                  </span>
                  <p>
                    <a
                      className="text-sm text-onyx-300 group-hover:text-blue-300"
                      href="#"
                    >
                      Founder DevDojo
                    </a>
                  </p>
                </div>
                <div className="mt-12 space-y-3">
                  <p className="text-sm text-onyx-300">
                    Aubergine has a great eye for design and he is an absolute
                    pleasure to work with. I definitely plan on working with him
                    on future projects of mine. I wholeheartedly recommend him
                    to anyone seeking standout, quality work.
                  </p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
