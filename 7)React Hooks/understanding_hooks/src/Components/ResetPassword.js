import { useState } from "react";
import uselocalStorage from "./useLocalStorage";



export default function Reset(){
    const{email,setEmail} = useLocalStorage()

    // useEffect(()=>{
    //     let email = localStorage.getItem("email");
    //     if(email){
    //         setEmail(email);
    //     }
    // },[]);

    // useEffect(()=>{
    //     localStorage.setItem("email",email)
    // })

    return(
        <>
        <h1>Reset Your Password</h1>
        <input placeholder="Enter Email"
        value={email}
        onChange={(e)=>{setEmail(e.target.value)}}
        />
        <br/>
        <br/>
        <button>Continue</button>
        <br/>
        <br/>
        </>
    )
}