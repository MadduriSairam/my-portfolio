import Projectsimg1 from "../assets/images/image.png";
import Projectsimg2 from "../assets/images/projectimg2.jpeg";
export function Mainprojects() {
  return (
    <div className="sm:grid grid-cols-2 m-[40px] gap-5  ">
      {}
      <div className="shadow-sm shadow-[#777778]  rounded-2xl">
        <div className="flex flex-col gap-1">
          <div>
            <img src={Projectsimg1} alt="project1" className=" w-[100%]" />
          </div>
          <div className="p-[20px] text-[#d6d6d6]">
            <h1 className="font-sans text-[#fafafa] text-[20px] font-bold"> Waste Food Management System (BCA Project)</h1>
            <p className="text-justify">
              A web platform to manage the donation and distribution of leftover
              food to orphanages through multi-user panels (Donor, Admin,
              Delivery, Orphanage). Enabled food posting, approval, tracking,
              delivery, and orphanage requests. Streamlined the entire process
              from donation to final delivery.
            </p>
            <p> Technologies Used: HTML, CSS, JavaScript, PHP, SQL</p>
          </div>
          
        </div>
      </div>
      <div className="shadow-sm shadow-[#777778]  rounded-2xl">
        <div className="flex flex-col gap-5">
          <div>
            <img src={Projectsimg2} alt="project1" className=" w-[100%]" />
          </div>
          <div className="p-[20px] text-[#d6d6d6]">
            <h1 className="font-sans text-[#fafafa] text-[20px] font-bold">Shoex <br/>(MCA Sem-2 Project)</h1>
            <p className="text-justify ">
              A responsive and user-friendly shoe store website for showcasing
              products with dynamic features. Developed product listing,
              filtering, and category-wise browsing, Designed a clean UI layout
              for product display,product details, and shopping cart simulation.
            </p>
            <p>Technologies Used: HTML, CSS, JavaScript, Laravel, MySQL</p>
          </div>
        </div>
      </div>
    </div>
  );
}
