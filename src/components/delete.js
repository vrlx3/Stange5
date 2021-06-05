import { keyword } from 'chalk';
import React, {useState} from 'react';
import Reguser from './reguser'


const DeletePost = ({name}) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [postid, setPostid] = useState('')
    
  
    
    console.log('postid ', postid)

    const token = 'Bearer ' + localStorage.getItem("token")
       

    const handleSubmit = async (name) => {
    //    const delkey = ev.postdisc.parentElement.id
       
        
       
        // ev.preventDefault();
         try {
            const response = await fetch( `https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT/posts/${postid}`, { 
                method: "DELETE",
                headers: {
                     'Content-Type': 'application/json',
                     'Authorization': token
                  }
             })
            const result = await response.json();
            console.log(result);
         } catch (error) {
             console.error(error); (edited) 
         }
        }

    return <>
            
                <button 
           

                onClick={ (event) => handleSubmit()}
                
                >Delete</button> 
            </>

}

export default DeletePost;