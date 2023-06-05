import React, {useRef, useState} from 'react'
import { Link } from 'react-router-dom'
import './styles.css'



export default function Register ( {props} ) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isPasswordValid, setIsPasswordValid] = useState(false)
    const [isRegistered,setIsRegistered] = useState(false)

    function handleSumbit (e) {
        e.preventDefault()
        if(!isPasswordValid) return
        setIsRegistered(!isRegistered)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: email, password: password })
        };
        fetch('http://localhost:3050/users', requestOptions);

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

                {/* TODO check email form */}
                <label>Correo electrónico: </label><br/>
                <input value={email} placeholder='usuario@email.com' onChange={(e)=>setEmail(e.target.value)}></input><br/>

                <label>Contraseña: </label><br/>
                <input placeholder='Contraseña' onChange={(e)=>setPassword(e.target.value)}></input><br/>

                <label>Repite la contraseña: </label><br/>
                <input placeholder='Contraseña' onChange={(e)=>handlePasswordValidation(e.target.value)}></input><br/>

                <label>{isPasswordValid ? '':'Las contraseñas no son idénticas.'}</label><br/>
                <label>{isRegistered ? 'Registrado!':''}</label><br/>
                <button onClick={(e)=>handleSumbit(e)}>Send</button><br />
                <Link to ="/login">¿Tienes cuenta? Haz click aquí.</Link>
            </form>
        </>
    );
}