
// function App(){

//     return (
        // <>
        // <h1 className="heading">Hello JSX</h1>
        // <p>This is created using Jsx.</p>
        // </>
//     )
// }


// Creating Component using arrow function

// Arrow function emplicitly return when we are not using {} and eclosing code in ();


const App = ()=>(
        <>
        <h1 className="heading">Hello JSX</h1>
        <p>This is created using Jsx.</p>
        <Name />
        </>
        );


function Name(){
    return(<>
    <p>
        JSX is Javascript XML
        </p>
        </>)
}


// ReactDOM.createRoot(document.getElementById("root")).render(App()); calling it as a function . So will not be considered as a Component
//Rendering more than one Component.
// ReactDOM.createRoot(document.getElementById("root")).render(
// <>
// <App />
// <Name/>
// </>
// );

ReactDOM.createRoot(document.getElementById("root")).render(<App />);



