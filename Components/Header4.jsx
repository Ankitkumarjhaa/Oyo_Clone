import Image from "next/image";

const Header4 = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center my-6 md:my-14 border-2 rounded-lg border-gray-300 px-5">
      <div className="flex items-center mb-4 sm:mb-0">
        <Image
          src={"/fire.jpg"}
          alt="fire"
          width={200}
          height={200}
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mr-5"
        />
        <div className="text-sm sm:text-xl">
          <p className="font-bold">Get access to exclusive deals</p>
          <p>Only the best deals reach your inbox</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center">
        <input
          type="email"
          className="px-4 py-2 sm:px-6 sm:py-3 rounded-lg mr-2 sm:mr-5 w-full sm:w-80 h-12 sm:h-16 outline-none border border-gray-300"
          placeholder="e.g. john@gmail.com"
        />
        <button
          type="submit"
          className="w-full sm:w-auto rounded-lg h-12 sm:h-14 bg-red-500 text-sm sm:text-xl text-white cursor-pointer mt-2 sm:mt-0"
        >
          Notify
        </button>
      </div>
    </div>
  );
};

export default Header4;
