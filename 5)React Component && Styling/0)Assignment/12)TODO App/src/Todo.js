import { Component } from "react";

export class Todo extends Component {
  render() {
    const{todo,remove} = this.props;
    return (
      <div className="todo">
        <p>{todo.text}</p>
        {/* Add the onClick event to handle removal of the todos */}
        <button onClick={()=>{remove(todo.text)}}>x</button>
      </div>
    );
  }
}
