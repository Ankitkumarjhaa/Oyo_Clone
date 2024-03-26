import Image from "next/image";
import Link from "next/link";

const Hotel = ({ e }) => {
  return (
    <div className="border-2 border-red-500 rounded-lg w-full mb-5 p-5">
      <div className="flex flex-col md:flex-row">
        <div className="flex justify-center md:justify-start mb-3 md:mb-0 md:mr-3">
          <Image
            src={e?.banner}
            alt="hotel"
            width={200}
            height={200}
            className="w-48 md:w-96 h-48 md:h-60 object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col md:justify-between md:ml-3">
          <h2 className="font-bold text-2xl md:text-3xl line-clamp-1">
            {e?.name}
          </h2>
          <p className="text-justify my-3 md:my-5 text-base md:text-lg line-clamp-3">
            {e?.description}
          </p>
          <div className="text-lg md:text-xl my-3 md:my-5">
            <span className="font-bold">Facilities : </span>
            <ul className="flex flex-wrap">
              {e
                ? e.facilities?.map((ele) => {
                    return (
                      <li
                        key={ele.name}
                        className="mr-4 mb-3 flex items-center"
                      >
                        <span>
                          <Image
                            src={ele.img}
                            width={32}
                            height={32}
                            className="w-8 h-8 rounded-full"
                          />
                        </span>
                        <span className="ml-2">{ele.name}</span>
                      </li>
                    );
                  })
                : ""}
            </ul>
          </div>
          <div className="flex items-center">
            <button className="w-full md:w-60 h-12 md:h-14 rounded-lg bg-blue-400 text-base md:text-lg">
              Price : &#8377; {e?.price}
            </button>
            <Link
              href={`/hotels/${e?._id}`}
              className="text-base md:text-xl font-bold text-red-600 ml-3 md:ml-10 mt-3 md:mt-0"
            >
              See Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
