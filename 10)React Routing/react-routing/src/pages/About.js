import { Link } from "react-router-dom";

const About = ()=>{
    return(
        <>
        <main>
        <h1>ABOUT</h1>
        <p>This is the about page.</p>
        <Link to="/">back</Link>
        </main>
        </>
    )
}

export default About;