import React, { Component } from "react";
import ReactDOM from "react-dom";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Halinka",
      email: "fithalinka@gmail.com",
      textarea: "",
      button:","
    }
  }
  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  render() {
  const{name}
    return (
      <form>
        <input
          class="form-control"
          value={name}
          onChange={this.handleChange}
        ></input>
        <input
        class="form-control"
        value={email}
        type = email
        onChange={this.handleChange}
        ></input>
        <textarea
        class="form-control"
        onChange={this.handleChange}></textarea>
        <button
        class="btn btn-primary"
        type="submit"></button>
      </form>
    );
  }
}

/**
 * Nie zdążyłam z walidacją
 */

/**
 * Nie modyfikujcie kodu poniżej!
 */
ReactDOM.render(<App />, document.getElementById("app"));
export { App, ContactForm };
