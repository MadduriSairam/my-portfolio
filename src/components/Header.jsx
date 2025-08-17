import { useState } from "react";
import protofolio from "../apis/protofolio.json";
import { ContactSection } from "./ContactSection";
import { SocialLinks } from "./SocialLinks";
import { NavbarLinks } from "./NavbarLinks";
export function Header() {
  return (
    <div className="sm:grid grid-cols-[25%_auto] h-auto sm:m-[60px] m-[10px]  ">
      <div className="bg-[#1e1e1f] shadow-sm shadow-[#777778] rounded-2xl">
        <div className="p-[40px] flex flex-col">
          <div className="text-center flex flex-col gap-4">
            {protofolio.mydetails.map((myimgdetails) => {
              return (
                <>
                  <img
                    src={myimgdetails["my-img"]}
                    alt={myimgdetails.imgid}
                    className="mx-auto bg-[#353536] rounded-2xl "
                  />
                  <h1 className="text-[30px] font-bold font-sans text-[#fafafa]">
                    {myimgdetails.myname}
                  </h1>
                  <p className="bg-[#2b2b2c] p-[6px] rounded-2xl text-[15px] font-semibold text-[#e2e2e2]">
                    {myimgdetails.myrole}
                  </p>
                </>
              );
            })}
          </div>
          <hr className="my-[30px] text-[#777778]"></hr>
          <div className="flex flex-col gap-8">
            <ContactSection />
            <SocialLinks />
          </div>
        </div>
      </div>
      <div className="bg-[#1e1e1f] mx-8 shadow-sm shadow-[#777778] min-h-screen h-[100%] w-[100%]  rounded-2xl relative">
        <NavbarLinks />
      </div>
    </div>
  );
}
