import React,{useState, useEffect} from 'react'
import {Cover, Icon} from '../web/Webnavbar'
import {Container, StyledLink, Over, P, Img, Box, ChannelLogo, Desc} from '../web/Webhome'
import axios from 'axios'

export default function Weblike() {
    const [Like, setLike] = useState([])

    useEffect(() => {
        axios.get('backendvotes/all/')
        .then((response) =>{

            setLike(response.data)
        })
    }, [])

    return (
        <Container>
            {Like.length !== 0?Like.map((items, index) =>{
                return <StyledLink to = {`/watch/${items.video.id}`}  key= {index}>
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
            }):<P>No Item liked</P>}
        </Container>
    )
}
