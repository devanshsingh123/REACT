import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { text: "Do the laundry" },
        { text: "Iron the clothes" },
        { text: "Go for a walk" }
      ]
    };
  }
  handleAdd = (text) => {
    // complete the function to add a new Todo to the list
    const {todos} = this.state;
    const newToDo = {text:text}
    todos.unshift(newToDo);


    this.setState({
      todos
    })
    
  };

  handleRemove = (text) => {
    // complete the function to remove the Todo from the list
    const { todos } = this.state;

    const index = todos.findIndex(todo => todo.text === text);

    if (index !== -1) {
      todos.splice(index, 1); // Remove 1 item at the found index
    }
    this.setState({
      todos
    })
  };
  render() {
    const { todos } = this.state;
    return (
      <div className="App">
        <span>Todo</span>
        {/* Pass the todos list and function as props to utilize those in the component for adding and removing */}
        <Form addToDo={this.handleAdd} />

        {<List todos={todos} removeToDo={this.handleRemove} />}
      </div>
    );
  }
}
