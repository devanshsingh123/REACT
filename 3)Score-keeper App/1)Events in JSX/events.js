//In JSx we pass the reference of the function i.e using name  it without paranthese 
//not the old way like in html we use to mentio the function name


let score = 0;
let wicket = 0;
let ballWiseRun = [];
let hit;
let inputRef=React.createRef();

    


//Function called on run or wicket button clicked
// function action(val){
//     // overBallcounter+=1;
//       if(val === "W"){
//         if(wicket<10){
//         ballWiseRun.push("W");
//         wicket+=1; 
//         rootElement.render(<App/>);
//         }
//       }
//       else{
//         if(wicket<10){
//             ballWiseRun.push(val)
//             score+=val;
//         rootElement.render(<App/>);
//         }
//       }
//     }

function populateField(val){
hit=val;
rootElement.render(<App/>);
}

// Score and Wicket Buttons  Component   
const ScoreButton = ()=>{
    return(
        <div>
        <button onClick={()=>populateField(0)}>0</button>
        <button onClick={()=>populateField(1)}>1</button>
        <button onClick={()=>populateField(2)}>2</button>
        <button onClick={()=>populateField(3)}>3</button>
        <button onClick={()=>populateField(4)}>4</button>
        <button onClick={()=>populateField(6)}>6</button>
        <button onClick={()=>populateField("W")}>WICKET</button>
        </div>
    )
}


// Result Button Component
// const Result =()=> (
//     <div>
//         {ballWiseRun.map((res,index)=>(
//             <>
//             {index%6 === 0?<br/>:null}
//             {res === "W"?<span key={index} style={{color:"red"}}>{res}</span>:
//             <span key={index}>{res===0?<strong>.&nbsp;</strong>:res}</span>}
//             &nbsp;&nbsp;&nbsp;
//             </>
//         ))}
//     </div>
// )

const Result =()=>(
    <div>
        {ballWiseRun.map((res,index)=>(
            <p key={index}>{res}</p>
        ))}
    </div>
)

function handleSubmit(event){
    event.preventDefault(); //stopping the default event of forms on button click
    if(wicket<10){
    if(hit === "W"){
        wicket+=1;
    }
    else{
        score+=hit;
    }
    ballWiseRun.unshift(
      //  <span>{hit}{", "}{inputRef.current.value}</span>
      <span>{`${hit}, ${inputRef.current.value}`}</span>
    );
    hit=null;
    //uncontrolled component , not dependent on rendering below.Directly access the DOM tree.
    inputRef.current.value="";
    // console.log(ballWiseRun);
    rootElement.render(<App/>);
}
}


// Form component 
// Using CreateRef
const Form = ()=>(
    <form onSubmit={handleSubmit}>
        <input value={hit} readOnly/>
        <input ref={inputRef} placeholder="Add a comment"/>
        <button>Submit</button>
    </form>
)



// Main App Component

const App = () =>{
    
    
    return(
        <>
        <h1>SCORE KEEPER</h1>
        <h2>SCORE:{score}/{wicket}</h2>
        <ScoreButton/>
        {/**<Result/>**/}
        <br/>
        <Form/>
        <hr/>
        <Result/>
        </>
    )
}


const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App/>)