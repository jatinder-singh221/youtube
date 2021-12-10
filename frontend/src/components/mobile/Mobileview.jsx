import React,{useState, useEffect} from 'react'
import {Container} from './Mobilehome'
import axios from 'axios'
import {Box, Img, Logo, P, Small, Navcontainer, StyledLink} from '../web/Webview'
import {useParams,Outlet} from 'react-router-dom'
import styled from 'styled-components'


export default function Mobileview() {

    const {id} = useParams()
    const [channel, setchannel] = useState({})

    useEffect(() => {
        axios.get(`/backendchannel/about/${id}/`)
        .then((response) =>{
            setchannel(response.data)
        })
    }, [id])

    return (
        <Container>
            <Box>
                <Img src={channel.channel_cover} alt="logo" />
                <Logo src={channel.channel_picture} alt="logo" />
                <P>{channel.channel_name}</P>
                <Small>2000000 Subscribers</Small>
            </Box>
            <Navcontainer>
                <Changedstyledlink to={`/channelview/${id}/about/`}>About</Changedstyledlink>
                <Changedstyledlink to={`/channelview/${id}/videos/`}>Videos</Changedstyledlink>
                <Changedstyledlink to={`/channelview/${id}/playlists/`}>Playlists</Changedstyledlink>
            </Navcontainer>
            <Outlet />   
        </Container>
    )
}

const Changedstyledlink = styled(StyledLink)`
    margin:0 0.3em ;
    padding:0 0.2em;
`