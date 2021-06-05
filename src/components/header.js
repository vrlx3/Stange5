import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import LogOutUser from './logoutuser'

const Header = () => {
    return (
        <div id='header'>
            <div id='navbar'>
            <Link to='/'> Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/registration'>Register</Link>
            <Link to='/myposts'>My Posts</Link>
            <Link to='/allPosts'>All Posts</Link>
            <LogOutUser/>
                
               
             </div>
         </div>
    )
}

export default Header;

