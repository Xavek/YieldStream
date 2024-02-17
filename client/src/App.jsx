import React from "react";
import Navbar from "./component/Navbar";
import "./index.css";
export const App = () => {
  return (
    <>
      <Navbar />
      <div className="w-1/2 mx-auto p-4">
        <h3 className="font-semibold px-4 py-2 text-center">Create Stream</h3>
        <div className="mb-2">
          <label htmlFor="input1" className="block mb-1 font-semibold">
            Receiver Address
          </label>
          <input
            type="text"
            id="input1"
            name="input1"
            placeholder="Receiver public address"
            className="border border-gray-300 px-4 py-2 rounded-md w-full"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="input2" className="block mb-1 font-semibold">
            Amount
          </label>
          <input
            type="text"
            id="input2"
            name="input2"
            placeholder="Amount to be streamed"
            className="border border-gray-300 px-4 py-2 rounded-md w-full"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="input3" className="block mb-1 font-semibold">
            Flow Rate
          </label>
          <input
            type="text"
            id="input3"
            name="input3"
            placeholder="Put whole number like 1, 2, 3"
            className="border border-gray-300 px-4 py-2 rounded-md w-full"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="input4" className="block mb-1 font-semibold">
            ERC20 Contract
          </label>
          <input
            type="text"
            id="input4"
            name="input4"
            placeholder="Default ETH Contract"
            className="border border-gray-300 px-4 py-2 rounded-md w-full"
          />
        </div>
        <button className="bg-black text-white px-4 py-2 rounded-md w-full">
          Start
        </button>
      </div>
      <div className="w-1/2 mx-auto p-4">
        <h3 className="font-semibold px-4 py-2 text-center">
          Withdraw From Stream
        </h3>
        <div className="mb-2">
          <label htmlFor="input1" className="block mb-1 font-semibold">
            ID (stream creation id)
          </label>
          <input
            type="text"
            id="input1"
            name="input1"
            placeholder="Unique Id"
            className="border border-gray-300 px-4 py-2 rounded-md w-full"
          />
        </div>

        <button className="bg-black text-white px-4 py-2 rounded-md w-full">
          Withdraw
        </button>
      </div>
      <div className="w-1/2 mx-auto p-4">
        <h3 className="font-semibold px-4 py-2 text-center">Cancel Stream</h3>
        <div className="mb-2">
          <label htmlFor="input1" className="block mb-1 font-semibold">
            ID (stream creation id)
          </label>
          <input
            type="text"
            id="input1"
            name="input1"
            placeholder="Unique Id"
            className="border border-gray-300 px-4 py-2 rounded-md w-full"
          />
        </div>

        <button className="bg-black text-white px-4 py-2 rounded-md w-full">
          Cancel It
        </button>
      </div>
    </>
  );
};
