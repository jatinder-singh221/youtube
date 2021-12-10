import React,{useEffect, useState} from 'react'
import styled from 'styled-components'
import {Container} from './Webhome'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function Webexplore() {
    const [catagories, setcatagories] = useState([])

    useEffect(() => {
        axios.get('backendcatagories/')
        .then((response)=>{
            setcatagories(response.data)
        })
    }, [])

    return (
            <Container>
                {catagories.map((items, index) =>{
                    return <Styledlink to={`/catagories/${items.catagory_name}`} key={index} id={index}>
                        <P id={index}>{items.catagory_name}</P>
                    </Styledlink>
                })}
            </Container>
    )
}


export const Styledlink = styled(Link)`
    height: 5em;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #202020;
    border-radius: 10px;

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
