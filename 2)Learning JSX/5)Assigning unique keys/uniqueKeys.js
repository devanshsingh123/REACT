const App = () =>{
    const cars = ["BMW","Nexa","Audi","CRETA","Honda"]
    return (
        <>
        <h1>List of Cars with Unique Keys</h1>
        <ul>
        {cars.map((carName,index)=> <li keys={index}>{carName}</li>)}
        </ul>
        </>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
//document.getElementById("root").render(<App/>)


/**
 * Assignment
 * const student = [{
 * name:Devansh,
 * Subject:Math,
 * marks:98},{
 * name:Ayush,
 * Subject:Math,
 * marks:95},{
 * name:Sahil,
 * Subject:Math,
 * marks:98},{
 * name:Talreja,
 * Subject:Math,
 * marks:99}]
 * Show a Table on a html page using JSX with coulmns Name,Subject,Marks
 */