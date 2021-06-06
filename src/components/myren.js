import {BrowserRouter as Router, Route, Link } from 'react-router-dom';


const Myren = () => {
    const loggedin = localStorage.getItem("token")
    console.log('logged in ', loggedin)
    if (!!loggedin) {
        return <Link to='/myposts'>My Posts</Link>
    } else {
        return <>
             <Link to='/login'>Login</Link>
                
                <Link to='/registration'>Register</Link>
                </>
    }
}

export default Myren;
