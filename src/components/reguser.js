import React, {useState} from 'react'


const Reguser = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (<div id='reguser'>
            <form onSubmit={ () => {
                //send fetch post with vars username and password to url.../register

                // save token received in somewhere // local Storage
                // 
            
                fetch('https://strangers-things.herokuapp.com/api/COHORT-NAME/users/register', {
                    method: "POST",
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      user: {
                        username: document.getElementById('username'),
                        password: document.getElementById('password')
                      }
                    })
                  }).then(response => response.json())
                    .then(result => {
                      console.log(result);
                    })
                    .catch(console.error);
            
            }}>
            <input id='username' type='text' placeholder='Choose Username' onChange={ (e) => {setUsername(e.target.value)}}></input>
            <p></p>
            <input id='password' type='form' placeholder='Choose Password' onChange={ (e) => {setPassword(e.target.value)}}></input>
            <p></p>
            <button type='submit' >Register</button>
            </form>
            </div>
            
    )

}

export default Reguser;
