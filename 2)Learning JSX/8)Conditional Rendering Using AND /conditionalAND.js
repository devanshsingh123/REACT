const App = ()=>{
    const loggedin = true;
    const fName = "Alexa";
    const lName = "";

    return(
        <>
        <h1>Hello {loggedin?(lName?lName:fName):"User"}!</h1>
        {loggedin && <p>Welcome to the portal</p>}
        </>
    )
}

/*

7. Truthy/Falsy & Logical Operators

Falsy Values:

false, 0, '', null, undefined, NaN

Logical Operators:

||: returns first truthy

&&: returns first falsy

in case if all are truthy in AND then returns last value
in case if all are falsy in OR then return last value
*/

//Assignment name should come from a variable and if lName available then it should be printed 

ReactDOM.createRoot(document.getElementById("root")).render(<App/>)