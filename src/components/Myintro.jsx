import protofolio from "../apis/protofolio.json";
export function Myintro() {
  return (
    <>
      {protofolio.myintro.map((myintromy) => {
        return (
          <p className="text-wrap text-justify p-[30px] text-[#d4d4d4] font-sans mt-[45px] sm:mt-0">
            {myintromy.myintroduction}
          </p>
        );
      })}
    </>
  );
}
