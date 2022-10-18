import Heading from "./Heading";

const About = ({ src, alt, direction }) => {
  return (
    <div className={`flex ${direction} [&>*]:w-1/2`}>
      <div className="p-20 bg-neutral-900">
        <div className="w-[60%] mx-auto [&>p]:py-8 [&>p]:text-slate-300">
          <Heading h4="our story" h2="about beer boutique" />
          <p className="font-medium text-2xl">
            Welcome to Beer Boutique! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Facilis, sapiente.
          </p>
          <p className="text-l opacity-70">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
            deserunt totam accusantium rem quibusdam hic quod! Nihil accusantium
            reprehenderit accusamus eius, vitae dolor dolorem vel ut aperiam id
            rem sequi doloribus quis doloremque, expedita voluptatum illo,
            voluptatibus a repudiandae animi. Odio doloremque eum neque animi
            eius maxime obcaecati excepturi voluptates?
          </p>
          <button className="tw--button">Learn more</button>
        </div>
      </div>
      <img src={src} alt={alt} />
    </div>
  );
};

export default About;