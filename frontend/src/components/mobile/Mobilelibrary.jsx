import React, {useEffect, useState} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {Styledlink, } from '../web/Webaside'
import {Icon, Cover} from '../web/Webnavbar'
import { Link } from 'react-router-dom'

export default function Mobilelibrary() {

    const [Library, setLibrary] = useState([])

    const getlibrary = (e) =>{
        let id = e.target.id
    }

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/backendlibrary/')
        .then((response) =>{
            setLibrary(response.data)
        })
    }, [])
    return (
        <Container>
            <Div>
                {Library.length !== 0?Library.map((items, index) =>{
                return <Slink to='/video/id' key={index} id={index} onClick={getlibrary}>
                    <P id={index}>{items.name}</P>
                </Slink>
                }):<P>No Items in Library</P>}
            </Div>
            <Styledlink to = '/histroy'><Cover><Icon icon='clock' /></Cover> History</Styledlink>
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

const Div = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    height: 15vh;
    overflow: auto;
    &::-webkit-scrollbar {
        display: none;
    }
    margin:1em 0;
`

const Slink = styled(Link)`
    text-decoration: none;
    height: 100%;
    width: 30vw;
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

