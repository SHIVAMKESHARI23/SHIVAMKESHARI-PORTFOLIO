import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export const navLinks = [
  { id: "home", title: "Home" },
  { id: "about", title: "About" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "education", title: "Education" },
  { id: "contact", title: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full flex items-center py-5 fixed top-0 z-20 px-6 sm:px-16 ${scrolled ? "bg-primary/80 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <a
          href="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Shivam &nbsp;
            <span className="sm:block hidden text-[#915eff]">| Developer</span>
          </p>
        </a>

        {/* Desktop Menu */}
        <div className="hidden sm:flex flex-row items-center gap-10">
          <ul className="list-none flex flex-row gap-8">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${active === nav.title ? "text-white" : "text-[#dfd9ff]"
                  } hover:text-white text-[17px] font-medium cursor-pointer transition-colors pt-1`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div
            className="w-[28px] h-[28px] object-contain cursor-pointer flex justify-center items-center"
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? <X className="text-white" /> : <Menu className="text-white" />}
          </div>

          <div
            className={`${!toggle ? "hidden" : "flex"
              } p-6 bg-black-200 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl backdrop-blur-lg bg-black/60 shadow-2xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${active === nav.title ? "text-white" : "text-[#dfd9ff]"
                    }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
