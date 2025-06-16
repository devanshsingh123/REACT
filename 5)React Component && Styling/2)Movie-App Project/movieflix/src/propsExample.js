//using this.props to fetch value passed from parent App

//CLASS Implementation of Props

// import { Component } from "react";


// export default class Student extends Component{
//     render(){
//         const {name,marks} = this.props;
//         return(<>
            // <h1>Hello , {name}</h1>
            // <p>Your percentage is : {marks}</p>
            // <hr/>
//             </>
//         )
//     }
// }


//Function Implementation

export default function Student(props){
    const {name,marks} = props;
    return(
        <>
           <h1>Hello , {name}</h1>
            <p>Your percentage is : {marks}</p>
            <hr/>
        </>
    )
}

