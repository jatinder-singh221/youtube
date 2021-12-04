import React,{useState, useEffect} from 'react'
import {ChannelLogo} from '../web/Webhome'
import {Container} from './Mobilehome'
import {Styledlink, P} from '../web/Webexplore'
import axios from 'axios'

export default function Mobilesub() {
    const [subscribed, setsubscribed] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/backendsubscriber/')
        .then((response) =>{
            setsubscribed(response.data)
        })
    }, [])

    return (
        <Container>
            {subscribed.length !== 0?subscribed.map((items, index) =>{
                return <Styledlink to={`/channelview/${items.channel.id}/about`} key={index} id={index} >
                    <ChannelLogo src={items.channel.channel_picture} alt="logo" />
                    <P id={index}>{items.channel.channel_name}</P>
                </Styledlink>
            }):<P>No channel Subscribed</P>}
        </Container>
    )
}
