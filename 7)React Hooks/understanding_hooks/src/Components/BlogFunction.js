import { useState ,useEffect} from "react";


export default function Blogs(){



   
    return(
        <>
        <div className="section">
            <form>
            <Row label="Title">
                    <input className="input" />
            </Row >
            <Row label="Content">
                    <input className="input"/>
            </Row > 
            <div style={{textAlign:"center"}}>
                <button>Add</button>
            </div>
            
            </form>
        </div>

        <h2>Hello</h2>
        
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
