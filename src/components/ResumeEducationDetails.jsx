import protofolio from "../apis/protofolio.json";
export function ResumeEducationDetails() {
  return (
    <div className="px-[65px] flex flex-col gap-3">
      {protofolio.EducationDetails.map((EducationDetailsmydetails) => {
        return (
          <div className="">
            <h1 className="text-[21px] font-sans text-[#fafafa]">
              {EducationDetailsmydetails.name}
            </h1>
            <span className="text-[17px] font-sans">
              Year:{EducationDetailsmydetails.year}
            </span>
            <h1 className="text-[17px] font-sans">
              Course:{EducationDetailsmydetails.course}
            </h1>
            <span className="text-[17px] font-sans">
              Cgpa:{EducationDetailsmydetails.cgpa}
            </span>
          </div>
        );
      })}
    </div>
  );
}
