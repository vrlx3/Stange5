import React, {useState} from 'react';
import Reguser from './reguser'


const Create = () => {
    const [title, setTitle] = useState([])
    const [description, setDescription] = useState([])

    const handleSubmit =  async (ev) => {
        ev.preventDefault();
        console.log( title, description);

        const response = await fetch('https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT/posts', {
                                             method: 'POST',
                                             headers: {
                                                'Content-Type': 'application/json',
                                                'Authorization': 'Bearer'
                                            },
                                             body: JSON.stringify({
                                               post: {
                                                    title,
                                                    description   
                                             }                     
                                                    })   
                                            })
        const data = await response.json();
        console.log('data ', data);
        // setPosts([data,...posts])
        setTitle('')
        setDescription('')
    
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
                <button type="submit">Create</button>
            </form>
            </>

}

export default Create;