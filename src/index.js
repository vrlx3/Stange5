import axios from 'axios'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import {Header, Reguser, RenderPosts} from './components'



const BASE = 'https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT/'


// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGI2NTkzY2VkODRkNjAwMTcxYWJiZDIiLCJ1c2VybmFtZSI6InR3ZW50Ymxrc2J2a2pzeXZsYnZsZGZudmxnaGt1ZGZoIiwiaWF0IjoxNjIyNTYzMTMyfQ.O3crL9IJRzXNlVrw01vxfOErnlhrtmar3PGV76DgXOo"


 



const App = () => {

    
    const [token, setToken] = useState()

    function logUser () {fetch('https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT/users/login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
        user: {
        username: 'twentblksbvkjsyvlbvldfnvlghkudfh',
        password: 'dollar'
        }
        })
    }).then(response => response.json())
    .then(result => {
    console.log(result.data.token);
    setToken(result.data.token)
    })
    .catch(console.error);
    }
    

    return (
    <div id='app'>
        <Header/>
        
    
        <div id='page'>
            <h1>new world</h1>
            <button onClick={logUser}>login</button>
            <h2>This is the new world</h2>
        </div>

        <Reguser/>
        <RenderPosts/>
    </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))