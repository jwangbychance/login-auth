import React from "react";
import messages from "../data/messages";

const MessageContent = ({ username, content }) => {
  return (
    <div className="my-3 border border-gray-200 md:w-5/12 rounded-md p-3">
      <div className="font-semibold text-[#8b3dff]">{username}</div>
      <div className="text-sm mt-2">{content}</div>
    </div>
  );
};

const MessageBox = () => {
  return (
    <>
      {messages.map(({ id, username, content }) => (
        <div key={id}>
          <MessageContent username={username} content={content} />
        </div>
      ))}
    </>
  );
};

export default MessageBox;
