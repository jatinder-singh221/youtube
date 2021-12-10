import React, {useState, useContext} from 'react'
import {Cover, Form,Img, Inputcover, Input, Label, Button, Box, Forget} from './Weblogin'
import Google from '../../assests/YouTube.svg'
import axios from 'axios'
import CSRF from '../CSRF'
import Cookies from 'js-cookie'
import styled from 'styled-components'
import { globalContext } from '../../App'
import { useNavigate } from 'react-router'

export default function Webregister() {
    const [first, setfirst] = useState('')
    const [last, setlast] = useState('')
    const [user, setuser] = useState('')
    const [pass, setpass] = useState('')
    const [iserror, setiserror] = useState(false)
    const [error, seterror] = useState({})

    const history = useNavigate()
    const Value = useContext(globalContext)

    const setActive = (e) =>{
        if (e.target.id === 'f'){
            let element = document.getElementById('lfirst')
            if (e.target.value !== ''){
                element.classList.add('active')
            }
            else{
                element.classList.remove('active')
            }
        }
        else if (e.target.id === 'last'){
            let element = document.getElementById('llast')
            if (e.target.value !== ''){
                element.classList.add('active')
            }
            else{
                element.classList.remove('active')
            }
        }
        else if (e.target.id === 'email'){
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
        form.append('first_name',first)
        form.append('last_name',last)
        form.append('username',user)
        form.append('password',pass)
        axios.post('backendauth/register/', form,
            {headers:{
                'Accept':'application/json',
                'Content-type':'application/json',
                'X-CSRFToken':Cookies.get('csrftoken')
            }}
        )
        .then((response) =>{
            if (response.data.success === 'user'){
                Value.updateState()
                setTimeout(() => {
                    history('/')
                }, 1000);
            }
            else {
                setiserror(true)
                seterror(response.data)
            }
        })

    }
    return (
        <Cover>
            <Form onSubmit={Submit}>
                <CSRF />
                <Img src={Google} alt="logo" />
                <Inputcover>
                    <Input type="text" id='f' name = 'first' autoComplete = 'off' autoFocus value={first} onChange={(e)=>setfirst(e.target.value)} onKeyDown={setActive} />
                    <Label htmlFor="f" id='lfirst'>First Name</Label>
                </Inputcover>
                <Inputcover>
                    <Input type="text" id='last' name = 'last' autoComplete = 'off' value={last} onChange={(e)=>setlast(e.target.value)} onKeyDown={setActive}  />
                    <Label htmlFor="last" id='llast'>Last Name</Label>
                </Inputcover>
                <Inputcover>
                    <Input type="email" id='email' name = 'email' autoComplete = 'off'  value={user} onChange={(e)=>setuser(e.target.value)} onKeyDown={setActive} />
                    <Label htmlFor="email" id='lemail'>Username</Label>
                </Inputcover>
                <Inputcover>
                    <Input type="password" id = 'pass'  name = 'pass' value={pass} onChange={(e)=>setpass(e.target.value)} onKeyDown={setActive} />
                    <Label htmlFor="pass" id = 'lpass'>Password</Label>
                </Inputcover>
                {first !== '' && last !== '' && user !== '' && pass !== ''?
                    <Button type = 'submit'>Register</Button>:<Button type = 'button' disabled>Register</Button>}
                {iserror?<Changedbox>
                    {Object.keys(error).map((key) =>(
                        <Option key={key}>{error[key]}</Option>
                    ))}
                </Changedbox>:''}
                <Box>
                    <Forget to = '/auth/login'>Already Have Account</Forget>
                </Box>
            </Form>
        </Cover>
    )
}

export const Changedbox = styled(Box)`
    flex-direction: column;
`

export const Option = styled.option`
    color:#ff0000;
    border: 1px solid #ff0000;
    padding:0.5em 0.7em;
    margin: auto;
    border-radius: 5px;
    margin-top:0.3em
`