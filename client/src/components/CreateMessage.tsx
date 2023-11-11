import React, { FormEvent, Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { createMessage } from "../api/messages";

interface CreateMessageProps {
  showCreateMessage: boolean;
  setShowCreateMessage: React.Dispatch<React.SetStateAction<boolean>>;
  username: string | undefined;
}

const CreateMessage: React.FC<CreateMessageProps> = ({
  showCreateMessage,
  setShowCreateMessage,
  username,
}) => {
  const [content, setContent] = useState("");
  const date = new Date();

  const writeMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { status } = await createMessage(username, content, date);
      console.log(status);
    } catch (err: unknown) {
      console.error(err);
    }
  };

  return (
    <Transition appear show={showCreateMessage} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 font-open-sans"
        onClose={(prev) => setShowCreateMessage(prev)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="flex text-xl font-semibold leading-6 text-[#8b3dff]"
                >
                  Create a message
                  <button
                    className="w-6 h-6 ml-auto text-black hover:bg-gray-200 hover:rounded-full"
                    onClick={(prev) => setShowCreateMessage(!prev)}
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.5}
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </Dialog.Title>
                <form action="" method="POST" onSubmit={(e) => writeMessage(e)}>
                  <div className="mt-2 flex flex-col gap-2">
                    <textarea
                      placeholder="Write your message..."
                      className="text-[13px] border-[1px] border-gray-300 p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8b3dff] focus-visible:ring-offset-2"
                      name="message"
                      required
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                    />
                  </div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-[#dfd0f5] px-4 py-2 text-sm font-medium text-[#8b3dff] hover:bg-[#d3baf7] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8b3dff] focus-visible:ring-offset-2"
                      onClick={(prev) => setShowCreateMessage(!prev)}
                    >
                      Create
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CreateMessage;
