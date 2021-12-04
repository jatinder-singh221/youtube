import React, {useEffect, useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {Styledlink, } from '../web/Webaside'
import {Icon, Cover} from '../web/Webnavbar'
import { Link } from 'react-router-dom'

export default function Mobilelibrary() {

    const [Library, setLibrary] = useState([])


    useEffect(() => {
        axios.get('http://127.0.0.1:8000/backendlibrary/')
        .then((response) =>{
            setLibrary(response.data)
        })
    }, [])
    return (
        <Container>
            <Make>
                {Library.length !== 0?Library.map((items, index) =>{
                 return <Slink to='/video/id' key={index} id={index} >
                    <P id={index}>{items.name}</P>
                </Slink>
                }):<P>No Items in Library</P>}
            </Make>
            <Styledlink to = '/history'><Cover><Icon icon='clock' /></Cover> History</Styledlink>
            <Styledlink to = '/watch-later'><Cover><Icon icon='disc' /></Cover> Watch later</Styledlink>
            <Styledlink to = '/liked'><Cover><Icon icon='thumbs-up' /></Cover> Liked</Styledlink>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding:0.3em 0.6em;
    padding-top: 70px;
`

const Make = styled.div`
    max-width: 92vw;
    height: 15vh;
    background-color: transparent;
    margin:0.5em 0;
    display: flex;
    overflow: auto;
    &::-webkit-scrollbar{
        display: none;
    }
`

const Slink = styled(Link)`
    text-decoration: none;
    height: 100%;
    min-width: 110px;
    display: flex;
    padding:0 2em;
    align-items: center;
    justify-content: center;
    background-color: #202020;
    margin:0 0.2em ;
    border-radius: 10px;


`

const P = styled.p`
    color:#fff;
    font-size: 20px;

`

