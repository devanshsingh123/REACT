// Problem statement
// Create a Quotify App in React.



// Task:
// Create the form with two inputs for name and quote. 
// Add additional attribute to these input field such as placeholder, ref.
// For accessing the name and quote create two ref with name "nameRef" and "quoteRef".
// Also add an onKeyPress event listener to the quote input such that on pressing the 
// "Enter" button it should push the quote to the "quotes" array.
// Complete the handleQuote() to handle quote insertion and 
// clearing the input once the quote has been added to the quotes array.




const quotes = [];
     let nameRef = React.createRef();
     let quoteRef = React.createRef();
      const clearInputs = () => {
        nameRef.current.value = "";
        quoteRef.current.value = "";
      };

      // create handleQuote function here
      function handleQuote(event){
        if(event.key === "Enter"){
      event.preventDefault();
      //console.log("Enter Key is pressed: ",nameRef.current.value,quoteRef.current.value)
      
      quotes.unshift(
        {quote:quoteRef.current.value,
          name: nameRef.current.value 
        }
      )
      clearInputs();
     rootElement.render(<App/>)
        }
      }

      const App = () => (
        <div className="App">
          <h2>Quotify</h2>
          <div>
          <form onKeyDown={handleQuote}>
            <div>
            <input placeholder="Name" ref={nameRef}/>
            </div>
            <div style={{marginTop:"9px"}}>
            <input placeholder="Quote" ref={quoteRef}/>
            </div>
          </form>
          </div>
          <div className="quotes">
            {quotes.map((q, i) => (
              <div key={i}>
                <i>"{q.quote}"</i>
                <b>~ {q.name}</b>
              </div>
            ))}
          </div>
        </div>
      );

      const rootElement = ReactDOM.createRoot(document.getElementById("root"));
      rootElement.render(<App />);
    