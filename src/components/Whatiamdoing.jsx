import protofolio from "../apis/protofolio.json";
export function WhatIamDoing() {
  return (
    <div className="sm:grid grid-cols-2 m-[40px] gap-5">
      {protofolio.whatiamdoingboxes.map((whatiamdoingbox) => {
        return (
          <div className="shadow-sm shadow-[#777778] bg-[#222223] p-[40px] rounded-2xl mt-[20px] sm:mt-0">
            <div className="sm:flex gap-5 items-center">
              <div>
                <li className={`${whatiamdoingbox.icon} text-[#ffdb70] text-[30px]`}></li>
              </div>
              <div>
                <h1 className="text-[20px] font-bold font-sans">{whatiamdoingbox.heading}</h1>
                <p className="text-[#d6d6d6] font-semibold text-justify">{whatiamdoingbox.para}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
