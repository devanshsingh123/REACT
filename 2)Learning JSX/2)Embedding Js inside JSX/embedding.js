const App = () =>{
    let name = "Devansh";
    let age = 26 ;
    let demo =  null;
    let uVal = undefined; 
    let bVal = true;
    //Use {} to use variables in JSX
    //null , boolean and underfined prints nothing in JSX
    return (<><h1>Hello {name}!</h1>
            <p>Your age is {age}</p> 
            <p>Null value is : {demo}</p>
            <p>Undefined Value is : {uVal}</p>
            <p>Booloean Value is : {bVal}</p></>) 

}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);