import { Mapcontact } from "./Mapcontact";

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
        <div>
          <input
            type="text"
            placeholder="Full name"
            className="bg-[#1e1e1f] shadow-sm shadow-[#777778] sm:px-[100px] sm:py-[20px] rounded-2xl  placeholder:text-center placeholder:text-[#d6d6d6]"
          ></input>
        </div>
        <div>
          <input
            type="email"
            placeholder="Email address "
            className="bg-[#1e1e1f] shadow-sm shadow-[#777778] sm:px-[100px] sm:py-[20px] rounded-2xl  placeholder:text-center placeholder:text-[#d6d6d6]"
          ></input>
        </div>
        <div className="col-span-2">
          <textarea
            placeholder="Your Message"
            className="bg-[#1e1e1f] shadow-sm shadow-[#777778] w-full py-[10px] px-[20px] rounded-2xl resize-none h-[60px] placeholder:text-center placeholder:text-[#d6d6d6]"
          ></textarea>
        </div>
      </div>
      <div className="flex float-end shadow-sm shadow-[#777778] p-[20px] rounded-2xl gap-3">
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
