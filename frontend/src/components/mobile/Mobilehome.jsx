import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Desc, P, Box, Img, StyledLink, Over} from '../web/Webhome'
import {Cover, Icon} from '../web/Webnavbar'
import axios from 'axios'

export default function Mobilehome() {
    const [videos, setvideos] = useState([])
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/backendvideo/')
        .then((response) =>{
            console.log(response.data);
            setvideos(response.data)
        })
    }, [])
    return (
        <Container>
            {videos.map((items, index)=>{
                return <StyledLink to = '/go' key= {index}>
                    <Over>
                        <P>{items.video_name}</P>
                        <Cover >
                            <Icon icon = 'play' />
                        </Cover>
                    </Over>
                    <Img src={items.video_thumb_nail} alt="logo" />
                    <Box>
                        <P>{items.video_name}</P>
                    </Box>
                    <Desc>{items.video_description}</Desc>
                    <Desc>{items.upload_time}</Desc>
                </StyledLink>
            })

            }

        </Container>
    )
}

export const Container = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    min-height: 100vh;
    margin-bottom: 3em;
`
