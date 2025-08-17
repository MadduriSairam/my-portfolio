import protofolio from "../apis/protofolio.json";
import { About } from "./About";
import { ContactUs } from "./ContactUs";
import { Projects } from "./Projects";
import { Resume } from "./Resume";
import { useState } from "react";
export function NavbarLinks() {
  const [navlink, setnavlink] = useState("about");

  const setActive = () => {
    switch (navlink) {
      case "about":
        return <About />;
      case "resume":
        return <Resume />;
      case "project":
        return <Projects />;
      case "contact":
        return <ContactUs />;
      default:
        return <About />;
    }
  };
  return (
    <>
      {setActive()}
      <ol className="">
        <div className="bg-[#282829]  p-6 sm:flex flex-wrap  gap-10 w-[50%]  justify-center rounded-tr-[20px] rounded-bl-[20px] shadow-sm shadow-[#777778] float-end  absolute top-0 right-0 text-[17px] font-sans font-semibold">
          {protofolio.navbarlinksnames[0].firstlinkname.map((link, index) => {
            return (
              <li
                key={index}
                className={`cursor-pointer ${
                  navlink === link.toLocaleLowerCase()
                    ? "text-yellow-400 font-bold"
                    : "text-white"
                }`}
                onClick={() => setnavlink(link.toLowerCase())}
              >
                {link}
              </li>
            );
          })}
        </div>
      </ol>
    </>
  );
}
