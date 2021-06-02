import React, {useState} from 'react'


const Reguser = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (<div id='reguser'>
            <form onSubmit={  (ev) => {
                //send fetch post with vars username and password to url.../register

                // save token received in somewhere // local Storage
                // 
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
                        
                      console.log(result);
                      
                    })
                    
                    .catch(console.error);
                    // .then(return result)
                    // const token = response.data.token;
                    // localStorage.setItem(“token”, token)
                    // console.log('user/pass ', username, password)
                    // console.log(response.data.token)
                
            }}>
            <input id='username' type='text' placeholder='Choose Username' value={username} onChange={ (e) => {setUsername(e.target.value)}}></input>
            <p></p>
            <input id='password' type='text' placeholder='Choose Password' value={password} onChange={ (e) => {setPassword(e.target.value)}}></input>
            <p></p>
            <button type='submit' >Register</button>
            </form>
            </div>
            
    )

}

export default Reguser;
