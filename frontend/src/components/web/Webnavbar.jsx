import React, {useContext, useState} from 'react'
import styled from 'styled-components'
import FeatherIcon from 'feather-icons-react';
import {Link} from 'react-router-dom'
import Logo from '../../assests/YouTube.svg'
import {globalContext} from '../../App'
import test from '../../assests/test.jpg'

export default function Webnavbar() {
    const Value = useContext(globalContext)

    const [showsearchresult, setshowsearchresult] = useState(false)
    const [seachValue, setseachValue] = useState('')

    const changeresult = (e) =>{
        if (e.target.value === ''){
            setshowsearchresult(false)
        }
        else{
            setshowsearchresult(true)
        }
    }

    return (
        <Header>
            <Box>
                <Cover>
                   <Icon icon = 'menu' />
                </Cover>
                <Link to = '/'><Img src = {Logo} alt="logo" /></Link>
            </Box>
                <Form>
                    <Conatiner>
                        <Search type="text" name="search" placeholder = 'Search' autoComplete = 'off' onKeyUp = {changeresult} value = {seachValue} onChange={(e) => setseachValue(e.target.value)}/>
                        <Searchbutton icon='search' />
                    </Conatiner>
                        {showsearchresult?<Ul>
                            <Li>hi</Li>
                        </Ul>:''}
                </Form>
            <Box>
                <Cover>
                    <Icon icon = 'upload' />
                </Cover>
                <Cover>
                    <Icon icon = 'bell' />
                    {Value.hasNotification ? <Bage /> : ''}
                </Cover>
                {Value.isLogin? <Profile src = {test} alt = 'userpfile'/>:
                <Button to = '/auth/login'>Sign In</Button>}
            </Box>
        </Header>
    )
}

export const Header = styled.header`
    width: 100%;
    height: 60px;
    position: fixed;
    background-color: #202020;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 999;
`

export const Box = styled.div`
    display: flex;
    align-items: center;
`

export const Cover = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding:0.2em;
    position: relative;
    margin:0 0.4em;

    &:active{
        background-color: #313131;
    }
`

export const Icon = styled(FeatherIcon)`
    color: #fff;
`

export const Img = styled.img`
    width:130px;
    height: 60px;
`

export const Bage = styled.div`
    height: 10px;
    width: 10px;
    border-radius: 10px;
    background-color: #FF0000;
    position: absolute;
    right: 0;
    top: 0;
`

export const Button = styled(Link)`
    text-decoration: none;
    color: #3EA6FF;
    border:1px solid #3EA6FF;
    padding: 0.3em 1em;
    border-radius: 5px;
    margin:0 0.4em;
`
export const Profile = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 30px;
    margin:0 0.4em;
`

const Form = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    flex: 1;
`

const Conatiner = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
`
export const Search = styled.input`
    width: 100%;
    height: 38px;
    border-radius: 5px 0 0 5px;
    border: 1px solid #313131;
    outline: none;
    background-color: #121212;
    color:#fff;
    padding-left: 1em;
`

const Searchbutton = styled(FeatherIcon)`
    height: inherit;
    color:#fff;
    background-color: #313131;
    padding:0 0.8em ;
    border-radius: 0 5px 5px 0;
`
export const Ul = styled.ul`
    position: absolute;
    width: 80%;
    margin: auto;
    background-color: #202020;
    margin-top: 45px;
    min-height: 40vh;
    overflow: hidden;
    list-style: none;
    padding: 0;
`

export const Li = styled.li`
    height: 2em;
    vertical-align: center;
    color:#fff;
    padding-left: 1em;

    &:hover{
        background-color: #383838;
    }
`

