import { useEffect, useState } from "react";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signup = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/sign-up", { username, password }).then((res) => {
        if (res.status === 200 && window) {
          window.location.href = "/profile";
          // or <Redirect to="/profile" /> if using react-router
        }
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="w-3/12 rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1">
      <div className="flex flex-col h-full w-full p-5 bg-slate-300">
        <h1 className="self-center underline text-2xl font-bold decoration-pink-500">
          Sign Up
        </h1>
        <form
          className="flex flex-col"
          action=""
          method="POST"
          onSubmit={signup}
        >
          <label className="font-semibold mt-5" for="username">
            Username
          </label>
          <input
            name="username"
            className="border-2 border-pink-600 rounded-xl p-1"
            placeholder="username"
            type="text"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label className="font-semibold mt-5" for="password">
            Password
          </label>
          <input
            name="password"
            className="border-2 border-pink-600 rounded-xl p-1"
            placeholder="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            name="confirm-password"
            className="border-2 border-pink-600 rounded-xl p-1"
            placeholder="re-enter password"
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button className="mt-8 border-2 border-pink-500 rounded-xl w-3/12 hover:bg-pink-300 transition-all ease-in-out duration-300 bg-white">
            Register
          </button>
        </form>
        <div className="text-sm mt-5">
          <div>Already a user?</div>
          <a className="text-pink-500">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
