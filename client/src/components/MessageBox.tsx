import React from "react";
import messages from "../data/messages";

interface MessageBoxProps {
  memberStatus: boolean;
}

interface MessageContentProps {
  username: string;
  content: string;
  memberStatus: boolean;
}

const MessageContent: React.FC<MessageContentProps> = ({
  username,
  content,
  memberStatus,
}) => {
  return (
    <>
      {memberStatus ? (
        <div className="my-3 border border-gray-200 shadow-md md:w-8/12 rounded-md p-3">
          <div className="font-semibold text-[#8b3dff]">{username}</div>
          <div className="text-sm mt-2">{content}</div>
        </div>
      ) : (
        <div className="my-3 border border-gray-200 shadow-md rounded-md md:w-8/12 p-3 py-5">
          <div className="flex flex-row items-center ml-5 h-full space-x-5 animate-pulse">
            <div className="flex flex-col space-y-3 w-full">
              <div className="h-6 bg-gray-300 rounded-md w-5/12 "></div>
              <div className="w-24 h-6 bg-gray-300 rounded-md w-10/12 "></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const MessageBox: React.FC<MessageBoxProps> = ({ memberStatus }) => {
  return (
    <>
      {messages.map(({ id, username, content }) => (
        <div key={id}>
          <MessageContent
            username={username}
            content={content}
            memberStatus={memberStatus}
          />
        </div>
      ))}
    </>
  );
};

export default MessageBox;
