import Head from "next/head";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, setLogin] = useState(false);

  const router = useRouter();

  const handleSignup = async () => {
    const res = await axios.post(`/api/user/register`, {
      name,
      email,
      password,
    });
    if (res?.data) {
      Cookies.set("user", res.data.token, { expires: 7 });
      alert(res.data.msg);
      router.back();
    }
  };

  const handleToggle = () => {
    setLogin(!login);
  };

  const handleLogin = async () => {
    const res = await axios.post(`/api/user/login`, {
      email,
      password,
    });
    if (res?.data) {
      Cookies.set("user", res.data.token, { expires: 7 });
      alert(res.data.msg);
      router.back();
    }
  };

  return (
    <div>
      <Head>
        <title>OYO - Login !</title>
      </Head>
      <div className="flex flex-col justify-center items-center relative bg-login-background bg-no-repeat bg-cover opacity-85 min-h-screen">
        <div className="max-w-screen-md mx-auto px-4">
          <div className="flex flex-col justify-center items-center text-white mt-10">
            <h2 className="text-4xl sm:text-5xl font-bold mb-2">OYO</h2>
            <p className="text-lg sm:text-2xl font-bold text-center">
              Hotels and homes across 800 cities, 24+ countries
            </p>
          </div>
          <div className="text-white mt-10">
            <p className="text-3xl sm:text-5xl font-bold text-center">
              There’s a smarter way to OYO around
            </p>
            <p className="text-lg sm:text-2xl mt-5 text-center">
              Sign up with your phone number and get exclusive access to
              discounts and savings on OYO stays and with our many travel
              partners.
            </p>
          </div>
        </div>
        <div className="max-w-screen-md mx-auto mt-10 w-full bg-slate-50 border border-gray-300 rounded-lg overflow-hidden">
          <p className="h-10 flex items-center px-10 bg-gradient-to-r from-red-300 to bg-red-600 text-lg font-bold text-white">
            Sign up & Get ₹500 OYO Money
          </p>
          <div className="px-10 py-8">
            <h3 className="text-3xl sm:text-5xl font-bold my-5 text-center">
              Login / Signup
            </h3>
            <p className="text-lg sm:text-xl font-bold mb-1 text-center">
              Please enter your email and password to continue
            </p>
            {!login && (
              <input
                type="text"
                placeholder="Enter your name..."
                className="outline-none border my-3 border-black px-3 py-1 w-full"
                onChange={(e) => setName(e.target.value)}
              />
            )}
            <input
              type="email"
              placeholder="Enter your email..."
              className="outline-none border my-3 border-black px-3 py-1 w-full"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter your password..."
              className="outline-none border my-3 border-black px-3 py-1 w-full"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg"
              onClick={login ? handleLogin : handleSignup}
            >
              {login ? "Login" : "Sign Up"}
            </button>
            <p className="text-lg sm:text-xl mt-4 text-center">
              {login ? "Don't have an account?" : "Already have an account?"}{" "}
              <span
                className="text-red-600 font-bold cursor-pointer"
                onClick={handleToggle}
              >
                {login ? "Sign Up" : "Login"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
