import React, { Component } from "react";
import ReactDOM from "react-dom";

class LoadingData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      intervalId: undefined,
    };
    this.interval = this.interval.bind(this);
    this.timeout = this.timeout.bind(this);
  }
  componentDidMount() {
    const intervalId = setInterval(this.interval, 100);
    this.setState({ intervalId: intervalId });
    setTimeout(this.timeout, 5000);
  }
  interval() {
    this.setState({ progress: this.state.progress + 1 });
  }
  timeout() {
    if (this.state.intervalId) {
      clearInterval(this.state.intervalId);
      this.setState({ intervalId: undefined });
    }
    this.setState({ progress: 100 });
  }
  render() {
    if (this.state.progress < 100) {
      return (
        <div class="progress">
          <div
            class="progress-bar"
            style={`width: ${this.state.progress}%`}
          ></div>
        </div>
      );
    } else {
      return <h1>Dane Załadowane!</h1>;
    }
  }
}

function App() {
  return <LoadingData />;
}

/**
 * Nie modyfikujcie kodu poniżej!
 */
ReactDOM.render(<App />, document.getElementById("app"));
export { App, LoadingData };
