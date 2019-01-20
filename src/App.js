import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import Header from "./components/Header";
// import MainContent from "./components/MainContent";
// import Footer from "./components/Footer";
import TodoItem from "./components/TodoItem";
import todosData from "./todosData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    console.log("changed", id);
  }

  render() {
    const todoitems = this.state.todos.map(item => (
      <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
    ));
    return <div className="App">{todoitems}</div>;
  }
}

export default App;
