// // Js script creating an element
// const heading = document.createElement("h2");
//             heading.textContent="Heading Created using Js";
//             heading.className="header";
//             document.getElementById("root").append(heading);
     
//             console.log("Javascript element: ",heading);

//React way to createElement

const reactHeading = React.createElement("h1",{className : "head",id:"reactHead",children:"Hello React"});
console.log("React element: ",reactHeading);


ReactDOM.createRoot(document.getElementById("root")).render(reactHeading);