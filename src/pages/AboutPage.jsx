import About from "../components/About";
import PageHeader from "../components/PageHeader";
import Heading from "../components/Heading";

import img from "../assets/images/group.jpg";
import pfp from "../assets/images/pfp.jpg";
import beer from "../assets/svg/icons/beer-mug.svg";

const AboutPage = () => {
  return (
    <>
      <PageHeader text="about beer boutique" />
      <About
        src={img}
        alt="group photo"
        direction="flex-row-reverse"
        hideButton
      />
      <Staff />
    </>
  );
};

const Staff = () => {
  const positions = ["Beer Master", "Chef", "Manager"];

  return (
    <section className="tw--section-center text-center my-20">
      <div className="mb-8">
        <Heading subtitle="our professional team" title="meet our team" />
        <p>Learn more about our brewers, bartenders and chefs.</p>
      </div>
      <div className="flex items-center justify-between gap-12">
        {positions.map(position => (
          <div key={`staff-${position}`} className="staff-card">
            <img
              src={pfp}
              alt="picture"
              className="w-full object-cover aspect-[0.85] rounded-xl mb-2"
            />
            <h2 className="font-teko text-3xl">John Doe</h2>
            <h3 className="text-yellow-custom text-lg">{position}</h3>
            <p className="text-secondary">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Consequatur eum voluptates blanditiis architecto nobis facere modi
              corrupti optio. Et, quas!
            </p>
          </div>
        ))}
      </div>
      <div className="text-left bg-yellow-custom text-black py-10 px-14 my-24 relative">
        <h1 className="text-teko font-semibold text-6xl">WE ARE HIRING!</h1>
        <p className="font-medium text-lg italic">
          We are always looking for communicable waiters <br />
          and professional bartenders.
        </p>
        <a
          href="#"
          className="absolute right-8 top-1/2 -translate-y-1/2 text-lg font-bold border-b-2 border-black -mb-[2px]"
        >
          JOIN OUR TEAM
        </a>
        <img
          style={{
            transform: "translate(-50%, -50%) rotateZ(45deg) rotateY(180deg)"
          }}
          src={beer}
          className="h-4/5 opacity-50 absolute top-1/2 left-1/4"
        />
      </div>
    </section>
  );
};

export default AboutPage;
