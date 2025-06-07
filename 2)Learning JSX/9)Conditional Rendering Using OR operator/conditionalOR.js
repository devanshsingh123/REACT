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


const App = () =>{
    const loggedin = true;
    const fName = "Alexa";
    const lName = "Diaz"
    return(
        <>
        <h1>Conditional Rendering Using OR operator!</h1>
        <p>Hello {loggedin?lName || fName:"User"}!</p>
        {loggedin &&<p> Welcome to the portal</p>}
        <p></p>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>)