import React from 'react';
import './App.css';

const CalcButton = (props) => {
  return (
    <button id={props.id} onClick={props.onClick}>
      {props.buttonText}
    </button>
  );
}

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      equation: '',
      input: '0'
    }
  }

  handleNumClick = (num) => {
    console.log(num)
    const {input} = this.state;
    this.setState({ input: input === 0 ? String(num) : input + String(num)});
  }

  handleOperatorClick = (num) => {
    console.log(num);
    let equation = `${this.state.input} ${num}`;
    this.setState({equation: equation});
  }

  render() {
    const {equation, input} = this.state

    return (
      <div className="App">
        <div className="Calculator">
            <div id="calcEquation">{equation}</div>
            <div id="calcInput">{input}</div>
            <CalcButton id="clear" onClick={() => this.setState({input: 0})} buttonText="Clear" />
            <button onClick={this.handleOperatorClick}>/</button>
            <button onClick={this.handleOperatorClick}>*</button>
            <CalcButton id="seven" onClick={() => this.handleNumClick(7)} buttonText="7"/>
            <CalcButton id="eight" onClick={() => this.handleNumClick(8)} buttonText="8"/>
            <CalcButton id="nine" onClick={() => this.handleNumClick(9)} buttonText="9"/>
            <button onClick={this.handleOperatorClick}>-</button>
            <button className="NumberButton FourButton" onClick={() => this.handleNumClick(4)}>4</button>
            <button className="NumberButton FiveButton" onClick={() => this.handleNumClick(5)}>5</button>
            <button className="NumberButton SixButton" onClick={() => this.handleNumClick(6)}>6</button>
            <button onClick={this.handleOperatorClick}>+</button>
            <button className="NumberButton OneButton" onClick={() => this.handleNumClick(1)}>1</button>
            <button className="NumberButton TwoButton" onClick={() => this.handleNumClick(2)}>2</button>
            <button className="NumberButton ThreeButton" onClick={() => this.handleNumClick(3)}>3</button>
            <button id="enter">=</button>
            <button>-+</button>
            <button className="NumberButton ZeroButton" onClick={() => this.handleNumClick(0)}>0</button>
            <button>.</button>
        </div>
      </div>
    );
  }
}

export default App;
