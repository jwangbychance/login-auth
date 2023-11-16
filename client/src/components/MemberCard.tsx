import { useEffect, useState } from "react";
import { joinMemberSociety } from "../api/users/users";

interface MemberCardProps {
  username: string;
}

const MemberCard: React.FC<MemberCardProps> = ({ username }) => {
  const [memberKey, setMemberKey] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const becomeMember = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    try {
      const { status } = await joinMemberSociety(username, memberKey);
      if (status === 200) {
        window.location.href = "/";
      }
    } catch (err: any) {
      if (err.response.status === 403) {
        setErrMessage(
          "Incorrect member key. Please enter the correct member key."
        );
      } else {
        console.error(err);
      }
    }
  };

  return (
    <div className="z-10 flex flex-col p-3 bg-white text-sm shadow-md absolute -left-5 top-10 w-[200px] border-gray-100 border">
      <div className="mt-2 flex flex-col gap-2">
        <label className="text-gray-600">Enter secret member key:</label>
        <input
          placeholder="Member key"
          className="text-[13px] border-[1px] border-gray-300 p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8b3dff] focus-visible:ring-offset-2"
          name="memberKey"
          type="password"
          required
          value={memberKey}
          onChange={(e) => setMemberKey(e.target.value)}
        />
      </div>
      <button
        onClick={(e) => becomeMember(e)}
        className="text-white transition-all duration-300 bg-[#8b3dff] hover:bg-[#690af5] rounded-md px-4 md:px-8 py-1 md:py-2 text-sm mt-2"
      >
        Join the society!
      </button>
      {errMessage && (
        <div className="text-xs text-red-500 mt-3">{errMessage}</div>
      )}
    </div>
  );
};

export default MemberCard;
