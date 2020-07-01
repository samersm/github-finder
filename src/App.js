import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const res = await axios.get("https://api.github.com/users");

    this.setState({ users: res.data, loading: false });
  }

  render() {
    return (
      <div className="App">
        <h1>Hello from react</h1>
      </div>
    );
  }
}

export default App;
