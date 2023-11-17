import useState from "react";
import { logoutUser } from "../../api/users/users";
import { IUser } from "../../interfaces/IUser";

interface ProfileProps {
  user: IUser;
}

const Profile: React.FC<ProfileProps> = ({ user }) => {
  const logout = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    try {
      logoutUser();
    } catch (err) {
      console.error(err);
    }
  };

  const memberStatus = (memberStatus: boolean) => {
    if (!memberStatus) {
      return "Guest";
    } else {
      return "Member";
    }
  };

  return (
    <div className=" z-10 flex flex-col p-3 bg-white text-sm shadow-md absolute right-0 top-10 w-[200px] border-gray-100 border">
      <div className="text-gray-600 mb-2">Logged in as:</div>
      <div className="text-[#8b3dff] font-semibold border-b-[1px] border-gray-300 pb-2">
        {user.username}
      </div>
      <div className="text-gray-600 my-2">Member status: </div>
      <div className="text-[#8b3dff] font-semibold border-b-[1px] border-gray-300 pb-2">
        {memberStatus(user.member)}
      </div>
      <button
        onClick={(e) => logout(e)}
        className="transition-all duration-300 text-white bg-[#8b3dff] hover:bg-[#690af5] rounded-md px-4 md:px-8 py-1 md:py-2 text-sm mt-2"
      >
        Log out
      </button>
    </div>
  );
};

export default Profile;
