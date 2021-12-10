import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {Cover, Icon} from '../web/Webnavbar'
import axios from 'axios'

export default function Webhome() {

    const [videos, setvideos] = useState([])

    useEffect(() => {
        axios.get('backendvideo/')
        .then((response) =>{
            setvideos(response.data)
        })
    }, [])

    return (
        <Container>
            {videos.map((items, index)=>{
                return <StyledLink to ={`/watch/${items.id}`} key= {index}>
                    <Over>
                        <P>{items.video_name}</P>
                        <Cover >
                            <Icon icon = 'play' />
                        </Cover>
                    </Over>
                    <Img src={items?.video_thumb_nail} alt="thumb" />
                    <Box>
                        <ChannelLogo src={items.channel.channel_picture} alt="cover" />
                        <P>{items.video_name}</P>
                    </Box>
                    <Desc>{items.video_description}</Desc>
                    <Desc>{new Date (items.upload_time).toLocaleString()}</Desc>
                </StyledLink>
            })

            }

        </Container>
    )
}

export const Container = styled.main`
    height:100vh ;
    margin-top: 65px;
    background-color: transparent;
    overflow:hidden;
    display: grid;
    grid-gap:15px;
    grid-template-columns: auto auto auto auto;
    padding:0 0.5em ;
    scroll-behavior: smooth;
    align-content: flex-start;

    @media(max-width:1024px){
        grid-template-columns: auto auto auto;
    }
`

export const Over = styled.div`
    display: none;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
    background-color: #000000a0;
`
export const StyledLink = styled(Link)`
    width: auto;
    height: 315px;
    overflow: hidden;
    border-radius: 10px;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    border:1px solid #303030;
    box-sizing:border-box;
    margin-top: 0;
    position: relative;

    &:hover{
        box-shadow: 0 8px 15px #202020;
        ${Over}{
            display: flex;
        }
    }

    @media(max-width:540px){
        border-radius:0;
        padding-top: 0.3em;
    }
`

export const Img = styled.img`
    width: 100%;
    height: 212px;
`
export const Box = styled.div`
    display: flex;
    align-items: center;
    margin:0.3em 0;
`

export const P = styled.p`
    color:#fff;
    padding:0.1em 0;
    margin: 0;
    font-size: 18px;
`
export const Desc = styled.p`
    color:#909090;
    padding:0.1em 0;
    padding-left: 3em;
    margin: 0;
    font-size: 16px;
`
export const ChannelLogo = styled.img`
    width:30px;
    height:30px;
    border-radius: 30px;
    margin:0 0.5em ;
    border:solid 1px #303030;
`