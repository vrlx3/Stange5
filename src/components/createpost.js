import React, {useState} from 'react';
import Reguser from './reguser'


const Create = () => {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')


    const token = 'Bearer ' + localStorage.getItem("token")
    // console.log('token is ', token)

    const handleSubmit =  async (ev) => {
        ev.preventDefault();
        console.log( title, description);

        const response = await fetch('https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT/posts', {
                                method: 'POST',
                                headers: {
                                'Content-Type': 'application/json',
                                'Authorization': token
                                },
                                body: JSON.stringify({
                                post: {
                                title,
                                description,
                                price,
                                                       
                             }                     
                         })   
                     })
        const data = await response.json();
        console.log('data ', data);
        // setPosts([data,...posts])
        setTitle('')
        setDescription('')
        setPrice('')
    
    }

    return <>
            <h3>Create a Post</h3>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(ev) => setTitle(ev.target.value)}            
                    />
                <input
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(ev) => setDescription(ev.target.value)}
                    />
                <input
                    type="text"
                    placeholder="Price"
                    value={price}
                    onChange={(ev) => setPrice(ev.target.value)}
                    />
                    
                <button type="submit">Create</button>
            </form>
            
            </>

}

export default Create;