import { Myintro } from "./Myintro";
import { WhatIamDoing } from "./Whatiamdoing";
export function About() {
  return (
    <div className="p-6 mt-[20px] sm:mt-0">
      <h1 className="text-[30px] font-extrabold font-sans text-[#fafafa]">
        About Me
      </h1>
      <p className="w-[10%] bg-[#ffdb70] h-[4px] rounded-lg mt-2 "></p>
      <Myintro />
      <h1 className="m-[20px] text-[30px] font-extrabold font-sans text-[#fafafa]">
        What I'm Doing
      </h1>
      <WhatIamDoing />
    </div>
  );
}
