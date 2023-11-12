import React, { useState } from "react";
import MessageBox from "./MessageBox";
import { IUser } from "../interfaces/IUser";
import CreateMessage from "./CreateMessage";
import SideProfile from "./SideProfile";

interface UserContentProps {
  user: IUser;
}

const UserContent: React.FC<UserContentProps> = ({ user }) => {
  const [showCreateMessage, setShowCreateMessage] = useState(false);

  return (
    <div className="flex mt-5 px-5 w-full h-full overflow-y-auto">
      <div className="w-full">
        <div className="font-semibold mt-2 flex items-center justify-between w-8/12">
          <div>
            Welcome back <span className="text-[#8b3dff]">{user.username}</span>
            ! &#128526;
          </div>
          {user.member && (
            <button
              className="transition-all duration-300 font-semibold text-white bg-[#8b3dff] hover:bg-[#690af5] rounded-md px-4 py-1 md:py-2 text-xs md:text-sm"
              onClick={() => {
                setShowCreateMessage((prev) => !prev);
              }}
            >
              Create a message!
            </button>
          )}
          {showCreateMessage && (
            <CreateMessage
              showCreateMessage={showCreateMessage}
              setShowCreateMessage={setShowCreateMessage}
              username={user.username}
            />
          )}
        </div>
        {!user.member && (
          <div className="mt-2 text-sm text-gray-600">
            Become a member to unlock these messages!
          </div>
        )}
        <div className="flex flex-col mt-5">
          <MessageBox memberStatus={user.member} />
        </div>
      </div>
      <div className="sticky top-0 min-w-[300px] hidden md:flex ml-auto md:border h-fit border-gray-200 rounded-md p-5 w-3/12 shadow-md md:flex-col justify-center relative">
        <SideProfile username={user.username} />
      </div>
    </div>
  );
};

export default UserContent;
