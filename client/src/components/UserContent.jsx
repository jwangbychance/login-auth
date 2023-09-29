import React from "react";
import MessageBox from "./MessageBox";

const UserContent = ({ user }) => {
  return (
    <div className="mt-5 px-5 w-full h-full">
      <div className="font-semibold mt-2">
        Welcome back <span className="text-[#8b3dff]">{user}</span>! &#128526;
      </div>
      <div className="flex flex-col mt-5">
        <MessageBox />
      </div>
    </div>
  );
};

export default UserContent;
