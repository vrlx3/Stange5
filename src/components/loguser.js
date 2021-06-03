import React, {useState} from 'react'


const LogUser = () => 
{
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const handleSubmit =async (ev) => 
    {
        ev.preventDefault();
        console.log( username, password);
        fetch('https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT/users/login', {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              user: {
                username,
                password
              }
            })
          }).then(response => response.json())
            .then(result => {
              console.log(result.data.token);
              localStorage.setItem("token", result.data.token)
            })
            .catch(console.error);
        
        setUsername('')
        setPassword('')
    
    }

    return <>
    <form onSubmit={handleSubmit}>
        <input 
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(ev) => setUsername(ev.target.value)}            
            />
        <input
            type="text"
            placeholder="Enter Password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            />
       
        <button type="submit">Login</button>
    </form>
    </>
}


export default LogUser;