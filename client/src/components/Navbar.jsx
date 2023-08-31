import { useState, useContext } from "react";
import Signup from "./Signup";
import Login from "./Login";

const Navbar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <>
      <div className="border-b-[1px] border-gray-200 shadow-md">
        <div className="flex justify-between items-center my-5 mx-2 md:mx-40 md:my-5">
          <div className="font-bold text-md md:text-xl">
            <span className="text-[#8b3dff]">Login</span> Auth
          </div>
          <div className="flex gap-2 md:gap-8">
            <button
              onClick={() => {
                setShowLogin((prev) => !prev);
              }}
              className="text-white bg-[#8b3dff] hover:bg-[#690af5] rounded-md px-4 md:px-8 py-1 md:py-2 text-sm"
            >
              Login
            </button>
            <button
              onClick={() => {
                setShowSignUp((prev) => !prev);
              }}
              className="text-white bg-[#8b3dff] hover:bg-[#690af5] rounded-md px-4 md:px-8 py-1 md:py-2 text-sm"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
      {showSignUp && (
        <Signup showSignUp={showSignUp} setShowSignUp={setShowSignUp} />
      )}
      {showLogin && <Login showLogin={showLogin} setShowLogin={setShowLogin} />}
    </>
  );
};

export default Navbar;
