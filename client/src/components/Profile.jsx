import useState from "react";

const Profile = ({ user }) => {
  return (
    <div className="flex flex-col p-3 bg-white text-sm shadow-md absolute top-10 w-full">
      <div className="text-gray-600 mb-2">Logged in as:</div>
      <div className="text-[#8b3dff] font-semibold border-b-[1px] border-gray-300 pb-2">
        {user}
      </div>
      <button
        onClick={() => {
          setShowLogin((prev) => !prev);
        }}
        className="text-white bg-[#8b3dff] hover:bg-[#690af5] rounded-md px-4 md:px-8 py-1 md:py-2 text-sm mt-2"
      >
        Log out
      </button>
    </div>
  );
};

export default Profile;
