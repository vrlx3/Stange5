import React, { useState } from 'react'
import ReactDOM from 'react'
import EditPost from './editpost'
import Delete from './delete'
import Create from './createpost'


const url =  'https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT/posts'

const RenderPosts = () => {
   const [posts, setPosts] = useState([]);
   console.log(posts)
   const token = 'Bearer ' + localStorage.getItem("token")

   useState( () => {
        const fetchPost = async () => {
            const response = await fetch(url, 
                {
                    method: 'GET',
                    headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                    }});
            const res = await response.json();
           
            setPosts(res.data.posts);
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


   }

   return (
    <div id='allPosts'>
        <h1>All Posts</h1>
       
        <Create/>
        {
            posts.map(post => <div key={post._id} id={post._id}> 
                        
            <h3 id='post_title'>{post.title}</h3>
            {/* <i>Description</i> */}
            <p id='post_description'>{post.description}</p>
            <p id='post_price'>Price: {post.price}</p>
            <p id='post_location'>Location: {post.location}</p>
            <p id='post_deliver'>{post.willDeliver ? 'Delivery Included' : 'Pickup Only'}</p>
            <p id='post_user'>Posted By: {post.author.username}</p>

            <EditPost  postId={post._id} className='editpost'/>
            {/* <Delete delkey={post._id}/> */}
            {post.isAuthor ? <button  onClick={(ev) => delthispost(post._id)}>Delete 3</button> : null}
            <hr></hr>
            
            
            </div>)
        }
        
    </div>
   )
    
    
}

export default RenderPosts;
