import React, {useState, useContext} from 'react'
import styled from 'styled-components'
import {Img} from '../web/Webnavbar'
import Logo from '../../assests/YouTube.svg'
import { globalContext } from '../../App'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import CSRF from '../CSRF'
import Cookies from 'js-cookie'
import {Inputcover, Input, Label, Button, ALertp, Forget, New, Box} from '../web/Weblogin'

export default function Mobilelogin() {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const Value = useContext(globalContext)
    const history = useNavigate()

    const [haserror, sethaserror] = useState(false)

    const setActive = (e) =>{
        if (e.target.id === 'email'){
            let element = document.getElementById('lemail')
            if (e.target.value !== ''){
                element.classList.add('active')
            }
            else{
                element.classList.remove('active')
            }
        }
        else{
            let element = document.getElementById('lpass')
            if (e.target.value !== ''){
                element.classList.add('active')
            }
            else{
                element.classList.remove('active')
            }
        }
    }

    const Submit = (e) =>{
        e.preventDefault()
        let form = new FormData()
        form.append('username',username)
        form.append('password',password)

        axios.post('http://127.0.0.1:8000/backendauth/login/', form,{
            headers:{
                'Accept':'application/json',
                'Content-type':'application/json',
                'X-CSRFToken':Cookies.get('csrftoken')
            }
        })
        .then((response)=>{
            if (response.data['Error']){
                sethaserror(true)
            }
            else if (response.data['success']){
                Value.updateState()
                setTimeout(() => {
                    history('/')
                }, 1000);
            }
        })
    }

    return (
        <Cover>
            <Form onSubmit={Submit}>
                <CSRF />
                <Img src={Logo} alt="google logo" />
                <Inputcover>
                    <Input type="email" id='email' name = 'email' autoComplete = 'off' autoFocus  value = {username} onChange ={(e) => setusername(e.target.value)} onKeyDown ={setActive}/>
                    <Label htmlFor="email" id='lemail'>Username</Label>
                </Inputcover>
                <Inputcover>
                    <Input type="password" id = 'pass'  name = 'pass' value = {password} onChange ={(e) => setpassword(e.target.value)} onKeyDown={setActive}/>
                    <Label htmlFor="pass" id = 'lpass'>Password</Label>
                </Inputcover>
                {username !== '' && password !== ''?<Button type = 'submit'>Login</Button>: <Button type = 'button' disabled>Login</Button>}
            </Form>
            {haserror?<Box>
                    <ALertp>Check Username or Password</ALertp>
                </Box>:''}
                <Alterbox>
                    <ALterforget to = '/auth/forget'>Forget Password ?</ALterforget>
                    <New to = '/auth/register'>Create Account</New>
                </Alterbox>
        </Cover>
    )
}

export const Cover = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #000;

    .active{
        top:0;
    }

`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 0;
    padding: 0;
    margin:0;
`

export const Alterbox = styled(Box)`
    flex-direction:column;
`
export const ALterforget = styled(Forget)`
    margin: 1em 0;
`
