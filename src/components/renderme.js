import React, { useState } from 'react'
import {EditPost, DeletePost, CreateMe} from './index'

const url =  'https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT/users/me'



const RenderMe = () => {
   const [posts, setPosts] = useState([]);
   
   const token = 'Bearer ' + localStorage.getItem("token")

   useState( () => {
        const fetchPost = async () => {
            const response = await fetch(url, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
            });
            const res = await response.json();
            //  console.log(res.data.posts)
            const all = res.data.posts
            const filtered = all.filter(x => x.active === true)
            console.log(all)
            console.log(filtered)
            setPosts(filtered);
        }
        fetchPost ();
  
   }, [])

   const delthispost = async function(target)  {
    console.log(target)

       const response = await fetch(`https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT/posts/${target}`, { 
               method: "DELETE",
               headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                 }
            });
           const result = await response.json();
           console.log('result', result);

           location.assign("/myposts")

  }

   return <>
    <CreateMe />
    <div id='mypost'>
        <h1>My Posts</h1>
        {   

           posts.map(post => <div key={post._id} id={post._id} > 
                        
            <h3 id='post_title'>{post.title}</h3>
            {/* <i>Description</i> */}
            <p id='post_description'>{post.description}</p>
            <p id='post_price'>Price: {post.price}</p>
            <p id='post_location'>Location: {post.location}</p>
            <p id='post_deliver'>{post.willDeliver ? 'Delivery Included' : 'Pickup Only'}</p>
            {/* <p id='post_user'>Posted By: {post.author.username}</p> */}
            <EditPost  className='editpost'/>
            <button  onClick={(ev) => delthispost(post._id)}>Delete 3</button>
            <hr></hr>
            </div>
            )
        }
        
    </div>
   </>
    
    
}

export default RenderMe;
