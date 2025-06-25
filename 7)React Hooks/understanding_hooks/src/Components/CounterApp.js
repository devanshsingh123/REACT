import { useState } from "react"



export default function Counter(props){
const [count,setCount] = useState(0);



return(
    <div className="section" style={{justifyContent:"center"}}>
        <h1>Counter: {count}</h1>
        <div className="btnSection">
        <button className="btn"
        onClick={()=>{setCount(count+1)}}>Increase Count</button>
        <button className="btn"
        onClick={()=>{setCount(count-1)}}>Decrease Count</button>
        </div>
        
    </div>
)
}

