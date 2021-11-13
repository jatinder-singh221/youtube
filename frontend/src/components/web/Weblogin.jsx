import React from 'react'
import Google from '../../assests/Google.svg'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export default function Weblogin() {
    return (
        <Cover>
            <Form>
                <Img src={Google} alt="google logo" />
                <Inputcover>
                    <Input type="email" id='email' name = 'email' autoComplete = 'off' autoFocus/>
                    <Label htmlFor="email">Username</Label>
                </Inputcover>
                <Inputcover>
                    <Input type="password" id = 'pass'  name = 'pass'/>
                    <Label htmlFor="pass">Password</Label>
                </Inputcover>
                <Button>Login</Button>
                <Box>
                    <Forget to = 'auth/forget'>Forget Password ?</Forget>
                    <New to = 'auth/register'>Create Account</New>
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
    justify-content: center;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 40vw;
    height: auto;
    border:1px solid #313131;
    margin: auto;
    border-radius: 10px;
`

export const Img = styled.img`
    width: 100%;
    height: 20vh;
    margin:1em 0;
`

export const Inputcover = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: auto;
    position: relative;
`

export const Label = styled.label`
    position: absolute;
    color: #909090;
    background-color: #181818;
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
