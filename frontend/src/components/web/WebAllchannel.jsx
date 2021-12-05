import React, {useEffect, useState} from 'react'
import {Container, ChannelLogo} from './Webhome'
import {Styledlink, P} from './Webexplore'
import axios from 'axios'


export default function WebAllchannel() {
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
                return <Styledlink to={`/channelview/${items.id}/about`} key={index} id={index} >
                    <ChannelLogo src={items.channel_picture} alt="logo" />
                    <P>{items.channel_name}</P>
                </Styledlink>
            })}
        </Container>
    )
}
