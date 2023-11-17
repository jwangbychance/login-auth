interface SideProfileProps {
  username?: string;
}

const SideProfile: React.FC<SideProfileProps> = ({ username }) => {
  return (
    <>
      <img
        src="src/assets/joker_take_your_time.png"
        className="border border-gray-500 p-1 shadow-md hidden md:block w-40 rounded-full overflow-hidden self-center"
      />
      <div className="font-semibold mt-2 text-[#8b3dff]">{username}</div>
      <div className="hidden md:block text-sm mt-2 font-semibold">
        Status: <span className="text-green-600">Online</span>
      </div>
    </>
  );
};

export default SideProfile;
