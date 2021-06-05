import { keyword } from 'chalk';
import React, {useState} from 'react';
import Reguser from './reguser'


const DeletePost = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [postid, setPostid] = useState('')
    
  
    
   

    const token = 'Bearer ' + localStorage.getItem("token")
       

    const handleSubmit = async (postid) => {
    //    const delkey = ev.postdisc.parentElement.id
    
        
    console.log('postid ', postid)
        // ev.preventDefault();
         
            
            const response = await fetch( `https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT/posts/${postid}`, { 
                method: "DELETE",
                headers: {
                     'Content-Type': 'application/json',
                     'Authorization': token
                  }
             });
            const result = await response.json();
            console.log('result', result);
            // if (result) {
            //     const newPosts = posts.filter(post => post.id != postid);
            //     setPosts(newPosts)
            // }
        }

    return <>
            
                <button 
           

                onClick={   
                 
                    handleSubmit
                
                }
                
                >Delete</button> 
            </>

}

export default DeletePost;