import PageHeader from "../components/PageHeader";
import { Spacer } from "../components/Spacer";

import img from "../assets/images/location.png";

const Booking = () => {
  return (
    <>
      <PageHeader text="book a table" />
      <Spacer />
      <Contacts />
      <Spacer />
      <Form />
      <Spacer />
    </>
  );
};

export default Booking;

const Contacts = () => {
  const contacts = [
    {
      svgPath:
        "M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z",
      h2: "Phone",
      p: "+1 (234) 567 89 00"
    },
    {
      svgPath:
        "M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z",
      h2: "Email",
      p: "beerboutique@fake.email.com"
    },
    {
      svgPath:
        "M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z",
      h2: "Working Hours",
      p: "Open from 4PM to 2AM"
    }
  ];

  return (
    <section className="tw--section-center">
      <ul className="flex items-center justify-between flex-row mb-2">
        {contacts.map(({ svgPath, h2, p }) => (
          <li className="flex items-center gap-2.5 m-3">
            <div className="flex items-center justify-center h-[4em] w-[4em] bg-secondary rounded-full gap-3.5">
              <svg viewBox="0 0 24 24" className="h-[70%] text-yellow-custom">
                <path fill="currentColor" d={svgPath} />
              </svg>
            </div>
            <div>
              <h2 className="font-medium text-xl">{h2}</h2>
              <p>{p}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

const Form = () => {
  const handleSubmit = event => {
    event.preventDefault();

    const formData = Object.fromEntries(new FormData(event.target));
    console.log(formData);

    event.target
      .querySelectorAll(":scope > input")
      .forEach(inp => (inp.value = ""));
  };

  const inputs = [
    {
      type: "text",
      name: "name",
      id: "name",
      placeholder: "Name",
      required: true
    },
    {
      type: "text",
      name: "phone",
      id: "phone",
      placeholder: "Phone number",
      pattern: "^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$", //https://ihateregex.io/expr/phone/
      title: "Must be a valid phone number",
      required: true
    },
    {
      type: "text",
      id: "guests",
      name: "guests",
      placeholder: "Number of Guests",
      pattern: "^[1234]$",
      title: "Must be between 1 and 4",
      required: true
    },
    {
      type: "date",
      id: "date",
      name: "date",
      required: true,
      style: {
        cursor: "pointer"
      }
    }
  ];

  return (
    <section className="tw--section-center grid grid-cols-[auto,1fr] gap-12 [&>*]:rounded-lg">
      <img src={img} alt="location" className="object-cover" />
      <form
        onSubmit={handleSubmit}
        className="bg-card flex items-center justify-evenly flex-col text-lg [&>*]:w-[60%]"
      >
        {inputs.map(props => (
          <Input key={props.id} {...props} />
        ))}
        <button type="submit" className="tw--button">
          Reserve a table
        </button>
      </form>
    </section>
  );
};

const Input = props => (
  <input
    {...props}
    className="bg-black block p-4 outline-none rounded-md border border-white border-opacity-0 focus:border-opacity-100 transition-[border-color]"
  />
);
