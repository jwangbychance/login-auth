import { useEffect, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

const Login = ({ showLogin, setShowLogin }) => {
  return (
    <Transition appear show={showLogin} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 font-open-sans"
        onClose={(prev) => setShowLogin(prev)}
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
                  className="text-xl font-semibold leading-6 text-[#8b3dff]"
                >
                  Login
                </Dialog.Title>
                <div className="mt-2 flex flex-col gap-2">
                  <label className="text-[15px]">Username</label>
                  <input
                    placeholder="Username"
                    className="text-[13px] border-[1px] border-gray-300 p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8b3dff] focus-visible:ring-offset-2"
                  />
                </div>
                <div className="mt-2 flex flex-col gap-2">
                  <label className="text-[15px]">Password</label>
                  <input
                    placeholder="Password"
                    className="text-[13px] border-[1px] border-gray-300 p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8b3dff] focus-visible:ring-offset-2"
                  />
                </div>
                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-[#dfd0f5] px-4 py-2 text-sm font-medium text-[#8b3dff] hover:bg-[#d3baf7] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8b3dff] focus-visible:ring-offset-2"
                    onClick={(prev) => setShowLogin(!prev)}
                  >
                    Login
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Login;
