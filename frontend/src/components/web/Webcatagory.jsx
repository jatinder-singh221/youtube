import React,{useState, useEffect} from 'react'
import {Cover, Icon} from '../web/Webnavbar'
import {Container, StyledLink, Over, P, Img, Box, ChannelLogo, Desc} from '../web/Webhome'
import axios from 'axios'
import {useParams} from 'react-router-dom'

export default function Webcatagory() {
    const [Later, setLater] = useState([])
    const {name} = useParams()

    useEffect(() => {
        axios.get(`/backendcatagories/get/${name}/`)
        .then((response) =>{
            setLater(response.data)
        })
        .catch(()=>setLater([]))
    }, [name])

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
            }):<P>No Items {name}</P>}


        </Container>
    )
}
