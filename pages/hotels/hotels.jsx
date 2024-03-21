import Hotel from "@/Components/hotel";
import Header1 from "../../Components/Header1";

const Hotels = () => {
  return (
    <>
      <Header1 />
      <div className=" m-5">
        <Hotel />
        <Hotel />
      </div>
    </>
  );
};

export default Hotels;
