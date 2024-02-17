import React, { useState } from "react";
import { useSDK } from "@metamask/sdk-react";

const Navbar = () => {
  const [account, setAccount] = useState();
  const { sdk, connected, connecting, provider, chainId } = useSDK();

  const connect = async () => {
    try {
      const accounts = await sdk?.connect();
      console.log(accounts);
      setAccount(accounts?.[0]);
    } catch (err) {
      console.warn("failed to connect..", err);
    }
  };
  return (
    <nav className="bg-black p-4 flex justify-between items-center">
      <div className="text-white">YieldStream</div>
      {/* {connected && } */}
      <button
        className="bg-white text-black py-2 px-4 rounded"
        onClick={connect}
      >
        Connect
      </button>
    </nav>
  );
};

export default Navbar;
