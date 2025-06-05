//JSX =  Javascript + XML (Syntactic Sugar.)

//React with JS

// const reactHeading = React.createElement("h1",{className : "head",id:"reactHead",children:"Hello React"});
// console.log("React element: ",reactHeading);



//React with JSX

const jsxHeading = (<h1>Hello JSX</h1>);
const jsxPara = (<p>This is a para in JSX</p>); 
const mainElement = jsxHeading + jsxPara;

ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading);
