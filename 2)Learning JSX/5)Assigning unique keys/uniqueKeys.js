const App = () => {
    const cars = ["BMW", "Nexa", "Audi", "CRETA", "Honda"]
    return (
        <>
            <h1>List of Cars with Unique Keys</h1>
            <ul>
                {cars.map((carName, index) => <li keys={index}>{carName}</li>)}
            </ul>
        </>
    );
}





ReactDOM.createRoot(document.getElementById("root")).render(<App />);
//document.getElementById("root").render(<App/>)



