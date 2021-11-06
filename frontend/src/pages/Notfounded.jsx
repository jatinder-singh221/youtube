import React from 'react'
import nFounded from '../assests/notfounded.svg'
import aLeft from '../assests/icons/arrowleft.svg'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export default function Notfounded() {
    return (
        <Div>
            <Img src={nFounded} alt="404" />
            <Styledlink to = '/'><Icon src={aLeft} alt="arrowleft" /> Go To Homepage</Styledlink>
        </Div>
    )
}

const Div = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
`
const Img = styled.img`
    width: 100%;
    height:60vh;
`

const Styledlink = styled(Link)`
    text-decoration: none;
    border:none;
    padding: .9em 1.5em;
    border-radius: 5px;
    background: #3EA6FF;
    color: #fff;
    box-shadow: 0 8px 15px #202020;
    display: flex;
    align-items: center;
    font-weight:bolder;
    justify-content: space-between;

    &:active{
        box-shadow: 0 2px 5px #202020;
    }
`
const Icon = styled.img`
    width: 24px;
    height: 24px;
    padding:0 0.2em ;
`
