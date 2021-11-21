import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import {Container, StyledLink, Over, Desc, Img, Box, ChannelLogo} from './Webhome'
import {Cover, Icon} from '../web/Webnavbar'
import {P} from './Webexplore'
import axios from 'axios'

export default function Weblibrary() {
    const [library, setlibrary] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/backendlibrary/')
        .then((response) =>{
            setlibrary(response.data)
        })
    }, [])
    return (
        <Container>
            <Div>
                <Ptop>Your Library</Ptop> 
                <Button><Cover><Icon icon = 'plus'/></Cover>add new</Button>
            </Div>
            {library.length !== 0 ?library.map((items, index) => {
            return <Details key ={index}>
                <summary>{items.name} <Cover2><Icon icon = 'edit-2'></Icon></Cover2></summary>
                {
                    items.videos.map((subitem, subindex) =>{
                        return(
                            <Container2>
                            <StyledLink to = '/go' key= {index}>
                            <Over>
                                <P>{subitem.video_name}</P>
                                <Cover >
                                    <Icon icon = 'play' />
                                </Cover>
                            </Over>
                            <Img src={subitem.video_thumb_nail} alt="thumb" />
                            <Box>
                                <ChannelLogo src={subitem.channel.channel_picture} alt="cover" />
                                <P>{subitem.video_name}</P>
                            </Box>
                        </StyledLink>
                        </Container2>
                        )
                    })
                }
            </Details>}):<P>No Library Added</P>}
        </Container>
    )
}

const Div = styled.div`
    grid-column: span 4;
    height: 3em;
    background-color: #303030;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Ptop = styled.p`
    color:#909090;
    margin:0 2em;
    font-size: 22px;
    font-weight: bolder;
`

const Button = styled.button`
    display: flex;
    align-items: center;
    margin:0 2em;
    background-color:#202020;
    border-radius: 5px;
    padding:0.3em 1em ;
    border:none;
    outline:none;
    color:#fff;
    text-transform: capitalize;
    cursor: pointer;

    &:active{
        background-color: #20202068;
    }
`


const Details = styled.details`
    grid-column: span 4;
    color:#909090;
    margin:0.2em 0;
    background-color: #202020;
    padding:1em 0.5em;
    cursor: pointer;
    user-select: none;
    border-radius: 10px;
    text-transform: capitalize;
    position: relative;
`
const Cover2 = styled(Cover)`
    position:absolute;
    right: 0;
    top:0;
`

const Container2 = styled(Container)`
    grid-template-columns:  auto auto;
`
