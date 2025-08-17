import { Mapcontact } from "./Mapcontact";
import protofolio from "../apis/protofolio.json";
export function ContactUs() {
  return (
    <div className=" p-6 ">
      <h1 className="text-[30px] font-bold text-[#fafafa] font-sans">
        Contact
      </h1>
      <p className="w-[10%] bg-[#ffdb70] h-[4px] rounded-lg mt-2 "></p>
      <Mapcontact />
      <h1 className="text-[30px] font-bold text-[#fafafa] font-sans">
        Contact Form
      </h1>
      <p className="w-[10%] bg-[#ffdb70] h-[4px] rounded-lg mt-2 "></p>
      <div className="sm:grid grid-cols-2 p-[30px] gap-9">
        {protofolio.contactforminputs[0].inputs.map((inputsfetch, index) => {
          return (
            <div>
              <input
                type={inputsfetch}
                placeholder={
                  protofolio.contactforminputs[1].placeholdernames[index]
                }
                className="bg-[#1e1e1f] shadow-sm shadow-[#777778] sm:px-[100px] sm:py-[20px] rounded-2xl  placeholder:text-center placeholder:text-[#d6d6d6]"
              ></input>
            </div>
          );
        })}
        <div className="col-span-2">
          <textarea
            placeholder="Your Message"
            className="bg-[#1e1e1f] shadow-sm shadow-[#777778] sm:w-full py-[10px] px-[20px] rounded-2xl resize-none sm:h-[60px] placeholder:text-center placeholder:text-[#d6d6d6]"
          ></textarea>
        </div>
      </div>
      <div className="flex float-end shadow-sm shadow-[#777778] sm:p-[20px] rounded-2xl gap-3">
        <div>
          <i class="fa-solid fa-paper-plane text-[#ffdb70]"></i>
        </div>
        <div>
          <button className="text-[#ffdb70] font-sans font-bold">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
}
