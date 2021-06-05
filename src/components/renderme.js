import React, { useState } from 'react'
import {EditPost, DeletePost} from './index'
import axios from 'axios'





const url =  'https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT/users/me'



const RenderMe = (props) => {
   const [posts, setPosts] = useState([]);
   
   const token = 'Bearer ' + localStorage.getItem("token")

   let deletePost = async function({_id}){
    await axios.delete(`https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT/posts/${_id}`, {
        headers: {
            Authorization: token
        }
    })
}

   useState( () => {
        const fetchPost = async () => {
            const response = await fetch(url, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
            });
            const res = await response.json();
            await console.log(res.data.posts)
           
            setPosts(res.data.posts);
        }
        fetchPost ();
  
   }, [])

   return <>
    <div id='mypost'>
        <h1>My Posts</h1>
        {
            posts.map(post => <div key={post._id} > 
                        
            <h3 id='post_title'>{post.title}</h3>
            {/* <i>Description</i> */}
            <p id='post_description'>{post.description}</p>
            <p id='post_price'>Price: {post.price}</p>
            <p id='post_location'>Location: {post.location}</p>
            <p id='post_deliver'>{post.willDeliver ? 'Delivery Included' : 'Pickup Only'}</p>
            <p id='post_user'>Posted By: {post.author.username}</p>

            <EditPost  className='editpost'/>
            <button onClick={()=>{deletePost(post._id)}}>delete post</button>
            <DeletePost/> 
            <hr></hr>
            
            
            </div>)
        }
        
    </div>
   </>
    
    
}

export default RenderMe;
