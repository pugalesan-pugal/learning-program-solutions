import React from 'react';
import './App.css';
import CurrencyConvertor from './CurrencyConvertor';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    // Bindings
    this.increment = this.increment.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.handleIncrementClick = this.handleIncrementClick.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  sayHello() {
    console.log("Hello! This is a static message.");
  }

  handleIncrementClick() {
    this.increment();
    this.sayHello();
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  }

  sayWelcome = (message) => {
    alert(`Say: ${message}`);
  }

  handleSyntheticEvent = (e) => {
    e.preventDefault();
    console.log("Synthetic Event Triggered");
    alert("I was clicked");
  }

  render() {
    return (
      <div className="App">
        <h1>Event Handling in React</h1>
        <p>Counter: {this.state.count}</p>

        <button onClick={this.handleIncrementClick}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>

        <br /><br />
        <button onClick={() => this.sayWelcome("Welcome")}>Say Welcome</button>

        <br /><br />
        <button onClick={this.handleSyntheticEvent}>OnPress</button>

        <br /><br />
        <CurrencyConvertor />
      </div>
    );
  }
}

export default App;
