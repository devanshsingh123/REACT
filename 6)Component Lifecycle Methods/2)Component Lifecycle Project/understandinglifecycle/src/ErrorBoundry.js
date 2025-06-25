import { Component } from "react";

class ErrorBoundry extends Component{
    constructor(){
    super()

    this.state={
        hasError:false
    }

    }


    static getDerivedStateFromError(error){
        return {
            hasError:true
        };
    }


   componentDidCatch(error,info){
  console.log("Error: ",error,"\n","Error Info: ",info)
   }

    render(){

        if(this.state.hasError){
            return(
                <h1>Something Went Wrong.Contact Admin</h1>
            )
        }
       return this.props.children

    }




}

export default ErrorBoundry;