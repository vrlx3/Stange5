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
                
                }
            
            }>
            <input id='username' type='text' placeholder='Choose Username' onChange={ (e) => {setUsername(e.target.value)}}></input>
            <p></p>
            <input id='password' type='text' placeholder='Choose Password' onChange={ (e) => {setPassword(e.target.value)}}></input>
            <p></p>
            <button type='submit' >Register</button>
            </form>
            </div>
            
    )


}

export default Reguser;
