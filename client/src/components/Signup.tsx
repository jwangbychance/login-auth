import React, { useEffect, useState, Fragment, FormEvent } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { signupUser } from "../api/users";

interface SignupProps {
  showSignUp: boolean;
  setShowSignUp: React.Dispatch<React.SetStateAction<boolean>>;
}

const Signup: React.FC<SignupProps> = ({ showSignUp, setShowSignUp }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [capsWarning, setCapsWarning] = useState(false);

  useEffect(() => {
    setErrMessage("");
  }, [showSignUp]);

  const signup = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrMessage("Please make sure both fields contain the same password.");
      return;
    }

    try {
      const { status } = await signupUser(username, password);
      if (status === 201 && window) {
        setSuccessMessage("Success! Please proceed to login.");
      }
    } catch (err: any) {
      if (err.response?.status === 409 || err.response?.status === 400) {
        setErrMessage(err.response?.data?.message);
      } else {
        console.error(err);
      }
    }
  };

  const onKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (keyEvent) => {
    if (keyEvent.getModifierState("CapsLock")) {
      setCapsWarning(true);
    } else {
      setCapsWarning(false);
    }
  };

  return (
    <Transition appear show={showSignUp} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 font-open-sans"
        onClose={(prev) => setShowSignUp(prev)}
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
                  Sign Up
                  <button
                    className="w-6 h-6 ml-auto text-black hover:bg-gray-200 hover:rounded-full"
                    onClick={(prev) => setShowSignUp(!prev)}
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
                <form action="" method="POST" onSubmit={(e) => signup(e)}>
                  <div className="mt-2 flex flex-col gap-2">
                    <label className="text-[15px]">Username</label>
                    <input
                      placeholder="Username"
                      className="text-[13px] border-[1px] border-gray-300 p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8b3dff] focus-visible:ring-offset-2"
                      name="username"
                      type="text"
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="mt-2 flex flex-col gap-2">
                    <label className="text-[15px]">Password</label>
                    <input
                      placeholder="Password"
                      className="text-[13px] border-[1px] border-gray-300 p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8b3dff] focus-visible:ring-offset-2"
                      name="password"
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onKeyDown={onKeyDown}
                    />
                  </div>
                  <div className="mt-2 flex flex-col gap-2">
                    <input
                      placeholder="Confirm Password"
                      className="text-[13px] border-[1px] border-gray-300 p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8b3dff] focus-visible:ring-offset-2"
                      name="confirm-password"
                      type="password"
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      onKeyDown={onKeyDown}
                    />
                  </div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-[#dfd0f5] px-4 py-2 text-sm font-medium text-[#8b3dff] hover:bg-[#d3baf7] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8b3dff] focus-visible:ring-offset-2"
                    >
                      Sign up
                    </button>
                    {errMessage && !successMessage && (
                      <div className="text-xs text-red-500 mt-3">
                        {errMessage}
                      </div>
                    )}
                    {successMessage && (
                      <div className="text-xs text-green-600 mt-3">
                        {successMessage}
                      </div>
                    )}
                    {capsWarning && (
                      <div className="text-xs text-red-500 mt-3">
                        Caps Lock is on!
                      </div>
                    )}
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

export default Signup;
