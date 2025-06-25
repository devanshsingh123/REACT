import { Component } from "react";
// import ComponentA from "./ComponentA";
// import ComponentB from "./ComponentB";
import TimerOne from "./Timer/TimerOne";

class App extends Component {
  constructor(){
    super();

    this.state={
     timerOn: false
    }

  }

  handleClick = ()=>{
    this.setState((prevState)=>{
      return({
        timerOn:!prevState.timerOn
      })
    })
  }
 
  render(){
   
  return (
    <>
   <h1>App</h1>
   <TimerOne timerOn={this.state.timerOn}/>
   <button onClick={this.handleClick}>
    {this.state.timerOn?"STOP":"START"}
    </button>
   </>
   
  );
}
}

export default App;
