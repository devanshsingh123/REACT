
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

const TableApp = () => {
    const students = [{
        Name: "Devansh",
        Subject: "Math",
        Marks: 98
    }, {
        Name: "Sahil",
        Subject: "Math",
        Marks: 99
    }, {
        Name: "Ravi",
        Subject: "Math",
        Marks: 99
    }]

    let nodeArray = Object.keys(students[0])


    return (<>
    <h1>Student Details:</h1>
        <table>
            <thead>
                <tr>
                <th>NAME</th>
                <th>SUBJECT</th>
                <th>MARKS</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student, index) => (
                <tr key={index}>
                    <td>{student.Name}</td>
                    <td>{student.Subject}</td>
                    <td>{student.Marks}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>)
}

const CarApp = ()=>{

    let cars = [
        {img:"https://www.bmw.cc/content/dam/bmw/common/all-models/m-series/series-overview/bmw-m-series-seo-overview-ms-04.jpg",
        name:"BMW M",
        avg:"10"   
        },
        {img:"https://d1lhv9gpjooyls.cloudfront.net/eyJvdXRwdXRGb3JtYXQiOiJwbmciLCJidWNrZXQiOiJ6YWxhLXByb2R1Y3Rpb24iLCJrZXkiOiJhY2NvdW50LTE5XC8xNjQ2Mzg4Mjk2NjI4XzQyMzkyOVwvQTIxMDg5OF9sYXJnZS5qcGciLCJlZGl0cyI6eyJyb3RhdGUiOm51bGwsInJlc2l6ZSI6eyJoZWlnaHQiOjEwODAsIndpZHRoIjoxMDgwLCJmaXQiOiJpbnNpZGUiLCJiYWNrZ3JvdW5kIjp7InIiOjI1NSwiZyI6MjU1LCJiIjoyNTUsImFscGhhIjoxfX19fQ==",
        name:"Audi Q5",
        avg:"13"   
        },
        {img:"https://tdc-prod.ams3.digitaloceanspaces.com/3322c771-cec7-439e-b082-33195baf98f7.jpg",
        name:"BENTAYGA EBW MULLINER",
        avg:"7.6"   
        }
    ]

    return(
        <>
        <h1>Car Details:</h1>
        <table className="tab">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Average</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {cars.map((cars,index)=>
                (
                   <tr>
                    <td>{cars.name}</td>
                    <td>{cars.avg}</td>
                    <td><img src={cars.img} /></td>
                   </tr>
                ))}
            </tbody>
        </table>
        </>
    )

}


//Conditional Rendering
const App = ()=>{
    let showCars = false;
    if(showCars){
        return (
        <CarApp/>
    )
    }else{
    return(
        <TableApp/>
    )
}
}


ReactDOM.createRoot(document.getElementById("root")).render(<App />);
