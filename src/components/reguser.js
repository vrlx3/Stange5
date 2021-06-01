import React, {useState} from 'react'


const newuser = () => {
    //extract info from form below and run 
   


    // username & password



    // update token variable
    // Welcome mr. superman

    console.log('new user register attempt')
    // console.log('username ', username)
}

const Reguser = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (<div id='reguser'>
            <form onSubmit={ () => {
                //send fetch post with vars username and password to url.../register

                // save token received in somewhere // local Storage
                // 
                
                }
            
            }>
            <input id='username' type='form' placeholder='Choose Username' onChange={ (e) => {setUsername(e.target.value); console.log(username); return username }}></input>
            <p></p>
            <input id='password' type='form' placeholder='Choose Password' onChange={ (e) => {setPassword(e.target.value)}}></input>
            <p></p>
            <button type='submit' >Register</button>
            </form>
            </div>
            
    )


}

export default Reguser;
