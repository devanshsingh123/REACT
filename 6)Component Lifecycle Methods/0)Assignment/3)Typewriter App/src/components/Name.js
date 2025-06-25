import React from "react";

export default class Name extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName: "Coding Ninjas",
      curIndex: 0,
      currentName: ""
    };
    this.type=null;
  }

  // This function adds a character to the string.
  typeWriterEffect = () => {
    this.setState((prevState) => {
      return {
        curIndex: prevState.curIndex + 1,
        currentName: prevState.fullName.substring(0, prevState.curIndex)
      };
    });
  };

  // Required lifecycle methods here
  componentDidUpdate(prevProp,prevState){
   if(prevProp.showName !== this.props.showName){
    if(this.props.showName){
      this.type = setInterval(()=>{
        this.typeWriterEffect()
      },500);  
    }else{
      clearInterval(this.type)
    }
   }
 console.log(prevProp,prevState)
  }

  render() {
    return <h1>{this.state.currentName}</h1>;
  }
}
