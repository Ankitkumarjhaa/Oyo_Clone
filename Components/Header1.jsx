import Image from "next/image";
import Block from "./Block";
import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Header1 = () => {
  const [auth, setAuth] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  const handleMenu = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="p-3 flex bg-white justify-between items-center relative top-0 left-0 right-0 z-20 shadow-md rounded-md object-cover">
      <div className="flex gap-2 items-center flex-1">
        <Image
          src={"/logo.png"}
          alt="logo"
          width={200}
          height={200}
          className="object-cover max-w-12 max-h-12"
        />
      </div>
      <div className="hidden lg:flex gap-12">
        <Block title={"Become a member"} para={"Additional 0% off on stays."} />
        <Block
          title={"OYO for business"}
          para={"Trusted by 5000 corporates."}
        />
        <Block title={"List your property"} para={"Start earning in 30 min."} />
        <Block title={"987654321"} para={"Call us to book now."} />
      </div>
      <button className="p-2 md:hidden" onClick={handleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>

      <div className="hidden md:flex md:justify-center md:items-center ">
        <Image
          src={"/demo.svg"}
          alt="demo"
          width={200}
          height={200}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-2 sm:mr-5 cursor-pointer"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
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
      {/* Dropdown for small screens */}
      {isDropdownOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border border-gray-300 mt-1">
          <div className="flex flex-col p-2">
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
          <div className="flex justify-center items-center">
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
      )}
    </nav>
  );
};

export default Header1;
