import protofolio from "../apis/protofolio.json";
export function Basichomepages() {
  return (
    <div className="sm:grid grid-cols-3 gap-9">
      {protofolio.basichomepages.map((basichomepagesmypages) => {
        return (
          <div className="shadow-sm shadow-[#777778] p-[40px] rounded-2xl">
            <div className="sm:flex gap-5 justify-evenly flex-wrap">
              <div>
                <i
                  class={` ${basichomepagesmypages.icon} text-[30px] text-[#ffdb70]`}
                ></i>
              </div>
              <div>
                <p>
                  <a
                    href={basichomepagesmypages.url}
                    className="font-sans text-[17px] font-semibold text-[#fafafa]"
                  >
                    {basichomepagesmypages.projectTitle}
                  </a>
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
