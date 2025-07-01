import {  useState } from "react"
import uselocalStorage from "./useLocalStorage";

export default function Login(){
  
    const [password,setPassword] = useState("");
    const {email,setEmail} = uselocalStorage();

    //  useEffect(()=>{
    //     let email = localStorage.getItem("email");
    //     if(email){
    //         setEmail(email);
    //     }
    // },[]);

    // useEffect(()=>{
    //     //saving mail in localStorage
    // localStorage.setItem("email",email)
    // },[email])

   
    return(
        <div className="login-section">
        <br/>
        <h2>Login to the Portal</h2>
        <br/>
        <div style={{textAlign:"center"}}>
        <input placeholder="Enter Email"
        value={email} 
        onChange={(e)=>{setEmail(e.target.value)}}/>
        <br/>
        <br/>
        <input placeholder="Enter Password"
        value={password}
        onChange={(e)=>{setPassword(e.target.value)}}/>
        <br/>
        <br/>
        <button>Login</button>
        </div>
        <br/>
        </div>
    )
}