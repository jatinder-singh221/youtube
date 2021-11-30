import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import {Container} from './Webhome'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Webexplore() {
    const [catagories, setcatagories] = useState([])

    const getCatagories = (e) =>{
        let id = e.target.id
    }
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/backendcatagories/')
        .then((response)=>{
            setcatagories(response.data)
        })
    }, [])

    return (
            <Container>
                {catagories.map((items, index) =>{
                    return <Styledlink to='/catagories/id' key={index} id={index} onClick={getCatagories}>
                        <P id={index}>{items.catagory_name}</P>
                    </Styledlink>
                })}
            </Container>
    )
}


export const Styledlink = styled(Link)`
    width: auto;
    height: 5em;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #202020;
    border-radius: 10px;
    min-width: 310px;

    &:hover{
        background-color: #000;
}

    @media(max-width:540px){
        border-radius: 0;
        margin: 0.2em 0em;
    }
`
export const P = styled.p`
    color:#909090;
    font-size: 20px;
    text-transform: capitalize;
    cursor: pointer;
`
