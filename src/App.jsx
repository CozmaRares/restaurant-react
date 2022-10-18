import MainPage from "./pages/MainPage";

import logo from "./assets/logo.svg";

const App = () => {
  return (
    <div className="text-roboto bg-primary text-primary">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;

const Header = () => {
  const socialLinks = [
    { href: "#", icon: "github" },
    { href: "#", icon: "facebook-f" },
    { href: "#", icon: "instagram" }
  ];

  return (
    <header className="header bg-primary min-h-fit py-6 mb-[5px] text-combo z-[1] sticky top-0">
      <div className="tw--section-center h-full flex items-center justify-between flex-row">
        <img src={logo} alt="logo" className="cursor-pointer" />
        <ul className="capitalize flex items-center justify-between flex-row gap-8 text-2xl">
          <li className="cursor-pointer hover-underline">about us</li>
          <li className="cursor-pointer hover-underline">menu</li>
          <li className="cursor-pointer hover-underline">blog</li>
          <li className="cursor-pointer hover-underline">book a table</li>
        </ul>
        <Socials
          whereCalled="header"
          socialLinks={socialLinks}
          justifyContent="justify-between"
        />
      </div>
    </header>
  );
};

const Main = () => {
  return (
    <main>
      <MainPage />
    </main>
  );
};

const Footer = () => {
  const socialLinks = [
    { href: "#", icon: "github" },
    { href: "#", icon: "facebook-f" },
    { href: "#", icon: "instagram" }
  ];

  const pageLinks = [
    { text: "main page" },
    { text: "about us" },
    { text: "menu" },
    { text: "blog" },
    { text: "book a table" }
  ];

  const contacts = [
    {
      path: (
        <path
          fill="currentColor"
          d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"
        />
      ),
      text: "+1 (234) 567 89 00"
    },
    {
      path: (
        <path
          fill="currentColor"
          d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"
        />
      ),
      text: "beerboutique@fake.email.com"
    },
    {
      path: (
        <path
          fill="currentColor"
          d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"
        />
      ),
      text: "Somewhere in NY"
    },
    {
      path: (
        <path
          fill="currentColor"
          d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z"
        />
      ),
      text: "Open from 4PM to 2AM"
    }
  ];

  return (
    <footer className="tw--section-center grid grid-cols-4 gap-8 py-8">
      <div className="flex justify-between flex-col items-start">
        <img src={logo} alt="logo" className="h-[2.25rem]" />
        <p className="text-slate-300 opacity-80 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et animi est
          ab atque omnis exercitationem.
        </p>
        <Socials
          whereCalled="footer"
          socialLinks={socialLinks}
          justifyContent=""
        />
      </div>
      <div>
        <h4 className="tw--footer-heading">Navigation</h4>
        <ul className="capitalize text-slate-300 text-lg">
          {pageLinks.map(({ text }) => (
            <li
              key={text}
              className="cursor-pointer w-fit mb-2 border-b-2 border-[#00000000] transition-[border-color,color] tw--yellow-hover-text-border"
            >
              {text}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="tw--footer-heading">Contacts</h4>
        <ul>
          {contacts.map(({ path, text }) => (
            <li key={text} className="flex items-center gap-2 mb-3">
              <svg
                style={{ width: "24px", height: "24px" }}
                viewBox="0 0 24 24"
                className="text-yellow-custom"
              >
                {path}
              </svg>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="tw--footer-heading">
          <label htmlFor="footer-email">Subscribe</label>
        </h4>
        <form className="text-lg">
          <input
            className="block w-full bg-secondary p-2 pl-4 rounded-md mb-4"
            type="email"
            name="footer-email"
            id="footer-email"
            placeholder="Email address"
            required
          />
          <button className="w-full tw--button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </footer>
  );
};

const Socials = ({ whereCalled, socialLinks, justifyContent }) => {
  return (
    <ul
      className={`flex items-center ${justifyContent} flex-row text-yellow-custom gap-2`}
    >
      {socialLinks.map(({ href, icon }) => (
        <li
          key={whereCalled + icon}
          className="cursor-pointer w-[1.7em] h-[1.7em] flex items-center justify-center border border-yellow-custom p-1 transition-[color,background-color] rounded-md  hover:text-black hover:bg-yellow-custom"
        >
          <a href={href} target="_blank" rel="noopener noreferrer">
            <i className={`fa-brands fa-${icon}`}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};
