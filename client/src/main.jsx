import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { MetaMaskProvider } from "@metamask/sdk-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <MetaMaskProvider
      debug={true}
      sdkOptions={{
        dappMetadata: {
          name: "Example React Dapp",
          url: window.location.href,
        },
      }}
    >
      <App />
    </MetaMaskProvider>
  </React.StrictMode>
);
