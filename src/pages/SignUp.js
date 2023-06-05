import React, {useRef, useState} from 'react'
import { Link } from 'react-router-dom'
import './styles.css'



export default function Register ( {props} ) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isPasswordValid, setIsPasswordValid] = useState(false)

    function handleSumbit (e) {
        // e.preventDefault()
    }

    function handlePasswordValidation (confirmPassword) {
        console.log(confirmPassword)
        console.log(password)
        console.log(isPasswordValid)
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

            {/* TODO check passwords */}
            <label>Contraseña: </label><br/>
            <input placeholder='Contraseña' onChange={(e)=>setPassword(e.target.value)}></input><br/>

            <label>Repite la contraseña: </label><br/>
            <input placeholder='Contraseña' onChange={(e)=>handlePasswordValidation(e.target.value)}></input><br/>

            <label>{isPasswordValid ? '':'Las contraseñas no son idénticas.'}</label><br/>
            <button onClick={(e)=>handleSumbit(e)}>Send</button><br />
            <Link to ="/login">¿Tienes cuenta? Haz click aquí.</Link>
            </form>
        </>
    );
}