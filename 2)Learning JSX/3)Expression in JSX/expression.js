function sum(a,b,c){
    return a+b+c;
}

const header = <h2>JSX Expression</h2>

const App = () =>{
    let name = "JSX";
    let age = 26 ;
    let demo =  null;
    let uVal = undefined; 
    let bVal = true;
    //Use {} to use variables in JSX
    //null , boolean and underfined prints nothing in JSX
    return (<><h1>Javascript inside {name}</h1>
            {header}
            <p>Your age is {age}</p> 
            <p>Null value is : {demo}</p>
            <p>Undefined Value is : {uVal}</p>
            <p>Booloean Value is : {bVal}</p>
            <p>Using Sum function: {sum(2,3,5)}</p>
            </>
            )


}

//Important Note:
// JSX can only have single expression to render inside of the UI. We can create a parent element
// or use React fragment to group the Ui into a single expression.


ReactDOM.createRoot(document.getElementById("root")).render(<App />);