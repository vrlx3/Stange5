import axios from 'axios'
import React from 'react'
import ReactDOM from 'react-dom'
import {Header} from './components'


const BASE = 'https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT/posts'
const BASE2 = 'https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT'

const TOKEN = '' // Some token


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

axios.get(BASE)
.then(function (response) {
    console.log(response)
    return response
    
})


const App = () => {
    return (
    <div id='app'>
        <Header/>
    
        <div id='page'>
            <h1>new world</h1>
            <h2>This is the new world</h2>
        </div>
    </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))