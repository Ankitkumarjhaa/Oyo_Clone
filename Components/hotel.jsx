import Image from "next/image";

const Hotel = () => {
  return (
    <div className=" border-2 border-red-500 rounded-lg h-96 w-full  mb-5 p-5">
      <div className="flex">
        <Image
          src={
            "https://www.kayak.co.in/news/wp-content/uploads/sites/76/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3-1640x1312.jpg"
          }
          alt="Hotel"
          height={180}
          width={200}
          className="w-96 h-full"
        />
      </div>
    </div>
  );
};

export default Hotel;
