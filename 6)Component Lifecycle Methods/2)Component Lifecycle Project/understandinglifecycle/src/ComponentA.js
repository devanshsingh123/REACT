import { Component } from "react";
import ComponentB from "./ComponentB";


class ComponentA extends Component{

    constructor(){
        super();

        this.state = {
            name:"ComponentA",
            data:[]
        }

       console.log("ComponentA Constructor")
    }

    static getDerivedStateFromProps(props,state){
        console.log("ComponentA getDerivedStateFromProps")
     
        return null;

    }

    componentDidMount(){
     console.log("ComponentA componentDidMount");
      fetch('https://jsonplaceholder.typicode.com/user')
      .then(response => response.json())
      .then(data =>this.setState({data:data}));
    }

    render(){
        console.log("ComponentA render") 
        

        const {data} = this.state;
        console.log(this.state);
        return(<>
            <h1>{this.state.name}</h1>
            <ul>{data.map((value,id)=><li key={id}>{value.name}</li>)}</ul>
              <ComponentB/>
              </>
        )
    }
}

export default ComponentA;