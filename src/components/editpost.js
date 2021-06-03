import React, {useState} from 'react'


const EditPost = () => 
{
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [postId,setPostId] = useState('')


    const token = 'Bearer ' + localStorage.getItem("token")

    const handleSubmit =  async (ev, prop) => {
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
          })
          
          const data = await response.json();
          console.log('data', data)
          if (data && data.title)
          {
              const newPost = posts.map(post => {
                  if (post.id === postID) {
                      return data;
                  }
                  else {
                      return post
                  }
              })

          }
          setPosts(newPosts);
          setTitle('');
          setDescrption('');
          setPrice('');
          setPostId('')

        //   .then(response => response.json())
        //     .then(result => {
        //       console.log(result);
        //     })
        //     .catch(console.error);

    }
    return <>
    
    
    <button onClick={handleSubmit}>Edit Post</button>
    


</>
}

export default EditPost;