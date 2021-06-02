// import React, {useState} from 'react';

// const Create = () => {
//     const [title, setTitle] = useState([])
//     const [description, setDescription] = useState([])

//     const handleSubmit = (ev) => {
//         ev.preventDefault();
//         console.log('title, description ', title, description);

//         const response = async fetch('https://strangers-things.herokuapp.com/api/COHORT-NAME/users/register', {
//                                              method: 'POST',
//                                              header: {
//                                                         'Content-Type': 'application/json',
//                                                         'Authorization': Bearer {token}               
//                                                         },
//                                             body: JSON.stringify({
//                                                                     title,
//                                                                     description,                        
//                                                                     })   
//                                             })
//         const data = await response.json();
//         console.log('data ', data);
//         // setPosts([data,...posts])
//         setTitle('')
//         setDescription('')
    
//     }

//     return <>
//             <h3>Create a Post</h3>
//             <form onSubmit={handleSubmit}>
//                 <input 
//                     type="text"
//                     placeholder="Title"
//                     value="title"
//                     onChange={(ev) => setTitle(ev.target.value)}            
//                     />
//                 <input
//                     type="text"
//                     placeholder="Description"
//                     value="description"
//                     onChange={(ev) => setDescription(ev.target.value)}
//                     />
//             </form>
//             </>

// }

// export default Create;