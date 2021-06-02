import axios from 'axios'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import {Header, Reguser, RenderPosts, Create} from './components'



const BASE = 'https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT/'


// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGI2NTkzY2VkODRkNjAwMTcxYWJiZDIiLCJ1c2VybmFtZSI6InR3ZW50Ymxrc2J2a2pzeXZsYnZsZGZudmxnaGt1ZGZoIiwiaWF0IjoxNjIyNTYzMTMyfQ.O3crL9IJRzXNlVrw01vxfOErnlhrtmar3PGV76DgXOo"


 



const App = () => {

       

    return (
    <div id='app'>
        <Header/>
        
    
        <div id='page'>
            <h1>new world</h1>
           
        </div>

        <Reguser/>
        <RenderPosts/>
        <p></p>
        <Create/>
    </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))