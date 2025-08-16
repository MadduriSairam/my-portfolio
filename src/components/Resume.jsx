import { MySkills } from "./MySkills";
import { ResumeEducationDetails } from "./ResumeEducationDetails";

export function Resume() {
  return (
    <div className=" p-6 ">
      <h1 className="text-[30px] font-bold font-sans text-[#fafafa]">Resume</h1>
      <p className="w-[10%] bg-[#ffdb70] h-[4px] rounded-lg mt-2 "></p>

      <div className="flex items-center  text-[30px] ">
        <div>
          <i class="fa-solid fa-graduation-cap text-[#ffdb70]"></i>
        </div>
        <div>
          <h1 className="text-[30px] font-bold p-6 font-sans text-[#fafafa]">Education</h1>
        </div>
      </div>
      <div className="">
        <div>
          <h1 className="absolute h-[33%] w-[1px] bg-[#ffdb70] ml-4"></h1>
        </div>
        <ResumeEducationDetails />
      </div>
      <div>
        <h1 className="text-[30px] font-bold pt-[30px] font-sans">My Skills</h1>
        <p className="w-[10%] bg-[#ffdb70] h-[4px] rounded-lg mt-2 "></p>
        <MySkills />
      </div>
    </div>
  );
}
