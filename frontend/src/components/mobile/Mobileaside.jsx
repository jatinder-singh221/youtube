import React from 'react'
import styled from 'styled-components'
import FeatherIcon from 'feather-icons-react'
import {NavLink} from 'react-router-dom'

export default function Mobileaside() {
    return (
        <Nav>
            <Styledlink to= '/'>
                <FeatherIcon icon = 'home'/>
                <Sub>Home</Sub>
            </Styledlink>
            <Styledlink to= '/explore'>
                <FeatherIcon icon = 'compass'/>
                <Sub>Explore</Sub>
            </Styledlink>
            <Styledlink to= '/add'>
                <FeatherIcon icon = 'upload'/>
                <Sub>Upload</Sub>
            </Styledlink>
            <Styledlink to= '/subscription'>
                <FeatherIcon icon = 'briefcase'/>
                <Sub>Subscription</Sub>
            </Styledlink>
            <Styledlink to= '/library'>
                <FeatherIcon icon = 'book'/>
                <Sub>Library</Sub>
            </Styledlink>
        </Nav>
    )
}

const Nav = styled.nav`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 50px;
    background-color: #202020;
    bottom: 0;
    
    .active{
        background-color: #303030;
        color: #fff;
    }
`
const Styledlink = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: auto;
    width: auto;
    height: 50px;
    padding: 0 3%;
    color:#909090;
    background-color: transparent;
    text-decoration: none;

    &:hover{
        background-color: #303030;
    }
`

const Sub = styled.sub`
    font-size: 11px;
`

