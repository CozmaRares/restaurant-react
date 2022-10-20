const Heading = ({ subtitle, title }) => {
  return (
    <>
      <h4 className="capitalize text-xl font-combo text-yellow-custom">
        {subtitle}
      </h4>
      <h2 className="uppercase mt-2 font-teko text-5xl font-medium">{title}</h2>
    </>
  );
};

export default Heading;
