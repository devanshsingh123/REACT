//import Input from "./Components/InputWithClass";
// import Blog from "./Components/Blog";
// import Input from "./Components/InputWithFunction";
import { useState } from "react";
import Login from "./Components/Login";
import Reset from "./Components/ResetPassword";
//import Counter from "./Components/CounterApp";

function App() {
  const [form,setForm] = useState("login");
  return (
    <div className="App" style={{textAlign:"center"}}>
      <h1>Welcome</h1>
      {form=== "login"?<Login/>:<Reset/>}
    <button style={{alignSelf:"center"}} onClick={()=>{ setForm(form==="login"?"reset":"login")}}>
      {form==="login"?"Forgot Password":"Back to Login"}
    </button>
    </div>
  );
}

export default App;
