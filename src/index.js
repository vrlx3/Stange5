import axios from 'axios'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import {Header, Reguser, RenderPosts, Create, LogUser, LogOutUser} from './components'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'



const BASE = 'https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT/'


// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGI2NTkzY2VkODRkNjAwMTcxYWJiZDIiLCJ1c2VybmFtZSI6InR3ZW50Ymxrc2J2a2pzeXZsYnZsZGZudmxnaGt1ZGZoIiwiaWF0IjoxNjIyNTYzMTMyfQ.O3crL9IJRzXNlVrw01vxfOErnlhrtmar3PGV76DgXOo"


{/* <Router path ='/puppies' render={()=> < Puppies />} />  */}



const App = () => {

       

    return (
        <Router>
    <div id='app'>
        <Header/>
        
    
        <div id='page'>


            
            
           
            <div>Welcome to Stranger Things</div>
            {/* <Link to='/posts'>Register</Link> */}
            
       
           
        </div>

        
        <Route path ='/registration' component={Reguser}/>
        {/* <Router path ='/puppies' render={()=> < Puppies />} />  */}
        <Route path ='/login' component={LogUser}/>
     
        <Create/>
        <RenderPosts/>
        <LogOutUser/>
        <p></p>
        
    </div>

    </Router>
    )

}

ReactDOM.render(<App/>, document.getElementById('root'))