import { useState, useContext } from "react";
import Signup from "./Signup";
import Login from "./Login/Login";
import Profile from "./Profile";
import { IUser } from "../interfaces/IUser";
import MemberCard from "./MemberCard";

interface NavbarProps {
  user?: IUser;
}

const Navbar: React.FC<NavbarProps> = ({ user }) => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showMemberCard, setShowMemberCard] = useState(false);

  return (
    <>
      <div className="border-b-[1px] border-gray-200 shadow-md">
        <div className="flex justify-between items-center my-5 mx-2 md:mx-40 md:my-5">
          <div className="font-bold text-md md:text-xl">
            <span className="text-[#8b3dff]">Login</span> Auth
          </div>
          {user?.username ? (
            <div className="flex relative items-center">
              {!user?.member && (
                <button
                  className="transition-all duration-300 font-semibold text-white bg-[#8b3dff] hover:bg-[#690af5] rounded-md px-4 py-1 md:py-2 text-xs md:text-sm"
                  onClick={() => {
                    setShowMemberCard((prev) => !prev);
                  }}
                >
                  Become a member!
                </button>
              )}
              {showMemberCard && <MemberCard username={user.username} />}
              <button
                onClick={() => {
                  setShowProfile((prev) => !prev);
                }}
                className="flex gap-3 border-[#8b3dff] font-semibold px-4 md:px-8 py-1 md:py-[6px] text-md"
              >
                <div className="w-6 h-6 text-[#8b3dff]">
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
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                Profile
                <div className="w-4 h-4 text-gray-600 self-center">
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
              {showProfile && <Profile user={user} />}
            </div>
          ) : (
            <div className="flex gap-2 md:gap-8">
              <button
                onClick={() => {
                  setShowSignUp((prev) => !prev);
                }}
                className="font-semibold transition-all duration-300 text-black bg-[#40576D12] hover:bg-[#394C6026] rounded-md px-4 md:px-8 py-1 md:py-2 text-sm"
              >
                Sign up
              </button>
              <Signup showSignUp={showSignUp} setShowSignUp={setShowSignUp} />
              <button
                onClick={() => {
                  setShowLogin((prev) => !prev);
                }}
                className="font-semibold transition-all duration-300 text-white bg-[#8b3dff] hover:bg-[#690af5] rounded-md px-4 md:px-8 py-1 md:py-2 text-sm"
              >
                Login
              </button>
              <Login showLogin={showLogin} setShowLogin={setShowLogin} />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
