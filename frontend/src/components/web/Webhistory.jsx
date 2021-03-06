import React, {useState, useEffect} from 'react'
import {Cover, Icon} from '../web/Webnavbar'
import {Container, StyledLink, Over, P, Img, Box, ChannelLogo, Desc} from '../web/Webhome'
import axios from 'axios'

export default function Webhistory() {
    const [videos, setvideos] = useState([])

    useEffect(() => {
        axios.get('backendhistory/')
        .then((response) =>{
            setvideos(response.data)
        })
    }, [])


    return (
        <Container>
            {videos.length !== 0? videos.map((items, index)=>{
                return <StyledLink to = {`/watch/${items.video.id}`} key= {index}>
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
                    <Desc>{new Date (items.video.upload_time).toLocaleString()}</Desc>
                </StyledLink>
            }):<P>Your History Is Empty</P>}
        </Container>
    )
}
