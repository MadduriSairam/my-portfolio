import { WhatIamDoing } from "./Whatiamdoing";
export function About() {
  return (
    <div className=" p-6 ">
      <h1 className="text-[30px] font-extrabold font-sans text-[#fafafa]">About Me</h1>
      <p className="w-[10%] bg-[#ffdb70] h-[4px] rounded-lg mt-2 "></p>
      <p className="text-wrap text-justify p-[30px] text-[#d4d4d4] font-sans ">
        Enthusiastic MCA student with a strong foundation in front-end
        development, expected to graduate in January 2026. Skilled in HTML, CSS,
        Tailwind CSS, JavaScript, and React.js, with hands-on experience in
        creating responsive web applications. Proficient in design tools like
        Figma and version control using GitHub, with a basic understanding of
        programming languages such as C, Java, and PHP. Eager to apply my skills
        in a front-end developer role as a fresher, bringing a passion for
        building user-friendly interfaces and continuously learning new
        technologies.
      </p>
      <h1 className="m-[20px] text-[30px] font-extrabold font-sans text-[#fafafa]">What I'm Doing</h1>
      <WhatIamDoing />
    </div>
  );
}
