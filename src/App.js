import React, { Component } from "react";
import "./App.css";
import CalculatorResultComponent from "./components/CalculatorResult";
import ButtonsKeyPadComponent from "./components/Button";

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: "",
    };
  }
  //Check the operator and then call funaction
  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else if (button === "+/-") {
      this.toggleSign();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };

  calculate = () => {
    var checkResult = "";
    //Checking the minus conditons for addition or minus
    if (this.state.result.includes("--")) {
      checkResult = this.state.result.replace("--", "+");
    } else {
      checkResult = this.state.result; 
    }

    try {
      this.setState({
        //eslint-disable-next-line 
        result: (eval(checkResult) || "") + "",
      });
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };
  //Clear  Result
  reset = () => {
    this.setState({
      result: "",
    });
  };

  //Backspace funation
  backspace = () => {
    if (this.state.result !== "") {
      this.setState({
        result: this.state.result.slice(0, -1),
      });
    }
  };

  // toggle sing (+/-) funation
  toggleSign = () => {
    if (this.state.result !== "") {
      const displayValue = this.state.result;
      const newValue = parseFloat(displayValue) * -1;
      this.setState({
        result: String(newValue),
      });
    }
  };

  render() {
    return (
      <div style={{borderRadius:5, borderColor:"blue"}}>
        <div className="calculator-body">
          <h1 style={{color:"red"}}>Simple Calculator</h1>
          <CalculatorResultComponent result={this.state.result} />
          <ButtonsKeyPadComponent onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

export default App;
