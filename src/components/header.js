import {BrowserRouter as Router, Route, Link } from 'react-router-dom'


const Header = () => {
    return (
        <div id='header'>
            <div id='navbar'>
            <Link to='/'> Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/registration'>Register</Link>
            
                
               
             </div>
         </div>
    )
}

export default Header;

