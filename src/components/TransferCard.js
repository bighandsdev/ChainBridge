import React from "react";
import "./TransferCard.css";
import nano from "./nano.png";
import eth from "./eth.png";
import swap from "./swap.png";

export default class Lend extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      NanoToWnano: true,
    };
  }
  changeCard() {
    if (this.state.NanoToWnano === true) {
      this.setState({
        NanoToWnano: false,
      });
      console.log("he");
    } else {
      this.setState({
        NanoToWnano: true,
      });
    }
  }

  render() {
    if (this.state.NanoToWnano === true) {
      return (
        <div className="both">
          <div id="card" className="container">
            {" "}
            <p>Nano to Wnano</p>
            <div className="container2" id="timeemojidiv">
              <h1 id="timeemoji">
                <img id="eth" src={eth} />
              </h1>
            </div>
            <div className="flexbox">
              <p className="inputText">Destination address</p>
              <input placeholder="ETH address"></input>
            </div>
            <div className="flexbox">
              <p className="inputText">Amount</p>
              <input placeholder="Nano amount"></input>
            </div>
            <div className="container">
              <a id="joinpool">Transfer</a>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="both">
          <div id="card" className="container">
            {" "}
            <p>Wnano to Nano</p>
            <div className="container2" id="timeemojidiv">
              <h1 id="timeemoji">
                <img id="nano" src={nano} />
              </h1>
            </div>
            <div className="flexbox">
              <p className="inputText">Destination address</p>
              <input placeholder="Nano address"></input>
            </div>
            <div className="flexbox">
              <p className="inputText">Amount</p>
              <input placeholder="Wnano amount"></input>
            </div>
            <div className="container">
              <a id="joinpool">Transfer</a>
            </div>
          </div>
        </div>
      );
    }
  }
}
