import React, {useState} from 'react'
import Google from '../../assests/YouTube.svg'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export default function Weblogin() {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

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
    }

    return (
        <Cover>
            <Form onSubmit={Submit}>
                <Img src={Google} alt="google logo" />
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
                <Box>
                    <Forget to = '/auth/forget'>Forget Password ?</Forget>
                    <New to = '/auth/register'>Create Account</New>
                </Box>
        </Cover>

    )
}

export const Cover = styled.div `
    width: 30vw;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    background-color: #000;
    border:1px solid #303030;
    margin:10vh auto;
    border-radius: 10px;

    .active{
        top:0;
    }
    @media (max-width:1024px){
        width: 60vw;
        height: 50vh;
    }
`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const Img = styled.img`
    width: 80%;
    height: 10vh;
    margin:2em auto;
`

export const Inputcover = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    position: relative;
    margin: 0 auto;
`

export const Label = styled.label`
    position: absolute;
    color: #909090;
    background-color: #000;
    left: 1em;
    top:35%;
`

export const Input = styled.input`
    height: 3em;
    outline: none;
    border:1px solid #313131;
    border-radius: 5px;
    margin: 1em 0;
    background: none;
    color: #fff;
    padding-left: 1em;

    &:focus{
        border-color: #3EA6FF;
    }

    &:focus + Label{
        top:0;
        color: #3EA6FF;
    }

`

export const  Button = styled.button`
    width: 90%;
    margin: auto;
    height: 50px;
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: #3EA6FF;
    color:#fff;
    font-size: 20px;
    margin-top: 0.3em;
`
export const Forget = styled(Link)`
    text-decoration: none;
    color: #3EA6FF;
    padding: 0.6em 0.8em;
    background-color: #3ea5ff18;
    border-radius: 5px;
`

export const New = styled(Link)`
    text-decoration: none;
    padding: 0.6em 0.8em;
    background: none;
    border-radius: 5px;
    border:1px solid #3EA6FF;
    color: #3EA6FF;

    &:hover{
        background-color:#3ea5ff18 ;
    }
`

export const  Box = styled.div`
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin:1em auto;
`

export const ALertp = styled.p`
    color:#ff0000;
    border: 1px solid #ff0000;
    padding:0.5em 0.7em;
    margin: auto;
    border-radius: 5px;
`
