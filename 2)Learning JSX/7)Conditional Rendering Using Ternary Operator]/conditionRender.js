const App = ()=>{
    let loggedIn = true;
    return (
        <>
        <h1>Checking condtional render</h1>
        <p>Hello {loggedIn?"Alexa":"User"}</p>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)