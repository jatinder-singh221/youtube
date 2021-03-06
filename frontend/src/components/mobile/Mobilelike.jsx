import React, {useState, useEffect} from 'react'
import {Desc, P, Box, Img, StyledLink, Over, ChannelLogo} from '../web/Webhome'
import {Cover, Icon} from '../web/Webnavbar'
import {Container} from './Mobilehome'
import axios from 'axios'

export default function Mobilelike() {

    const [videos, setvideos] = useState([])
    
    useEffect(() => {
        axios.get('backendvotes/all/')
        .then((response) =>{
            setvideos(response.data)
        })
    }, [])

    return (
        <Container>
            {videos.length !== 0?videos.map((items, index)=>{
                return <StyledLink to = {`/watch/${items.video.id}`} key= {index}>
                    <Over>
                        <P>{items.video.video_name}</P>
                        <Cover >
                            <Icon icon = 'play' />
                        </Cover>
                    </Over>
                    <Img src={items.video.video_thumb_nail} alt="logo" />
                    <Box>
                        <ChannelLogo src={items.video.channel.channel_picture} alt="logo" />
                        <P>{items.video.video_name}</P>
                    </Box>
                    <Desc>{items.video.video_description}</Desc>
                    <Desc>{new Date (items.video.upload_time).toLocaleString()}</Desc>
                </StyledLink>
            }):<P>No item Liked</P>}
        </Container>
    )
}
