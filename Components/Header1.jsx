import Image from "next/image";
import Block from "./Block";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Header1 = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const key = Cookies.get("user");
    if (key) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, []);

  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("user");
    setAuth(false);
    router.push("/");
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between border-b-2 border-gray-300 items-center px-5 py-4">
      <div className="flex items-center mb-4 sm:mb-0">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={200}
          height={200}
          className="w-16 h-16 sm:w-24 sm:h-24"
        />
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-center items-center w-full sm:w-auto">
        <div className="flex flex-wrap gap-2 sm:gap-8 mb-4 sm:mb-0">
          <Block
            title={"Become a member"}
            para={"Additional 0% off on stays."}
          />
          <Block
            title={"OYO for business"}
            para={"Trusted by 5000 corporates."}
          />
          <Block
            title={"List your property"}
            para={"Start earning in 30 min."}
          />
          <Block title={"987654321"} para={"Call us to book now."} />
        </div>
        <div className="flex  justify-center items-center">
          <Image
            src={"/demo.svg"}
            alt="demo"
            width={200}
            height={200}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-5"
          />
          {auth ? (
            <h3 className="font-bold cursor-pointer" onClick={handleLogout}>
              Logout
            </h3>
          ) : (
            <Link href={"/login"} className="font-bold">
              Login / Signup
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header1;
