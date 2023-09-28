import { useEffect, Fragment, useState } from "react";
import axios from "axios";
import { Dialog, Transition } from "@headlessui/react";

const Login = ({ showLogin, setShowLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState("");

  useEffect(() => {
    setErrMessage("");
  }, [showLogin]);

  const login = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/log-in", { username, password }).then((res) => {
        if (res.status === 200) {
          window.location.href = "/";
        }
      });
    } catch (err) {
      if (err.response.status === 401) {
        setErrMessage("Incorrect username or password. Please try again.");
      } else if (err.response.status === 400) {
        setErrMessage("Please enter a username and password.");
      } else {
        console.error(err);
      }
    }
  };

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
                <form action="" method="POST" onSubmit={(e) => login(e)}>
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
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="mt-4">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md border border-transparent bg-[#dfd0f5] px-4 py-2 text-sm font-medium text-[#8b3dff] hover:bg-[#d3baf7] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8b3dff] focus-visible:ring-offset-2"
                    >
                      Login
                    </button>
                    {errMessage && (
                      <div className="text-xs text-red-500 mt-3">
                        {errMessage}
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

export default Login;
