import React,{useState, useEffect} from 'react'
import {Container} from './Mobilehome'
import {Styledlink, P} from '../web/Webexplore'
import {ChannelLogo} from '../web/Webhome'
import axios from 'axios'

export default function MobileAllchannel() {
    const [channels, setchannels] = useState([])

    useEffect(() => {
        axios.get('backendchannel/all/')
        .then((response)=>{
            setchannels(response.data)
        })
    }, [])

    return (
        <Container>
            {channels.map((items, index) =>{
                 return <Styledlink to={`/channelview/${items.id}/about`} key={index} id={index}>
                    <ChannelLogo src={items.channel_picture} alt="logo" />
                    <P>{items.channel_name}</P>
                </Styledlink>
            })}
        </Container>
    )
}
