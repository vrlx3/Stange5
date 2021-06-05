import { keyword } from 'chalk';
import React, {useState} from 'react';
import Reguser from './reguser'


const DeletePost = (props) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [postid, setPostid] = useState('')
    
  
    
   

    const token = 'Bearer ' + localStorage.getItem("token")
       

    const handleSubmit = async (props) => {
    //    const delkey = ev.postdisc.parentElement.id
    
        
    await console.log('postidfgfgfg ', props.delkey)
        // ev.preventDefault();
         
            
            const response = await fetch( `https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT/posts/`, { 
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

    return <button id='delbutton' onClick={handleSubmit} delkey={123}>Delete 2</button>
          
        
}

export default DeletePost;