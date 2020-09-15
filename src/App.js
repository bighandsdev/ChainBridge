import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header.js";
import PoolStats from "./components/TransferCard.js";
import Transferout from "./components/TransferCardout.js";

import Poolbutton from "./components/Poolbutton.js";
import Web3 from "web3";
import ConnectWallet from "./components/Connectwallet.js";

const web3 = new Web3(Web3.givenProvider);

function App() {
  const ethereum = window.ethereum;

  const [addr, setAddr] = useState("");
  const [fundingScreen, setFundingScreen] = useState(true);

  async function getAccount() {
    const accounts = await ethereum.request({
      method: "eth_requestAccounts",
    });
    const account = accounts[0];
    setAddr(account);
  }
  function changeScreen() {
    if (fundingScreen === true) {
      setFundingScreen(false);
    } else {
      setFundingScreen(true);
    }
  }
  async function sendTransaction() {
    const ethereum = window.ethereum;
    const params = [
      {
        from: addr,
        to: "null",
        gas: "null", // 30400
        gasPrice: "0x9184e72a000", // 10000000000000
        value: "0x9184e72a", // 2441406250
        data: "null",
      },
    ];
    ethereum
      .request({
        method: "eth_sendTransaction",
        params,
      })
      .then((result) => {
        // The result varies by by RPC method.
        // For example, this method will return a transaction hash hexadecimal string on success.
      })
      .catch((error) => {
        // If the request fails, the Promise will reject with an error.
      });
  }
  if (fundingScreen === true) {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <body className="bodyfund">
          <h1>Goal 5,000 Nano</h1>
          <p>To help bring ChainBridge to life, we need your support.</p>

          <div className="container6">
            <div className="meter">
              <span style={{ width: "20%" }}></span>
            </div>
          </div>
          <div className="container">
            <a id="joinpool">Fund</a>
          </div>
          <div
            onClick={() => changeScreen()}
            id="seeinter"
            className="container"
          >
            <a id="joinpool">View the interface</a>
          </div>
        </body>
      </div>
    );
  } else {
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <ConnectWallet getAccount={() => getAccount()} addr={addr} />
        <body className="bodydapp">
          <p>
            Use this as a bridge for moving Nano to and from ethereum in the
            form of WNANO.
          </p>
          <PoolStats />
        </body>
        <div onClick={() => changeScreen()} id="seeinter" className="container">
          <a id="joinpool">Fund the project</a>
        </div>
      </div>
    );
  }
}

export default App;
