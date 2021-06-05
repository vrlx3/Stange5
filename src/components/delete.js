import { keyword } from 'chalk';
import React, {useState} from 'react';
import Reguser from './reguser'


const Delete = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')


    const token = 'Bearer ' + localStorage.getItem("token")
    // console.log('token is ', token)

    const handleSubmit =  async (prop) => {
        // const (key) = prop
        console.log('to del ', key)
        

        const response = await fetch('https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT/posts', {
                                method: 'DELETE',
                                headers: {
                                'Content-Type': 'application/json',
                                'Authorization': token
                                },
                                
                     })
        const del = await response.json();
        console.log('data ', del);
        // setPosts([data,...posts])
       
    
    }

    return <>
            
                <button onClick={handleSubmit}>Delete</button> 
            </>

}

export default Delete;