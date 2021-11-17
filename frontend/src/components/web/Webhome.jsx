import React, {useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {Cover, Icon} from '../web/Webnavbar'

export default function Webhome() {
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

export const Container = styled.main`
    flex: 1;
    height:90vh ;
    margin-top: 66px;
    background-color: transparent;
    overflow-y: auto;
    display: grid;
    grid-gap:10px;
    grid-template-columns: auto auto auto auto;
    padding:0 0.5em ;
    align-content: flex-start;
    scroll-behavior: smooth;

    @media(max-width:1024px){
        grid-template-columns: auto auto auto  ;
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

export const ChannelLogo = styled.img`
    width: 30px;
    height: 30px;
    overflow: hidden;
    border-radius: 20px;
    margin-right:0.7em;
    margin-left: 0.7em;
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