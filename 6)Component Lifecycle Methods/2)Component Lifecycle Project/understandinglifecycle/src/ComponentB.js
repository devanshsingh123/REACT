import { Component } from "react";


class ComponentB extends Component{

    constructor(){
        super();

        this.state = {
            name:"ComponentB"
        }

        console.log("ComponentB Constructor")
    }

    static getDerivedStateFromProps(props,state){
        console.log("ComponentB getDerivedStateFromProps")
     
        return null;

    }

    componentDidMount(){
     console.log("ComponentB componentDidMount",this.state.name);
    }

    render(){
        console.log("ComponentB render") 
        //const {result} = this.props;
        return(<>
            <h1>{this.state.name}</h1>
            </>
        )
    }
}

export default ComponentB;