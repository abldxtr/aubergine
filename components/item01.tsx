export const Item01 = () => {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-8 py-24 md:px-12 lg:px-36">
        {/* <!-- 1 --> */}
        <div>
          <h3 className="text-4xl text-white">
            We did reinvented the
            <span className="text-[rgb(120_116_144)] md:block">
              {" "}
              wheel and also just design{" "}
            </span>
          </h3>
        </div>
        {/* <!-- 2 --> */}
        <div className="mt-24">
          <div className="relative">
            {/* <!-- line --> */}
            <div className="-z-1 absolute left-0 right-0 top-8 hidden h-px bg-white lg:block"></div>

            <div className="relative grid grid-cols-2 gap-6 lg:grid-cols-4">
              {/* <!-- A --> */}
              <div className="border-b border-[rgb(52_50_63)] pb-4">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl border border-[rgb(52_50_63)] bg-gradient-to-tr from-[#1c1b22] to-[#4B485B] text-blue-300 lg:mb-16">
                  1
                </div>
                <div>
                  <p className="mt-12 text-xl font-medium leading-6 text-white">
                    Submit
                  </p>
                  <p className="mt-4 text-base text-[rgb(175_173_190)]">
                    Subscribe to a plan & request as many designs as you'd like.
                  </p>
                </div>
              </div>
              {/* <!-- b --> */}
              <div className="border-b border-[rgb(52_50_63)] pb-4">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl border border-[rgb(52_50_63)] bg-gradient-to-tr from-[#1c1b22] to-[#4B485B] text-blue-300 lg:mb-16">
                  2
                </div>
                <div>
                  <p className="mt-12 text-xl font-medium leading-6 text-white">
                    Refine
                  </p>
                  <p className="mt-4 text-base text-[rgb(175_173_190)]">
                    Receive your design within a few business days on average.
                  </p>
                </div>
              </div>
              {/* <!-- c --> */}
              <div className="border-b border-[rgb(52_50_63)] pb-4">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl border border-[rgb(52_50_63)] bg-gradient-to-tr from-[#1c1b22] to-[#4B485B] text-blue-300 lg:mb-16">
                  3
                </div>
                <div>
                  <p className="mt-12 text-xl font-medium leading-6 text-white">
                    Build
                  </p>
                  <p className="mt-4 text-base text-[rgb(175_173_190)]">
                    We'll revise the designs until you're 100% satisfied.
                  </p>
                </div>
              </div>
              {/* <!-- d --> */}
              <div className="border-b border-[rgb(52_50_63)] pb-4">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl border border-[rgb(52_50_63)] bg-gradient-to-tr from-[#1c1b22] to-[#4B485B] box_shadow text-blue-300 lg:mb-16">
                  4
                </div>
                <div>
                  <p className="mt-12 text-xl font-medium leading-6 text-white">
                    Enjoy
                  </p>
                  <p className="mt-4 text-base text-[rgb(175_173_190)]">
                    Enjoy your marvellous new website!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- 3 --> */}
        <div className="mt-24 rounded-[2rem] border border-onyx-800 bg-gradient-to-tr from-onyx-950 to-onyx-700 p-8 text-center ring ring-onyx-800 lg:p-20">
          <h4 className="text-white lg:text-3xl">
            "Aubergine Studio are a rare breed of designers
            <span className="md:block">
              {" "}
              and developers they understands business needs."{" "}
            </span>
          </h4>
          <p className="mt-6 text-xl uppercase italic text-onyx-300">
            Gerard Depardieu
          </p>
        </div>
        {/* <!-- 4 --> */}
        <div className="mt-24 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-x-6 lg:text-center">
          <div className="border-b border-onyx-800 pb-4">
            <p className="text-xl leading-6 text-white">Totally async</p>
            <p className="mt-4 text-base text-onyx-300">
              Don't like meetings? We don't either; so much so that we've
              outlawed them.
            </p>
          </div>
          <div className="border-b border-onyx-800 pb-4">
            <p className="text-xl leading-6 text-white">Manage with Trello</p>
            <p className="mt-4 text-base text-onyx-300">
              Manage your design board using Trello. View active, queued and
              completed tasks.
            </p>
          </div>
          <div className="border-b border-onyx-800 pb-4">
            <p className="text-xl leading-6 text-white">
              Invite unlimited team members
            </p>
            <p className="mt-4 text-base text-onyx-300">
              Invite your entire team, so anyone can submit requests and track
              their progress.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
