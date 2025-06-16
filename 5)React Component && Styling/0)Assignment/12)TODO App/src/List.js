import { Component } from "react";
import { Todo } from "./Todo";

export class List extends Component {
  
  render() {
    const {todos,removeToDo} = this.props;
    return (
      <div className="list">
        {/* Render the todo here from the props*/}
        {todos.map((todo,id)=><Todo todo={todo} remove={removeToDo} key={id}/>)}
      </div>
    );
  }
}
