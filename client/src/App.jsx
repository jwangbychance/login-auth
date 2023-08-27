import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios from "axios";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
    <div className="">
      <h1 className="">Sign Up</h1>
      <form action="" method="POST" onSubmit={signup}>
        <label for="username">Username</label>
        <input
          name="username"
          placeholder="username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label for="password">Password</label>
        <input
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Sign Up</button>
      </form>
    </div>
  );
}

export default App;
