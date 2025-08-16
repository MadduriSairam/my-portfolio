import { Basichomepages } from "./Basichomepages";
import { Mainprojects } from "./Mainprojects";
export function Projects() {
  return (
    <div className=" p-6 ">
      <h1 className="text-[30px] font-bold text-[#fafafa] font-sans">Projects</h1>
      <p className="w-[10%] bg-[#ffdb70] h-[4px] rounded-lg mt-2 "></p>

      <Mainprojects />
      <h1 className="text-[30px] font-bold text-[#fafafa] font-sans">Basic Home Page Development</h1>
      <p className="w-[10%] bg-[#ffdb70] h-[4px] rounded-lg mt-2 "></p>
      <p className="my-[20px] text-[#d6d6d6]">
        Developed a series of basic web pages to demonstrate front-end
        development skills and web design principles
      </p>
      <Basichomepages />
    </div>
  );
}
