// Problem statement
// Create a React application that allows users to input student details, 
// including the student's name and their obtained marks and render those data in a table.
let nameRef=React.createRef();
let markRef = React.createRef();
let totalrecords = [];

function onSubmitHandler(event){
event.preventDefault();
console.log(markRef.current.value,nameRef.current.value)
totalrecords.unshift(
    <tr key={totalrecords.length}>
    <td>{nameRef.current.value}</td>
    <td>{markRef.current.value}</td>
    </tr>
);
nameRef.current.value="";
markRef.current.value="";
rootElement.render(<App/>)
}


const Form = ()=>(
    <div > 
    <form onSubmit={onSubmitHandler}>
    <input placeholder="Name" ref={nameRef}/>
    <input placeholder="Marks" ref={markRef} />
    <button >Submit</button>
    </form>
    </div>
)

const Result =()=>(
    <div style={{margin:"0 auto",width:"200px"}}>
    <table>
        <thead>
            <tr>
                <th>Student's name</th>
                <th>Marks</th>
            </tr>
        </thead>
        <tbody>
             {totalrecords}
        </tbody>
    </table>
    </div>

)


//Main Component
const App = ()=>(
    <>
    <h1>Student's Form</h1>
    <Form/>
    <br/>
    <Result/>
    </>
)

const rootElement= ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App/>);

