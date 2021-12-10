import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {Container, ChannelLogo} from './Webhome'
import {Styledlink, P} from './Webexplore'
import { useParams } from 'react-router-dom'

export default function Webplaylist() {
    const [catagories, setcatagories] = useState([])
    const {id} = useParams()

    useEffect(() => {
        axios.get(`/backendplaylist/playlist/${id}/`)
        .then((response)=>{
            setcatagories(response.data)
        })
    }, [id])
    
    return (
        <Container style={{'margin-top':'10px'}}>
            {catagories.length !== 0?catagories.map((items, index) =>{
                return <Styledlink to={`/`} key={index} id={index}>
                    <ChannelLogo src={items.channel_is.channel_picture} alt="logo" />
                    <P id={index}>{items.name}</P>
                </Styledlink>
            }):<P>No playlist</P>}
        </Container>
    )
}
