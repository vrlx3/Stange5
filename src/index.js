import axios from 'axios'
import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import {Header} from './components'


const BASE = 'https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT/'




// axios.get(BASE)
// .then(function (response) {
//     const data = response.data.data;
//     const posts = data.posts;
//     console.log('post', posts)
//     console.log(posts[0])
//     console.log(posts[0].description)

// })
// .catch(function (error) {
//     console.log(error);
// })

// await axios.post('https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT/users/register', {
   
//       uRegister,
//     {
//         headers: {
//             Content-Type :'application/json' 
//         },

//         body: {
//             user: {
//                 username: 'twenty',
//                 password: 'dollar'
//             }
//         }

//     } 
// }
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
    
    console.log(token)
    return (
    <div id='app'>
        <Header/>
        
    
        <div id='page'>
            <h1>new world</h1>
            <button onClick={logUser}>login</button>
            <h2>This is the new world</h2>
        </div>
    </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))