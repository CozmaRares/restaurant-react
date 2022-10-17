import logo from "./assets/logo.svg";

function App() {
  return (
    <div className="tw--roboto bg-black text-white">
      <Header />
      {/* <Footer /> */}
    </div>
  );
}

const Socials = ({ socialLinks, justifyContent }) => {
  return (
    <ul
      className={`flex items-center ${justifyContent} flex-row tw--yellow-text gap-2`}
    >
      {socialLinks.map(({ href, icon }) => (
        <li className="cursor-pointer w-[1.7em] aspect-square flex items-center justify-center border tw--yellow-border p-1 transition rounded-[5px] hover:text-black hover:tw--yellow-bg">
          <a href={href} target="_blank" rel="noopener noreferrer">
            <i className={`fa-brands fa-${icon}`}></i>
          </a>
        </li>
      ))}
    </ul>
  );
};

const Header = () => {
  const socialLinks = [
    { href: "#", icon: "github" },
    { href: "#", icon: "facebook-f" },
    { href: "#", icon: "instagram" }
  ];

  return (
    <header className="bg-black min-h-fit h-[10vh] py-6 mb-[5px] tw--combo z-[1] sticky top-0">
      <div className="tw--section-center h-full flex items-center justify-between flex-row">
        <img src={logo} alt="logo" className="cursor-pointer" />
        <ul className="capitalize flex items-center justify-between flex-row gap-8 text-2xl">
          <li className="cursor-pointer hover-underline">about us</li>
          <li className="cursor-pointer hover-underline">menu</li>
          <li className="cursor-pointer hover-underline">blog</li>
          <li className="cursor-pointer hover-underline">book a table</li>
        </ul>
        <Socials socialLinks={socialLinks} justifyContent="justify-between" />
      </div>
    </header>
  );
};

export default App;
