export const Item02 = () => {
  const elements = [
    "Websites",
    "Mobile Apps",
    "Logos & branding",
    "Design systems",
    "SAAS",
    "Wireframes",
    "Stationary",
    "Pitch decks",
    "Slide decks",
    "Direct mail",
    "Infographics",
    "Brochures",
    "Signage",
    "Brand guides",
    "Social media graphics",
    "Billboards",
    "Trade show banners",
    "Email graphics",
    "Resumes",
    "Business cards",
    "Packaging",
    "Blog graphics",
    "Digital ads",
    "Icons",
  ];
  //   &amp;
  return (
    <section>
      <div className="mx-auto max-w-7xl px-8 py-12 md:px-12 lg:px-36 lg:py-24">
        <div>
          <h3 className="text-4xl text-white">
            We can do many things for you,{" "}
            <span className="text-onyx-400 md:block">
              {" "}
              but this is what we do best{" "}
            </span>
          </h3>
        </div>
        <ul className="order-y mt-12 grid grid-cols-2 gap-4 border-onyx-800 py-6 sm:grid-cols-2 md:grid-cols-4">
          {elements.map((el, i) => {
            return (
              <li key={i}>
                <p className="text-base text-onyx-300">{el}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
