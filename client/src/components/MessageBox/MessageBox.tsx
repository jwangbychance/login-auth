import React, { useEffect, useRef, useState } from "react";
import { IMessages } from "../../interfaces/IMessage";
import { viewMessages } from "../../api/messages/messages";
import ReactPaginate from "react-paginate";

interface MessageBoxProps {
  memberStatus: boolean;
}

interface MessageContentProps {
  username: string;
  content: string;
  memberStatus: boolean;
  date: string;
}

const MessageContent: React.FC<MessageContentProps> = ({
  username,
  content,
  memberStatus,
  date,
}) => {
  const formattedDate = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    const formattedDate = date.toLocaleString("en-US", options);

    return formattedDate;
  };

  return (
    <>
      {memberStatus ? (
        <div className="my-3 border border-gray-200 shadow-md md:w-8/12 rounded-md p-3">
          <div className="font-semibold text-[#8b3dff]">{username}</div>
          <div className="text-sm mt-2">{content}</div>
          <div className="text-sm mt-2 text-gray-500">
            {formattedDate(date)}
          </div>
        </div>
      ) : (
        <div className="my-3 border border-gray-200 shadow-md rounded-md md:w-8/12 p-3 py-5">
          <div className="flex flex-row items-center ml-5 h-full space-x-5 animate-pulse">
            <div className="flex flex-col space-y-3 w-full">
              <div className="h-6 bg-gray-300 rounded-md w-5/12 "></div>
              <div className="h-6 bg-gray-300 rounded-md w-10/12 "></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const MessageBox: React.FC<MessageBoxProps> = ({ memberStatus }) => {
  const [messages, setMessages] = useState<IMessages[]>([]);
  const [messageOffset, setMessageOffset] = useState(0);
  const messagesPerPage = 10;
  const endOffset = messageOffset + messagesPerPage;
  const currentMessages = messages.slice(messageOffset, endOffset);
  const pageCount = Math.ceil(messages.length / messagesPerPage);
  const scrollTopRef = useRef<HTMLDivElement>(null);

  const handlePageClick = (e: any) => {
    const newOffset = (e.selected * messagesPerPage) % messages.length;
    setMessageOffset(newOffset);
    scrollToTop();
  };

  const scrollToTop = () => {
    if (scrollTopRef.current !== null) {
      scrollTopRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const getMessages = async () => {
      const { data } = await viewMessages();

      const sortedMessages = data.messages.sort((a, b) =>
        a.date < b.date ? 1 : -1
      );

      setMessages(sortedMessages);
    };

    getMessages();
  }, [messages]);

  return (
    <>
      <div
        ref={scrollTopRef}
        data-testid={memberStatus ? "member-messages" : "guest-messages"}
      />
      {currentMessages.map(({ id, username, content, date }) => (
        <div key={id}>
          <MessageContent
            username={username}
            content={content}
            memberStatus={memberStatus}
            date={date}
          />
        </div>
      ))}
      <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        previousLinkClassName="text-[#8b3dff] rounded-full border border-[#8b3dff] px-[6.5px]"
        nextLinkClassName="text-[#8b3dff] rounded-full border border-[#8b3dff] px-[6.5px]"
        disabledLinkClassName="text-gray-400"
        activeLinkClassName="text-[#8b3dff] font-bold"
        className="flex gap-5 pb-8"
        pageClassName="border border-[#8b3dff] rounded-full px-[7px] flex items-center text-xs"
      />
    </>
  );
};

export default MessageBox;
