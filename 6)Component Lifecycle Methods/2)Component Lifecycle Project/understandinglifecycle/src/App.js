import { Component } from "react";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import ErrorBoundry from "./ErrorBoundry";
// import TimerOne from "./Timer/TimerOne";

class App extends Component {
  constructor(){
    super();

  }

  
 
  render(){
   
  return (
    <>
   <h1>App</h1>
   <ErrorBoundry>
     <ComponentA/>
   </ErrorBoundry>
   
   </>
   
  );
}
}

export default App;
