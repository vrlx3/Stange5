import React, {useState} from 'react'

const LogOutUser = () => 
{
    const handleSubmit =  async (ev) => 
    {
        ev.preventDefault();
        localStorage.setItem("token", '')
    }
  
   
    return <>
    <form onSubmit={handleSubmit}>
    
        <button type="submit">Log Out</button>
    </form>
    </>
}

export default LogOutUser