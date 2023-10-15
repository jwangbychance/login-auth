import React from "react";
import MessageBox from "./MessageBox";

interface UserContentProps {
  user: string;
}

const UserContent: React.FC<UserContentProps> = ({ user }) => {
  return (
    <div className="flex mt-5 px-5 w-full h-full">
      <div className="w-full">
        <div className="font-semibold mt-2">
          Welcome back <span className="text-[#8b3dff]">{user}</span>! &#128526;
        </div>
        <div className="flex flex-col mt-5">
          <MessageBox />
        </div>
      </div>
      <div className="hidden md:flex ml-auto md:border h-fit border-gray-200 rounded-md p-5 w-3/12 md:flex-col justify-center">
        <img
          src="src/assets/joker_take_your_time.png"
          className="hidden md:block w-40 rounded-full overflow-hidden self-center"
        />
        <div className="hidden md:block text-sm mt-5 font-semibold">
          Status: <span className="text-green-600">Online</span>
        </div>
      </div>
    </div>
  );
};

export default UserContent;
