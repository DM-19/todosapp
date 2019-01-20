import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainContent />
        <Footer />
        <br />
        <br />
        <input type="checkbox" />
        <p>Placeholder text here</p>

        <input type="checkbox" />
        <p>Placeholder text here</p>

        <input type="checkbox" />
        <p>lorem ipsum Placeholder text here</p>

        <input type="checkbox" />
        <p>lorem ipsum Placeholder text here</p>
      </div>
    );
  }
}

export default App;
