import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function LogIn ({ props }) {
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLogged, setIsLogged] = useState(false)

    
    async function handleSumbit (e) {
        e.preventDefault()

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({name: email, password: password})
        }
        

        let datafetch = await fetch('http://localhost:3050/users/login', requestOptions)
        .then(response => response.json())
        .then(response => {
            console.log(response.message)
            if (response.message == 'allowed'){
                setIsLogged(true)
                return
            } else {
                setIsLogged(false)}
            })
        console.log(isLogged)
        if (isLogged) {
            navigate('/logged') 
            return
        }
        };


    return (
        <>
         <h1> Log in! </h1> 
            <label>Correo electrónico: </label>
            <input value={email} placeholder='usuario@email.com' onChange={(e)=>setEmail(e.target.value)}></input><br/>
            
            <label>Contraseña: </label>
            <input type="password" value={password} placeholder='Contraseña' onChange={(e)=>setPassword(e.target.value)}></input><br/>

            <button onClick={(e)=>handleSumbit(e)}>Send</button><br />
            <Link to ="/signup">¿No tienes cuenta? Regístrate aquí.</Link>
        </>
    );
}