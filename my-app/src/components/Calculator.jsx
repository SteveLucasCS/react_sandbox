import React, { Component } from 'react';
import {Button} from 'react-materialize';
import '../styles/Calculator.css';
/**
 * Renders result of arithmatic exp
 */
class Calculator extends Component {
  state = {
    value: '',
    a: '',
    o: '',
    b: '',
    ans: ''
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    var input = this.state.value;
    console.log(this.state.value);
    input.trim();

    // Regex that matches floating numbers
    let numRegex= /[0-9]*\.?[0-9]+/;
    let opRegex = /[+|-|*|/]/;

    let a = input.match(numRegex)[0];
    let subStr = input.substring(a.length);
    let o = subStr.match(opRegex)[0];
    subStr = input.substring(a.length + o.length);
    let b = subStr.match(numRegex)[0];

    this.setState({
      a: a,
      o: o,
      b: b,
      ans: this.getAns(a, o, b)
    });
  };

  getAns = (aIn, oIn, bIn) => {
    let a = parseFloat(aIn);
    let b = parseFloat(bIn);
    var o = oIn.trim();

    switch (o) {
      case '+':
        return a + b;

      case '-':
        return a - b;

      case '/':
        return a / b;
      
      case 'x':
      case '*':
        return a * b;

      default:
        return 'Invalid Operation.';
    }
  };

  render () {
    return (
      <div className="Calculator">
        <form className="CalculatorForm" onSubmit={this.handleSubmit}>
          <label>
            <h5>Enter an arithmatic exp: (ex. '1 + 3')</h5>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </label>
          <Button waves="light" className="light" type="submit">Enter</Button>
        </form>

        <p className="Math-results">
          {this.state.a} {this.state.o} {this.state.b} = {this.state.ans}
        </p>
      </div>
    );
  }
}

export default Calculator;
