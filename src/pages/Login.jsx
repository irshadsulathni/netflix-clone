import { useState } from "react";
import logo from "../assets/logo.png";

function Login() {
  const [signState, setSignState] = useState("Sign In");

  return (
    <div className="relative w-full h-screen bg-[url('/background_banner.jpg')] bg-cover bg-center flex items-center justify-center">
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Netflix Logo */}
      <div className="absolute top-6 left-6">
        <img src={logo} alt="Netflix Logo" className="w-[150px]" />
      </div>

      {/* Auth Box */}
      <div className="relative z-10 w-[450px] bg-black/75 p-10 rounded-md">
        <h1 className="text-3xl font-semibold text-white mb-6">{signState}</h1>

        <form className="flex flex-col space-y-4">
          {/* Show Name Input Only for "Sign Up" */}
          {signState === "Sign Up" && (
            <input
              type="text"
              placeholder="Your Name"
              className="w-full h-[50px] bg-[#333] text-white px-4 rounded-md outline-none focus:bg-[#444] transition"
            />
          )}

          <input
            type="email"
            placeholder="Enter your Email"
            className="w-full h-[50px] bg-[#333] text-white px-4 rounded-md outline-none focus:bg-[#444] transition"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full h-[50px] bg-[#333] text-white px-4 rounded-md outline-none focus:bg-[#444] transition"
          />

          <button className="w-full h-[50px] bg-red-600 text-white font-semibold rounded-md mt-4 hover:bg-red-700 transition">
            {signState}
          </button>

          <div className="flex justify-between text-sm text-gray-400">
            <div className="flex items-center">
              <input type="checkbox" id="rememberMe" className="mr-2" />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
            <p className="hover:underline cursor-pointer">Need Help?</p>
          </div>
        </form>

        {/* Toggle Between Sign In & Sign Up */}
        <p className="text-gray-400 mt-6 text-sm">
          {signState === "Sign In"
            ? "New to Netflix?"
            : "Already have an account?"}{" "}
          <span
            className="text-white hover:underline cursor-pointer"
            onClick={() => setSignState(signState === "Sign In" ? "Sign Up" : "Sign In")}
          >
            {signState === "Sign In" ? "Sign Up" : "Sign In"}
          </span>
        </p>

        <p className="text-gray-400 text-xs mt-4">
          This page is protected by Google reCAPTCHA to ensure you&apos;re not a bot.{" "}
          <span className="text-blue-500 hover:underline cursor-pointer">
            Learn more
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
