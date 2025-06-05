//JSX =  Javascript + XML (Syntactic Sugar.)

//React with JS

// const reactHeading = React.createElement("h1",{className : "head",id:"reactHead",children:"Hello React"});
// console.log("React element: ",reactHeading);



//React with JSX
//Using React Fragment (<></>)

// const jsxElement = (<>
//                   <h1>Hello JSX</h1>
//                   <p>This is a para in JSX</p>
//                     </>);

const jsxElement = (<>
<h1>About React</h1>
<ul>
    <li>
        <p>
            DOM is Document Object Model. Its like a representation of HTML Pages  in parent child tree like structure .
        </p>
    </li>
    <li>
        <p>
            React gives a Virtual DOM        </p>
    </li>
    <li>
        <p>
         In an Original DOM earlier when we used to change a Node,
then along with it all its child were also rerendered which is costly process.
</p>
    </li>
</ul>
                  </>)

ReactDOM.createRoot(document.getElementById("root")).render(jsxElement);
