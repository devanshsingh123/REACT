 let customers = [];
      const capacity = 25;
      let seatsLeft = 25;

      let gRef = React.createRef();
      let nRef = React.createRef();
      let numRef = React.createRef();

       function checkOutClick(index){
        const now = new Date();
  const timeIST = now.toLocaleTimeString("en-IN", {
    timeZone: "Asia/Kolkata",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  });

  customers[index].checkOut = timeIST;
  seatsLeft += parseInt(customers[index].count);
  rootElement.render(<App />);
      }

    
      function deleteClick(index) {
      if(customers[index].checkOut === "-"){
      seatsLeft += parseInt(customers[index].count);
      }
  customers.splice(index, 1);
  rootElement.render(<App />);
}

      // Create form submit handler here
      function submitHandler(event){
      event.preventDefault();
      const now = new Date();

     


const timeIST = now.toLocaleTimeString("en-IN", {
  timeZone: "Asia/Kolkata",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: true
});

if(seatsLeft<gRef.current.value){
alert("Guest count exceeds capacity.")
return;
}

customers.unshift({
  id: customers.length,
  count: gRef.current.value,
  name: nRef.current.value,
  phone: numRef.current.value,
  checkIn: timeIST,
  checkOut: "-",
});


seatsLeft-=gRef.current.value;

gRef.current.value = "";
nRef.current.value = "";
numRef.current.value = "";

rootElement.render(<App/>)
      }

      const App = () => (
        <div className="App" style={{ textAlign: "center" }}>
          <div>
            <h2>Total Capacity: {capacity}</h2>
            <h2>Seats Left: {seatsLeft}</h2>
          </div>

          {/* Create a form here */}
          <div className="form-section">
          <form onSubmit={submitHandler}>
          <div>
          <input placeholder="Guests Count" ref={gRef}/>
          </div>
          <div>
          <input placeholder="Primary Guest Name" ref={nRef}/>
          </div>
          <div>
          <input placeholder="Phone Number" ref={numRef}/>
          </div>
          <div>
          <button>Add Entry</button>
          </div>
          </form>
          </div>

          {/* Complete table to show records of customers */}
          <table border="1px" style={{ margin: "auto" }}>
          <thead>
          <tr>
          <th>Count</th>
          <th>Name</th>
          <th>Phone</th>
          <th>Check In</th>
          <th>Check Out</th>
          <th>Status</th>
          <th>Remove Entry</th>
          </tr>
          </thead>
          <tbody>
          {customers.map((cust, index) => (
    <tr key={cust.id}>
      <td>{cust.count}</td>
      <td>{cust.name}</td>
      <td>{cust.phone}</td>
      <td>{cust.checkIn}</td>
      <td>{cust.checkOut}</td>
      <td>
        <span onClick={() => checkOutClick(index)}>Click to Checkout</span>
      </td>
      <td>
        <span onClick={() => deleteClick(index)}>Delete</span>
      </td>
    </tr>
  ))}
          </tbody>
          </table>
        </div>
      );

      const rootElement = ReactDOM.createRoot(document.getElementById("root"));
      rootElement.render(<App />);