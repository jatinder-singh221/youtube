import React, {useState} from 'react'
import styled from 'styled-components'
import {Desc, P, ChannelLogo, Box, Img, StyledLink, Over} from '../web/Webhome'
import {Cover, Icon} from '../web/Webnavbar'

export default function Mobilehome() {
    const [videos, setvideos] = useState([])
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
                    <Img src={items.video_tumbnail} alt="" />
                    <Box>
                        <ChannelLogo src={items.channel} alt="" />
                        <P>{items.video_name}</P>
                    </Box>
                    <Desc>{items.video_description}</Desc>
                    <Desc>{items.time}</Desc>
                </StyledLink>
            })

            }

        </Container>
    )
}

const Container = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    min-height: 100vh;
    margin-bottom: 3em;
`
