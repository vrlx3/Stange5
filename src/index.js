import axios from 'axios'
import React from 'react'
import ReactDOM from 'react-dom'


axios.get('https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT/posts')
.then(function (response) {
    const data = response.data.data;
    const posts = data.posts;
    console.log(data)
    console.log(posts);
    console.log(posts[0])
    console.log(posts[0].description)

})
.catch(function (error) {
    console.log(error);
})



const descr = () => {
    return (
        posts[0].description 
    )
}



const App = () => {
    return (
    <div>
        <h1>new world</h1>
        <h2>This is the new world</h2>
    </div>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))