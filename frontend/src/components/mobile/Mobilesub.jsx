import React,{useState, useEffect} from 'react'
import {Container, ChannelLogo} from '../web/Webhome'
import {Styledlink, P} from '../web/Webexplore'
import axios from 'axios'

export default function Mobilesub() {
    const [subscribed, setsubscribed] = useState([])

    const getCatagories = (e) =>{
        let id = e.target.id
    }

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/backendsubscriber/')
        .then((response) =>{
            setsubscribed(response.data)
        })
    }, [])

    return (
        <Container>
            {subscribed.length !== 0?subscribed.map((items, index) =>{
                return <Styledlink to='/channel/id' key={index} id={index} onClick={getCatagories}>
                    <ChannelLogo src={items.channel.channel_picture} alt="logo" />
                    <P id={index}>{items.channel.channel_name}</P>
                </Styledlink>
            }):<P>No channel Subscribed</P>}
        </Container>
    )
}
