export const Item03 = () => {
  const items = [
    {
      img: "https://aubergine.lexingtonthemes.com/logos/jetbrains.svg",
      date: 2023,
      name: "JetBrains ToolBox /",
      pro: "Development",
      txt: "IntelliJ IDEA is undoubtedly the top-choice IDE for software developers.",
    },
    {
      img: "https://aubergine.lexingtonthemes.com/logos/figma.svg",
      date: 2023,
      name: "Figma /",
      pro: "Development",
      txt: "Figma is an online whiteboard where everyone who builds products can collaborate.",
    },
    {
      img: "https://aubergine.lexingtonthemes.com/logos/kayako.svg",
      date: 2023,
      name: "kayako /",
      pro: "Development",
      txt: "Kayako provides a complete help desk experience with a fully customizable knowledge base.",
    },
  ];
  return (
    <section>
      <div className="mx-auto max-w-7xl px-8 py-12 md:px-12 lg:px-36 lg:py-24">
        <div>
          <h3 className="text-4xl text-white">
            Non award winning designs,
            <span className="text-onyx-400 md:block">
              {" "}
              and simply just that and that.{" "}
            </span>
          </h3>

          <div className="mt-12">
            <button className="rounded-xl border border-onyx-800 bg-onyx-900 px-6 py-3 text-sm text-onyx-300 transition duration-500 hover:text-blue-300">
              See all our work
            </button>
          </div>
        </div>
        <ul className="mt-24 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            return (
              <li key={i}>
                <div className="h-full rounded-3xl border border-onyx-800 bg-gradient-to-tr from-onyx-950 to-onyx-700 p-8">
                  <a href="#">
                    <img src={item.img} alt="" className="size-16" />
                    <div className="relative mt-24 space-y-3">
                      <span className="text-xs text-onyx-400">{item.date}</span>
                      <p className="text-sm leading-6 text-white">
                        {item.name}
                        <span className="text-onyx-300"> {item.pro}</span>
                      </p>
                      <p className="text-base text-onyx-300">{item.txt}</p>
                    </div>
                  </a>
                </div>
              </li>
            );
          })}
          {/* <li>
            <div className="h-full rounded-3xl border border-onyx-800 bg-gradient-to-tr from-onyx-950 to-onyx-700 p-8">
              <a href="http://google.com">
                <img
                  src="https://aubergine.lexingtonthemes.com/logos/figma.svg"
                  alt="figma"
                  className="size-16"
                />
                <div className="relative mt-24 space-y-3">
                  <span className="text-xs text-onyx-400">2023</span>
                  <p className="text-sm leading-6 text-white">
                    Figma / <span className="text-onyx-300"> Development</span>
                  </p>
                  <p className="text-base text-onyx-300">
                    Figma is an online whiteboard where everyone who builds
                    products can collaborate.
                  </p>
                </div>
              </a>
            </div>
          </li>
          <li>
            <div className="h-full rounded-3xl border border-onyx-800 bg-gradient-to-tr from-onyx-950 to-onyx-700 p-8">
              <a href="http://google.com">
                <img
                  src="https://aubergine.lexingtonthemes.com/logos/kayako.svg"
                  alt="kayako"
                  className="size-16"
                />
                <div className="relative mt-24 space-y-3">
                  <span className="text-xs text-onyx-400">2023</span>
                  <p className="text-sm leading-6 text-white">
                    kayako / <span className="text-onyx-300"> Development</span>
                  </p>
                  <p className="text-base text-onyx-300">
                    Kayako provides a complete help desk experience with a fully
                    customizable knowledge base.
                  </p>
                </div>
              </a>
            </div>
          </li> */}
        </ul>
      </div>
    </section>
  );
};
