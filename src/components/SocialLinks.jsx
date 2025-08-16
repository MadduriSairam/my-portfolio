import protofolio from "../apis/protofolio.json";
export function SocialLinks() {
  return (
    <div className="flex justify-evenly p-[10px]">
      {protofolio.socialLinks.map((socialLink) => {
        return (
          <div>
            <a href={socialLink.url}>
            <i
              class={`${socialLink.icon} cursor-pointer hover:shadow-sm hover:shadow-[#777778] hover:p-[10px] hover:rounded-2xl p-[10px] `}
            ></i>
            </a>
          </div>
        );
      })}
    </div>
  );
}
