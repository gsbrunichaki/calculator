import React, { Component } from 'react';
import './Calculator.css';

import Button from '../components/Button';
import Display from '../components/Display';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  indexValues: 0
}

export default class Calculator extends Component {

  state = { ...initialState };

  constructor(props) {
    super(props);

    this.clearMemory = this.clearMemory.bind(this);
    this.setOperation = this.setOperation.bind(this);
    this.addDigit = this.addDigit.bind(this);
  }

  clearMemory() {
    this.setState({ ...initialState });
  }

  setOperation(operation) {
    console.log(operation);
  }

  addDigit(digit) {
    if (digit === '.' && this.state.displayValue.includes('.')) return;

    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay;
    const currentValue = clearDisplay ? '' : this.state.displayValue;
    const displayValue = currentValue + digit;

    this.setState({ displayValue, clearDisplay: false })

    if (digit !== '.') {
      // const indexValues
    }
  }

  render() {
    return (
      <div className="calculator">
        <Display value={this.state.displayValue} />
        <div className="left">
          <Button label="7" click={this.addDigit} />
          <Button label="8" click={this.addDigit} />
          <Button label="9" click={this.addDigit} />
          <Button label="4" click={this.setOperation} />
          <Button label="5" click={this.addDigit} />
          <Button label="6" click={this.addDigit} />
          <Button label="1" click={this.addDigit} />
          <Button label="2" click={this.addDigit} />
          <Button label="3" click={this.addDigit} />
          <Button label="0" click={this.addDigit} />
          <Button label="," value="." click={this.addDigit} />
          <Button label="=" click={this.addDigit} />
        </div>
        <div className="right">
          <Button label="C" click={this.clearMemory} operation />
          <Button label="÷" value="/" click={this.setOperation} operation />
          <Button label="×" value="*" click={this.setOperation} operation />
          <Button label="−" value="-" click={this.setOperation} operation />
          <Button label="+" value="+" click={this.setOperation} operation />
        </div>
      </div>
    );
  }
}