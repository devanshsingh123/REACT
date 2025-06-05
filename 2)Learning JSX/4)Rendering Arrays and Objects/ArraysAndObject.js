const App = ()=>{
    const a = [1,2,3,4,5];
    const obj = { 
        name: "Devansh",
        age: 25
    }
    const Cars = ["BMW","Audi","Nexa","XUV","CRETA"]

    return(
        <>
        <h1>Rendering Arrays and Objects in JSX</h1>
        <p>Array elements:</p>
        {a.map(num=><h2>{num}</h2>)}
        <p>Obj elements :{obj.name} {obj["age"]}</p>
        <p>List of Cars:</p>
        <ul>{Cars.map(carName=><li>{carName}</li>)}</ul>
        </>
    )
}


ReactDOM.createRoot(document.getElementById("root")).render(<App />)