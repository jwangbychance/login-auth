import { useEffect, useState } from "react";
import axios from "axios";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="h-[100vh] flex justify-center items-center bg-gray-600">
      <Signup />
    </div>
  );
}

export default App;
