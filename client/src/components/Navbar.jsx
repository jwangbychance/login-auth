import { useState, useContext } from "react";
import Signup from "./Signup";
import Login from "./Login";
import Profile from "./Profile";

const Navbar = ({ isLoggedIn }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <>
      <div className="border-b-[1px] border-gray-200 shadow-md">
        <div className="flex justify-between items-center my-5 mx-2 md:mx-40 md:my-5">
          <div className="font-bold text-md md:text-xl">
            <span className="text-[#8b3dff]">Login</span> Auth
          </div>
          {isLoggedIn ? (
            <div className="flex gap-2 md:gap-8 relative">
              <button
                onClick={() => {
                  setShowProfile((prev) => !prev);
                }}
                className="flex gap-3 text-[#8b3dff] font-semibold px-4 md:px-8 py-1 md:py-[6px] text-md"
              >
                Profile
                <div className="w-4 h-4 self-center text-gray-600">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    ></path>
                  </svg>
                </div>
              </button>
              {showProfile && <Profile user={isLoggedIn} />}
            </div>
          ) : (
            <div className="flex gap-2 md:gap-8">
              <button
                onClick={() => {
                  setShowLogin((prev) => !prev);
                }}
                className="text-white bg-[#8b3dff] hover:bg-[#690af5] rounded-md px-4 md:px-8 py-1 md:py-2 text-sm"
              >
                Login
              </button>
              <Login showLogin={showLogin} setShowLogin={setShowLogin} />
              <button
                onClick={() => {
                  setShowSignUp((prev) => !prev);
                }}
                className="text-white bg-[#8b3dff] hover:bg-[#690af5] rounded-md px-4 md:px-8 py-1 md:py-2 text-sm"
              >
                Sign up
              </button>
              <Signup showSignUp={showSignUp} setShowSignUp={setShowSignUp} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
