import protofolio from "../apis/protofolio.json";
export function Mainprojects() {
  return (
    <div className="sm:grid grid-cols-2 m-[40px] gap-5  ">
      {protofolio.mainprojects.map((mainprojectsmain) => {
        return (
          <div className="shadow-sm shadow-[#777778]  rounded-2xl ">
            <div className="flex flex-col gap-1 ">
              <div>
                <img
                  src={mainprojectsmain.projectimg1}
                  alt="project1"
                  className=" w-[100%] h-[100%]"
                />
              </div>
              <div className="p-[20px] text-[#d6d6d6]">
                <h1 className="font-sans text-[#fafafa] text-[20px] font-bold">
                  {mainprojectsmain.projecttitle}
                </h1>
                <p className="text-justify">
                  {mainprojectsmain.projectDescription}
                </p>
                <br></br>
                <p className="font-bold">
                  Technologies Used:{mainprojectsmain.technologiesUsed}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
