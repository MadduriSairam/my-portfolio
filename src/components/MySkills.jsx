import protofolio from "../apis/protofolio.json";
export function MySkills() {
  return (
    <div className="sm:grid grid-cols-3 gap-9 pt-[20px] justify-items-center px-[50px]">
      {protofolio.myskills.map((myskill) => {
        return (
          <div className="shadow-sm shadow-[#777778] p-[40px] rounded-2xl w-50 h-30 flex items-center w-full mt-[20px] sm:mt-0">
            <div className="sm:flex gap-5 justify-evenly ">
              <div>
                <i
                  class={`${myskill.icon} text-[30px] text-[#ffdb70] `}
                ></i>
              </div>
              <div>
                <p>
                  <a href="" className="font-sans text-[17px] font-semibold">{myskill.language}</a>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
