import React, {useState} from 'react'


const Reguser = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')

    const handleSubmit = () =>{

    }

    return <div id='reguser'>
            <form onSubmit={async  (ev) => {
        ev.preventDefault();
        fetch('https://strangers-things.herokuapp.com/api/2104-UIC-RM-WEB-FT/users/register', {
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
            setToken(result.data.token)
            localStorage.setItem("token", token)
          })
          .catch(console.error);
          console.log(token)
                      
      }}>
            <input id='username' type='text' placeholder='Choose Username' value={username} onChange={ (e) => {setUsername(e.target.value)}}></input>
            <p></p>
            <input id='password' type='text' placeholder='Choose Password' value={password} onChange={ (e) => {setPassword(e.target.value)}}></input>
            <p></p>
            <button type='submit' >Register</button>
            </form>
            </div>
          
    
}
    


export default Reguser;