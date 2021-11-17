import React, {useContext, useEffect} from 'react'
import {globalContext} from '../App'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

export default function Logout() {
    const Value = useContext(globalContext)
    const history = useNavigate()

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/backendauth/logout/')
        .then(()=>{
            Value.updateState()
            setTimeout(() => {
                history('/')
            }, 1000);
        })
    }, [history, Value])

    return(
        <>
        hi how are you
        </>
    )
}
