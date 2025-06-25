import { Component } from "react";

class TimerOne extends Component {
    constructor() {
        super();

        this.state = {
            time: 0
        }

        this.timer = null;
        console.log("TimeOne Constructor")
    }


    // handleClick = ()=>{
    // this.setState((prevState)=>{
    //     return {clickCounter: prevState.clickCounter+1}
    // })
    // }




    static getDerivedStateFromProps(props, state) {

        console.log("TimeOne getDerivedSateFromProps")
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Should Component Update____________");
        console.log("nextProps: ",nextProps,"\n","nextState: ",nextState)
        return nextProps.timerOn !== this.props.timerOn || nextState.time % 5 === 0;
    }

    render() {
        console.log("TimeOne render")
        return (
            <div style={{ justifyContent: "center" }}>
                <h1>
                    Time Spent:
                </h1>
                <h2>{new Date(this.state.time * 1000).toISOString().slice(11, 19)}</h2>
            </div>
        )
    }

    componentDidMount() {
        console.log("TimeOne componentDidMount");
        //  this.timer = setInterval(()=>{
        //     this.setState((prevState)=>{
        //         return{time:prevState.time+1}
        //     })
        //       },5000);

        console.log("_________________________________")



    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("Timer getSnapshotBeforeUpdate")
        return 5;
    }

    componentDidUpdate(prevProps, prevState, snapShot) {

        console.log("TimerOne componentDidUpdate");


        if (prevProps.timerOn !== this.props.timerOn) {
            if (this.props.timerOn) {
                this.timer = setInterval(() => {
                    this.setState((prevState) => {
                        return { time: prevState.time + 1 }
                    })
                }, 1000);
            }
            else {
            clearInterval(this.timer);
        }
        } 
        


        console.log("Previous props:", prevProps);
        console.log("Previous State:", prevState);
        console.log("Snap Shot:", snapShot);

        // if(this.state.time === 10){
        // clearInterval(this.timer);
        // this.timer = null;
        // console.log("Timer stopped at 10 seconds");
        //  }

        console.log("_________________________________")
    }

    componentWillUnmount() {
        console.log("component will Unmount")
        clearInterval(this.timer);
    }

}


export default TimerOne;