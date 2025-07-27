import React, { Component } from 'react';

class CountPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entryCount: 0,
      exitCount: 0,
    };
  }

  updateEntry = () => {
    this.setState((prevState) => ({
      entryCount: prevState.entryCount + 1,
    }));
  };

  updateExit = () => {
    this.setState((prevState) => ({
      exitCount: prevState.exitCount + 1,
    }));
  };

  render() {
    return (
      <div style={styles.container}>
        <h2>People Counter</h2>
        <div style={styles.countDisplay}>
          <p>Number of people entered: {this.state.entryCount}</p>
          <p>Number of people exited: {this.state.exitCount}</p>
        </div>
        <div style={styles.buttonGroup}>
          <button onClick={this.updateEntry} style={styles.button}>Login</button>
          <button onClick={this.updateExit} style={styles.button}>Exit</button>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    marginTop: '50px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  countDisplay: {
    margin: '20px 0',
    fontSize: '18px',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
  },
};

export default CountPeople;
