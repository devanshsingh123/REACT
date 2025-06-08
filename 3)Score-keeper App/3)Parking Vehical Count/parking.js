 let car=0;
    let bike=0;
    let scooty=0;
    let bicycle = 0;
      // Create handlers to increase and decrease vehicle count here
      function increaseHandler(val){
      if(val === "Car"){
      car+=1;
      }
      if(val === "Bike"){
      bike+=1;
      }
      if(val === "Scooty"){
      scooty+=1;
      }
      if(val === "Bicycle"){
      bicycle+=1;
      }
      rootElement.render(<App />);
      }

      function decreaseHandler(val){
      if(car && val === "Car"){
      car-=1;
      }
      if(bike && val === "Bike"){
      bike-=1;
      }
      if(scooty && val === "Scooty"){
      scooty-=1;
      }
      if(bicycle && val === "Bicycle"){
      bicycle-=1;
      }
      rootElement.render(<App />);
      }

      const App = () => (
        <>
          <p>List of all the vehicles count in the parking.</p>
          <ol>
            <li>
              <p>
                <b>Car: {car}</b> &emsp;
                {/* Add increase and decrease count buttons here */}
                <button onClick={()=>increaseHandler("Car")}>Increase</button>&emsp;<button onClick={()=>decreaseHandler("Car")}>Decrease</button>
              </p>
            </li>
            <li>
              <p>
                <b>Bike: {bike}</b> &emsp;
                {/* Add increase and decrease count buttons here */}
                <button onClick={()=>increaseHandler("Bike")}>Increase</button>&emsp;<button onClick={()=>decreaseHandler("Bike")}>Decrease</button></p>
            </li>
            <li>
              <p>
                <b>Scooty: {scooty}</b> &emsp;
                {/* Add increase and decrease count buttons here */}
                <button onClick={()=>increaseHandler("Scooty")}>Increase</button>&emsp;<button onClick={()=>decreaseHandler("Scooty")}>Decrease</button></p>
            </li>
            <li>
              <p>
                <b>Bicycle: {bicycle}</b> &emsp;
                {/* Add increase and decrease count buttons here */}
                <button onClick={()=>increaseHandler("Bicycle")}>Increase</button>&emsp;<button onClick={()=>decreaseHandler("Bicycle")}>Decrease</button></p>
            </li>
          </ol>
        </>
      );

      const rootElement = ReactDOM.createRoot(document.getElementById("root"));
      rootElement.render(<App />);