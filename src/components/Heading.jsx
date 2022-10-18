const Heading = ({ h4, h2 }) => {
  return (
    <>
      <h4 className="capitalize text-xl text-combo text-yellow-custom">{h4}</h4>
      <h2 className="uppercase mt-2 text-teko text-5xl font-medium">{h2}</h2>
    </>
  );
};

export default Heading;
