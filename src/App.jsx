import "./App.css";
import { Button } from "@chakra-ui/react";
import clockImage from "./assets/clock_device_transparent.webp";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-neutral-800 text-center p-6 space-y-4">
      <div className="">
        <img
          src={clockImage}
          alt="Time clock device"
          className="w-160 max-w-md drop-shadow-xl mb-6"
        />
        <h1 className="text-3xl font-black text-white mb-3">
          Work track management
        </h1>
      </div>

      <div className="p-9">
        <p className="text-zinc-300 max-w-md font-bold">
          Track and manage your workday with ease and full access to all the
          information that helps you stay on top of your daily routine. Submit
          requests, schedule vacations, swap shifts, and more all quickly and
          effortlessly through this smart time-tracking platform.
        </p>
      </div>

      <div className="flex flex-col space-y-4">
        <Button className="px-12 py-3 bg-emerald-500 text-white font-medium rounded-full shadow-md hover:bg-emerald-600">
          Sign In
        </Button>
        <Button className="px-12 py-3 bg-emerald-500 text-white font-medium rounded-full shadow-md hover:bg-emerald-600 transition-all">
          Sign in as ADM
        </Button>
      </div>
    </div>
  );
}

export default App;
