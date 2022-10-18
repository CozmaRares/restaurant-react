import About from "../components/About";
import Heading from "../components/Heading";

import draftBeer from "../assets/draft-beer.mp4";

import beerGlass from "../assets/images/beer-glass.jpg";
import hamburger from "../assets/images/hamburger.jpg";
import happyHour from "../assets/images/happy-hour.jpg";

import beerOnTap from "../assets/svg/icons/beer-on-tap.svg";
import bottledBeer from "../assets/svg/icons/bottled-beer.svg";
import cocktail from "../assets/svg/icons/cocktail.svg";
import snacks from "../assets/svg/icons/snack.svg";

import bar from "../assets/images/bar.jpg";

import pfp from "../assets/images/pfp.jpg";

import corona from "../assets/svg/brands/corona.svg";
import miller from "../assets/svg/brands/miller.svg";
import hoegaarden from "../assets/svg/brands/hoegaarden.svg";
import carlsberg from "../assets/svg/brands/carlsberg.svg";
import budweiser from "../assets/svg/brands/budweiser.svg";
import heineken from "../assets/svg/brands/heineken.svg";

const MainPage = () => {
  return (
    <>
      <Hero />
      <Menu />
      <About src={bar} direction="flex-row" />
      <Testimonials />
      <div className="pb-24"></div>
      <Brands />
    </>
  );
};

export default MainPage;

const Hero = () => {
  return (
    <section className="w-full fill-below-header grid isolate z-0 overflow-hidden relative">
      <video
        className="col-span-full row-span-full object-cover w-full h-full -z-[1]"
        autoPlay
        muted
        loop
      >
        <source src={draftBeer} type="video/mp4" />
      </video>
      <div className="col-span-full row-span-full bg-primary opacity-60 z-0"></div>
      <div className="col-span-full row-span-full text-4xl absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 z-[1] text-center">
        <h1 className="text-teko text-7xl text-yellow-custom uppercase font-bold">
          beer boutique
        </h1>
        <h5 className="mt-2 mb-3 font-medium text-4xl">
          The <span className="text-yellow-custom italic">best beer</span> comes{" "}
          <br /> with the{" "}
          <span className="text-yellow-custom italic">best foods</span>
        </h5>
        <p className="text-combo italic font-base">Enjoy your beer!</p>
      </div>
    </section>
  );
};

const Menu = () => {
  const menuItems = [
    { img: beerGlass, h3: "BEER MENU" },
    { img: happyHour, h3: "" },
    { img: hamburger, h3: "FOOD MENU" }
  ];

  const offerItems = [
    { img: bottledBeer, h3: "BOTTLED BEER" },
    { img: snacks, h3: "SNACKS" },
    { img: beerOnTap, h3: "BEER ON TAP" },
    { img: cocktail, h3: "COCKTAILS" }
  ];

  return (
    <section className="tw--section-center mt-12 mb-24 [&>*]:w-full [&>*]:mb-24">
      <div className="text-center">
        <h2 className="text-combo text-5xl text-yellow-custom">MENU</h2>
        <h4 className="text-lg">Explore our food and drink offers</h4>
      </div>
      <ul className="flex items-center justify-between">
        {menuItems.map(({ img, h3 }) => (
          <li
            key={"menu" + h3}
            className="w-[calc((100%-5rem)/3)] relative text text-shadow isolate group"
          >
            <div className="absolute top-[30%] left-1/2 -translate-x-1/2 z-[1] w-3/4 text-lg opacity-0 transition-opacity group-hover:opacity-100">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
                dolorum illo quo, maxime ea minus et beatae recusandae, in nihil
                quae totam repellendus, quam deserunt accusamus odit delectus
                nostrum cumque! Pariatur, repellendus? Consequatur libero
                excepturi veritatis, inventore dignissimos vel perspiciatis?
              </p>
            </div>
            <img
              src={img}
              alt={img.replaceAll("-", " ")}
              className="w-full aspect-[1/1.3] object-cover rounded-2xl brightness-75 transition-[filter] z-0 group-hover:brightness-[35%]"
            />
            <h3 className="absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2] text-teko text-5xl transition-[color] group-hover:text-neutral-300">
              {h3}
            </h3>
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-[1fr,4fr] gap-20">
        <div>
          <Heading h4="what we offer" h2="cold beer and tasty snacks" />
          <button className="w-[60%] min-w-fit tw--button mt-3">
            Learn More
          </button>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          {offerItems.map(({ img, h3 }) => (
            <div className="flex">
              <img src={img} alt="icon" className="w-[100px] aspect-square" />
              <div>
                <h3 className="text-teko font-medium text-2xl text-yellow-custom">
                  {h3}
                </h3>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Temporibus, eligendi!
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const dates = ["June 29, 2022", "October 18, 2022"];

  return (
    <section className="tw--section-center text-center my-20">
      <Heading h4="testimonials" h2="what our clients say about us" />
      <div className="p-5"></div>
      <div className="flex items-center justify-between gap-8">
        {dates.map(date => (
          <div className="bg-card p-8 rounded-xl [&>*]:mx-auto">
            <img
              src={pfp}
              alt="profile picture"
              className="w-[150px] h-[150px] rounded-full"
            />
            <h3 className="my-2 text-3xl text-teko">John Doe</h3>
            <p className="w-4/5 text-slate-300 text-base my-2">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              blanditiis nisi ex harum totam, aliquam quaerat temporibus
              molestias? Eveniet, iste alias ea nulla, vitae magnam impedit
              ratione quam vero earum ad veritatis incidunt optio ex obcaecati
              assumenda officiis dicta! Quam amet ipsum at reiciendis, ullam
              voluptate eos nam porro voluptas?
            </p>
            <p className="text-yellow-custom font-semibold text-lg text-combo italic">
              {date}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Brands = () => {
  const brands = [corona, miller, hoegaarden, carlsberg, budweiser, heineken];

  return (
    <section className="bg-yellow-custom h-[15vh] flex items-center justify-center py-4 gap-2">
      {brands.map(brand => (
        <div className="w-[250px] h-full bg-neutral-900 relative rounded-md bg-opacity-20">
          <img
            src={brand}
            alt="beer brand"
            className="w-3/4 h-3/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-fill"
          />
        </div>
      ))}
    </section>
  );
};
