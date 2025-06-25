import { useState ,useEffect} from "react";


export default function Input(){
    const [name,setName] = useState('Devansh');
    const [lname,setlname] = useState('');

    useEffect(()=>{
        document.title = name + " " + lname;
    })

    useEffect(()=>{
        let timer = setInterval(() => {
            console.log("window width: ",window.innerWidth)
        }, 2000);

        return (clearInterval(timer))
    });
   
    return(
        <>
        <div className="section">
            <Row label="Name">
                    <input className="input" 
                    value={name} 
                    onChange={(e)=> setName(e.target.value)}/>
            </Row >
            <Row label="Last Name">
                    <input className="input"
                     onChange={(e)=> setlname(e.target.value)}/>
            </Row >
        </div>

        <h2>Hello, {name} {lname}</h2>
        
        </>
        )
    }


function Row(props){
    const{label} = props;
    return(
        <>
        <lable>{label}<br/></lable>
        {props.children}
        <hr />
        </>
    )
}
