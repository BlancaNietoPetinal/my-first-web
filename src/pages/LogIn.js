import React, {useState} from 'react'
import { Link } from 'react-router-dom'


export default function LogIn ({ props }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function handleSumbit (e) {
        e.preventDefault()
        console.log(email)
    }

    return (
        <>
         <h1> Log in! </h1> 
            <label>Correo electrónico: </label>
            <input value={email} placeholder='usuario@email.com' onChange={(e)=>setEmail(e.target.value)}></input><br/>
            
            <label>Contraseña: </label>
            <input value={password} placeholder='Contraseña' onChange={(e)=>setPassword(e.target.value)}></input><br/>

            <button onClick={(e)=>handleSumbit(e)}>Send</button><br />
            <Link to ="/signup">¿No tienes cuenta? Regístrate aquí.</Link>

        </>
    );
}