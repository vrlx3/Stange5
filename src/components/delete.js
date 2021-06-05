import { keyword } from 'chalk';
import React, {useState} from 'react';
import Reguser from './reguser'


const DeletePost = (prop) => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')


    const token = 'Bearer ' + localStorage.getItem("token")
    // console.log('token is ', token)
    

    const handleSubmit = async (e) => {
    //    const delkey = ev.postdisc.parentElement.id
       
        
       
        // ev.preventDefault();
         try {
            const response = await fetch( `https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT/posts/${name}`, { 
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
           

                onClick={
                    // target = getAttribute('name');
                    
                    handleSubmit()}
                
                >Delete</button> 
            </>

}

export default DeletePost;