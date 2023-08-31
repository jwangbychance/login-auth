import { useEffect, useState } from "react";
import axios from "axios";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="font-open-sans h-[100vh] w-full flex flex-col justify-center items-center">
      <div className="self-start w-full absolute top-0">
        <Navbar />
      </div>
      <div className="w-full flex flex-col items-center gap-10 justify-center">
        <div
          className="text-[#8b3dff] inline-block h-20 w-20 md:h-40 md:w-40 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
        <div className="font-semibold text-xs md:text-base">
          Login or Sign Up to continue browsing
        </div>
      </div>
    </div>
  );
}

export default App;
