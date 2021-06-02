import React, { useState } from "react";

const url =  'https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT/posts'

const RenderPosts = () => {
    const [posts, setPosts] = useState();
   console.log(posts)

    useState( () => {
        const fetchPost = async () => {
            const response = await fetch(url);
            const res = await response.json();
            setPosts(res)
        }
        fetchPost ();

    }, [])
    return (
        <div>Hi</div>)
     
    
    
}

export default RenderPosts;
