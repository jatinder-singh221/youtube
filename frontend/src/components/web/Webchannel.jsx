import React, {useEffect, useState} from 'react'
import {Container, ChannelLogo} from './Webhome'
import {Styledlink, P} from '../web/Webexplore'
import axios from 'axios'


export default function Webchannel() {
    const getChannel = (e) =>{
        let id = e.target.id
    }
    const [channels, setchannels] = useState([])
    
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/backendchannel/all/')
        .then((response)=>{
            setchannels(response.data)
        })
    }, [])
    return (
        <Container>
            {channels.map((items, index) =>{
                return <Styledlink to='/channels/id' key={index} id={index} onClick={getChannel}>
                    <ChannelLogo src={items.channel_picture} alt="logo" />
                    <P id={index}>{items.channel_name}</P>
                </Styledlink>
            })}
    </Container>
    )
}
