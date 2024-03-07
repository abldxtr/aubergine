export const Item07 = () => {
  return (
    <section>
      <div className="mx-auto max-w-7xl px-8 md:px-12 lg:px-36">
        <div className="grid grid-cols-1 items-center border-y border-[rgb(52_50_63)] py-12 md:grid-cols-3 lg:grid-cols-4 lg:gap-24">
          {/* <!-- text --> */}
          <div className="col-span-full lg:col-span-1">
            <p className="text-center text-xs text-[rgb(175_173_190)]">
              Some of the mazing companies we have worked with
            </p>
          </div>

          {/* <!-- logo --> */}
          <div className="mt-12 flex flex-wrap justify-between md:col-span-3 lg:mt-0">
            <img
              src="https://aubergine.lexingtonthemes.com/logos/discord.svg"
              alt="discord"
              className="h-8"
            />
            <img
              src="https://aubergine.lexingtonthemes.com/logos/zoom.svg"
              alt="discord"
              className="h-8"
            />
            <img
              src="https://aubergine.lexingtonthemes.com/logos/classpass.svg"
              alt="discord"
              className="h-8"
            />
            <img
              src="https://aubergine.lexingtonthemes.com/logos/splunge.svg"
              alt="discord"
              className="hidden h-8 sm:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
