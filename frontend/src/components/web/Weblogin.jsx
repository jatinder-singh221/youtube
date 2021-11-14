import React, {useState} from 'react'
import Google from '../../assests/YouTube.svg'
import Login from '../../assests/login.mp4'
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
            <Video src={Login} loop muted autoPlay></Video>
            <Form onSubmit={Submit}>
                <Img src={Google} alt="google logo" />
                <Inputcover>
                    <Input type="email" id='email' name = 'email' autoComplete = 'off' autoFocus  value = {username} onChange ={(e) => setusername(e.target.value)} onKeyDown ={setActive}/>
                    <Label htmlFor="email" id='lemail'>Username</Label>
                    {haserror?<Small>Invalid username</Small>:''}
                </Inputcover>
                <Inputcover>
                    <Input type="password" id = 'pass'  name = 'pass' value = {password} onChange ={(e) => setpassword(e.target.value)} onKeyDown={setActive}/>
                    <Label htmlFor="pass" id = 'lpass'>Password</Label>
                    {haserror?<Small>Invalid username</Small>:''}
                </Inputcover>
                {username !== '' && password !== ''?<Button type = 'submit'>Login</Button>: <Button type = 'button' disabled>Login</Button>}
                <Box>
                    <Forget to = '/auth/forget'>Forget Password ?</Forget>
                    <New to = '/auth/register'>Create Account</New>
                </Box>
            </Form>
        </Cover>
    )
}

export const Cover = styled.div `
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #000;

    .active{
        top:0;
    }
    .error{
        background-color: #ff0000;
    }

`

export const Video =styled.video`
    left:0;
    position: absolute;
    width: 100%;
    height: 100vh;
    object-fit: fill;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 30vw;
    border:1px solid #313131;
    margin: auto;
    min-height: 90vh;
    border-radius: 10px;
    z-index: 999;
    background-color: #181818d1;

    @media (max-width:1024px){
        width: 60vw;
        height: 50vh;
    }
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
    background-color: #181818d1;
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
    height: 2.5em;
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

export const Small = styled.small`
    color: #ff0000;
`
