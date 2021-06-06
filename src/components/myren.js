import {BrowserRouter as Router, Route, Link } from 'react-router-dom';
import React,{useEffect, useState} from 'react'



const Myren = () => {

    const [userState, setUserState] = useState(!!localStorage.getItem("token"))

    // useEffect(userState)
   
    

    console.log('logged in ', userState)

    if (!!userState) {
        return <Link to='/myposts'>My Posts</Link>
    } else if (!userState) {
        return <>
             <Link to='/login'>Login</Link>
                
                <Link to='/registration'>Register</Link>
                </>
    }
}

export default Myren;
