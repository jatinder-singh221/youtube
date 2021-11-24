import React,{useState, useEffect} from 'react'
import {Cover, Icon} from '../web/Webnavbar'
import {Container, StyledLink, Over, P, Img, Box, ChannelLogo, Desc} from '../web/Webhome'
import axios from 'axios'

export default function Webwatchlater() {
    const [Later, setLater] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/backendwatch/')
        .then((response) =>{

            setLater(response.data)
        })
    }, [])

    return (
        <Container>
            {Later.length !== 0?Later.map((items, index) =>{
                return <StyledLink to = '/go' key= {index}>
                <Over>
                    <P>{items.video.video_name}</P>
                    <Cover >
                        <Icon icon = 'play' />
                    </Cover>
                </Over>
                <Img src={items.video.video_thumb_nail} alt="thumb" />
                <Box>
                    <ChannelLogo src={items.video.channel.channel_picture} alt="cover" />
                    <P>{items.video.video_name}</P>
                </Box>
                <Desc>{items.video.video_description}</Desc>
                <Desc>{new Date (items.upload_time).toLocaleString()}</Desc>
            </StyledLink>
            }):<P>No Items in Watch Later</P>}


        </Container>
    )
}
