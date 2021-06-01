import { useState } from "react";

const url =  'https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT/posts'

const RenderPosts = () => {
    const [posts, setPosts] = useState([]);

    useState( () => {
        const fetchPost = async () => {
            const response = await fetch(url);
            const resp2 = await response.json();
            console.log('data ', resp2)
        }
        fetchPost ();
    }, [])


    return <>
        <div>RenderPosts function ran</div>
    </>
}

export default RenderPosts;

