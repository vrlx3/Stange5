import React, { useState } from 'react'
import ReactDOM from 'react'


const url =  'https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT/posts'

const RenderPosts = () => {
   const [posts, setPosts] = useState([]);
   const [allposts, setAllposts] = useState([])
   console.log(posts)

   useState( () => {
        const fetchPost = async () => {
            const response = await fetch(url);
            const res = await response.json();
           
            setPosts(res.data.posts);
        }
        fetchPost ();
  
   }, [])

   return (
    <div id='allPosts'>
        <h1>All Posts</h1>
        {
            posts.map(post => <div key={post._id}> 
                        
            <h3 id='post_title'>{post.title}</h3>
            {/* <i>Description</i> */}
            <p id='post_description'>{post.description}</p>
            <p id='post_price'>Price: {post.price}</p>
            <p id='post_location'>Location: {post.location}</p>
            <p id='post_deliver'>{post.willDeliver ? 'Delivery Included' : 'Pickup Only'}</p>
            <p id='post_user'>Posted By: {post.author.username}</p>
            <hr></hr>
            
            
            </div>)
        }
        
    </div>
   )
    
    
}

export default RenderPosts;
