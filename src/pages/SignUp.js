import React, {useEffect, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './styles.css'



export default function Register ( {props} ) {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isPasswordValid, setIsPasswordValid] = useState(false)

    let emailRegExp = /.*@.*\..*/

    function handleSumbit (e) {
        e.preventDefault()
        
        if(!isPasswordValid || !emailRegExp.test(email)) return

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: email, password: password })
        };
        fetch('http://localhost:3050/users', requestOptions);
        navigate('/login')
    }


    function handlePasswordValidation (confirmPassword) {
        if (confirmPassword !== password) {
            setIsPasswordValid(false)
            return
        }
        setIsPasswordValid(true)
    }


    return (
        <>
         <h1> Regístrate </h1>
            <form>

                <label>Correo electrónico: </label><br/>
                <input value={email} placeholder='usuario@email.com' onChange={(e)=>setEmail(e.target.value)}></input><br/>

                <label>Contraseña: </label><br/>
                <input type="password" placeholder='Contraseña' onChange={(e)=>setPassword(e.target.value)}></input><br/>

                <label>Repite la contraseña: </label><br/>
                <input type="password" placeholder='Contraseña' onChange={(e)=>handlePasswordValidation(e.target.value)}></input><br/>

                <label>{!isPasswordValid && 'Las contraseñas no son idénticas.'}</label><br/>
                <button onClick={(e)=>handleSumbit(e)}>Send</button><br />
                <Link to ="/login">¿Tienes cuenta? Haz click aquí.</Link>

            </form>
        </>
    );
}