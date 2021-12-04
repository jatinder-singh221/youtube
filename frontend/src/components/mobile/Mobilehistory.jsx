import React, {useState, useEffect} from 'react'
import {Desc, P, Box, Img, StyledLink, Over, ChannelLogo} from '../web/Webhome'
import {Cover, Icon} from '../web/Webnavbar'
import {Container} from './Mobilehome'
import axios from 'axios'

export default function Mobilehistory() {

    const [videos, setvideos] = useState([])
    
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/backendhistory/')
        .then((response) =>{
            setvideos(response.data)
        })
    }, [])

    return (
        <Container>
            {videos.length !== 0?videos.map((items, index)=>{
                return <StyledLink to = {`/watch/${items.id}`} key= {index}>
                    <Over>
                        <P>{items.video_name}</P>
                        <Cover >
                            <Icon icon = 'play' />
                        </Cover>
                    </Over>
                    <Img src={items.video_thumb_nail} alt="logo" />
                    <Box>
                        <ChannelLogo src={items.channel.channel_picture} alt="logo" />
                        <P>{items.video_name}</P>
                    </Box>
                    <Desc>{items.video_description}</Desc>
                    <Desc>{new Date (items.upload_time).toLocaleString()}</Desc>
                </StyledLink>
            }):<P>Your History Is Empty</P>}
        </Container>
    )
}
