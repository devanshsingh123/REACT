import React from "react";

export default class Input extends React.Component{
    constructor(){
        super();

        this.state = {
            name:"",
            lname:""
        }
    }

    handleNameInput = (e) =>{
   const name = e.target.value;

   this.setState({
    name
   })
    }

    handlelNameInput = (e)=>{
const lname = e.target.value;

this.setState({
    lname
})
    }

    render(){
        return(
            <>
            <div className="section">
                <Row label="Name">
                        <input className="input" onChange={this.handleNameInput}/>
                </Row >
                <Row label="Last Name">
                        <input className="input" onChange={this.handlelNameInput}/>
                </Row >
            </div>
    
            <h2>Hello,{this.state.name} {this.state.lname}</h2>
            
            </>
            )

    }

 componentDidMount(){
     document.title = ` ${this.state.name} ${this.state.lname}`
 }
 
 componentDidUpdate(prevProps, prevState, snapshot){
    console.log("Component Did Update state: ",this.state)
    document.title = ` ${this.state.name} ${this.state.lname}`
 }
    
   
    }


function Row(props){
    const{label} = props;
    return(
        <>
        <lable>{label}<br/></lable>
        {props.children}
        <hr />
        </>
    )
}
