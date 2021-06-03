import React, {useState} from 'react'


const EditPost = () => 
{
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [postId,setPostId] = usestate('')


    const token = 'Bearer ' + localStorage.getItem("token")

    const handleSubmit =  async (ev) => {
        ev.preventDefault();
        setPostId(prop.key)

        fetch(`http://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT/posts/${postId}`, {
            method: "PATCH",
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
          }).then(response => response.json())
            .then(result => {
              console.log(result);
            })
            .catch(console.error);

    }
    return <>
    <form onSubmit={handleSubmit}> 
    
    <button type="submit">Edit Post</button>
    </form>


</>
}
