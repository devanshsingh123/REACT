import { Link } from "react-router-dom";
const Home = () => {
    return (
        <>
            <main>
                <h1>HOME PAGE</h1>
                <p>This is the home page</p>
                <Link to="/about">About</Link>&nbsp;&nbsp;
                <Link to="/Items">Items</Link>
            </main>
        </>
    )
}

export default Home;