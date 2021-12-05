import React,{useState, useEffect} from 'react'
import {Cover, Icon} from '../web/Webnavbar'
import {Container, StyledLink, Over, P, Img, Box, ChannelLogo, Desc} from '../web/Webhome'
import axios from 'axios'
import { useParams } from 'react-router'

export default function Weblibraryview() {
    const [Later, setLater] = useState([])
    const {id} = useParams()

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/backendlibrary/${id}/`)
        .then((response) =>{

            setLater(response.data.videos)
        })
    }, [id])

    return (
        <Container>
            {Later.length !== 0?Later.map((items, index) =>{
                return <StyledLink to = {`/watch/${items.id}`} key= {index}>
                <Over>
                    <P>{items.video_name}</P>
                    <Cover >
                        <Icon icon = 'play' />
                    </Cover>
                </Over>
                <Img src={items.video_thumb_nail} alt="thumb" />
                <Box>
                    <ChannelLogo src={items.channel.channel_picture} alt="cover" />
                    <P>{items.video_name}</P>
                </Box>
                <Desc>{items.video_description}</Desc>
                <Desc>{new Date (items.upload_time).toLocaleString()}</Desc>
            </StyledLink>
            }):<P>No Item</P>}
        </Container>
    )
}
