import useState from "react";
import axios from "axios";

const Profile = ({ user }) => {
  const logout = async (e) => {
    e.preventDefault();
    try {
      await axios.get("/api/log-out").then((res) => {
        console.log(res);
        window.location.href = "/";
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col p-3 bg-white text-sm shadow-md absolute right-0 top-10 w-[200px] border-gray-100 border">
      <div className="text-gray-600 mb-2">Logged in as:</div>
      <div className="text-[#8b3dff] font-semibold border-b-[1px] border-gray-300 pb-2">
        {user}
      </div>
      <button
        onClick={(e) => {
          logout(e);
        }}
        className="text-white bg-[#8b3dff] hover:bg-[#690af5] rounded-md px-4 md:px-8 py-1 md:py-2 text-sm mt-2"
      >
        Log out
      </button>
    </div>
  );
};

export default Profile;
