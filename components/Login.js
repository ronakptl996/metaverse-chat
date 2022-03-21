import React from "react";
import Image from "next/image";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();
  return (
    <div className="bg-black relative">
      <h1>I am Login Screen</h1>
      <div className="flex flex-col absolute z-50 h-4/6 items-center justify-center w-full space-y-4">
        {/* <Image src="https://links.papareact.com/3pi" height="200" width="200" /> */}
        <Image
          className="object-cover object-top rounded-full"
          src="/logo.jpg"
          height="200"
          width="200"
        />
        <button
          onClick={authenticate}
          className="bg-yellow-500 rounded-lg p-5 font-bold animate-pulse"
        >
          Login to the Metaverse
        </button>
      </div>

      <div className="w-full h-screen">
        <Image
          src="https://links.papareact.com/55n"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}

export default Login;
