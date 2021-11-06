import React, {useContext} from 'react'
import styled from 'styled-components'
import reorder from '../assests/icons/reorder.svg'
import logo from '../assests/YouTube.svg'
import search from '../assests/icons/search.svg'
import upload from '../assests/icons/upgrad.svg'
import bell from '../assests/icons/bell.svg'
import test from '../assests/test.jpg'
import {globalContext} from '../App'


export default function Navbar() {
    const value = useContext(globalContext)

    return (
        <Header>
            <Cover>
                <Iconcover>
                    <Icon src = {reorder} alt = 'menu' />
                </Iconcover>
                <Logo src={logo} alt="logo" />
            </Cover>
            <Form>
                <Box>
                <Input type="search" name="search" list = 'search' placeholder='Search' autoComplete = 'off' />
                <Button><img src = {search} alt="search" /></Button>
                </Box>
            </Form>
            <Cover>
                <Iconcover>
                    <Icon src = {upload} alt = 'upload' />
                </Iconcover>
                <Iconcover>
                    <Icon src = {bell} alt = 'upload' />
                </Iconcover>
                {value.isLogin? <Profile src={test} alt="profile" />:
                <Sign>Sign in</Sign> }
            </Cover>
        </Header>
    )
}

const Header = styled.header`
    width: 100%;
    height: 60px;
    background-color: #202020;
    display: flex;
    align-items: center;
    justify-content: space-between;
` 

const Iconcover = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding:0.2em;

    &:active{
        background-color: #373737;
    }
`
const Icon = styled.img`
    width: 24px;
    height: 24px;
`

const Cover = styled.div`
    display: flex;
    align-items: center;
    margin:0 0.3em ;
`

const Logo = styled.img`
    width: 130px;
`
const Form = styled.form`
    display:flex;
    align-items: center;
`

const Box = styled.div`
    width: auto;
    display: flex;
`

const Input = styled.input`
    min-width:540px;
    height: 2.3em;
    border-radius: 5px 0  0 5px;
    outline:none;
    border:none;
    padding-left:1em;
    background-color: #121212;

`
const Button = styled.button`
    height: inherit;
    padding:0.1em 0.9em;
    border:none;
    outline: none;
    border-radius: 0 5px 5px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #373737;
    font-weight: bolder;
`

const Profile = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 30px;
    margin:0 0.5em;
`
const Sign = styled.button`
    border: 1px solid #3EA6FF;
    border-radius: 5px;
    outline: none;
    background:none;
    color:#3EA6FF;
    padding:.4em 1.5em;
`