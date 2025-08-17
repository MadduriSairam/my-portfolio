import protofolio from "../apis/protofolio.json";
export function ContactSection() {
  return (
    <div className="flex flex-col gap-5">
      {protofolio.contactInfo.map((myProtofolioContacts) => {
        return (
          <div
            className="flex justify-evenly font-sans"
            title={myProtofolioContacts.emailtitle}
          >
            <div>
              <i
                class={`${myProtofolioContacts.icon} self-center  shadow-sm shadow-[#777778] p-[15px] rounded-2xl text-[#ffdb70]`}
              ></i>
            </div>
            <div>
              <h6 className="text-[#777778] font-medium">
                {myProtofolioContacts.type}
              </h6>
              <h1 className="font-semibold text-[#fafafa]">
                {myProtofolioContacts.value}
              </h1>
            </div>
          </div>
        );
      })}
    </div>
  );
}
