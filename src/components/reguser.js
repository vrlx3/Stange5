import React, {useState} from 'react'


const Reguser = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [registered, setRegistered] = useState(false)
    // const [token, setToken] = useState('')

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
            // setToken(result.data.token)
            localStorage.setItem("token", result.data.token)
            setRegistered(true)
          })
          .catch(console.error)
          // .then(alert('Username Alerady Taken'))
          if(registered === true) {
            alert('Thank you for registering')
          } else if(registered === false) {
            alert('Please try again user name taken')
          }
          // console.log(token)
                      
      }}>
            <input id='username' type='text' placeholder='Choose Username' value={username} onChange={ (e) => {setUsername(e.target.value)}}></input>
            <p></p>
            <input id='password' type='text' placeholder='Choose Password' minLength={8} required value={password} onChange={ (e) => { setPassword(e.target.value)}}></input>
            <p></p>
            {/* <input id='confirmpassword' type='text' placeholder='Confirm Password' value={confirmpassword} onChange={ (e) => { if(password === confirm) setPassword(e.target.value)}}></input>
            <p></p> */}
            <button type='submit' >Register</button>
            </form>
            </div>
          
    
}
    


export default Reguser;