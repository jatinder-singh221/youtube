import React from 'react'
import styled from 'styled-components'
import { NavLink, useParams,Outlet} from 'react-router-dom'
import care from '../../assests/care.jpg'


export default function Webview() {
    const {id} = useParams()
    return (
        <Conatiner>
            <Box>
                <Img src={care} alt="logo" />
                <Logo src={care} alt="logo" />
                <P>Jatinder Singh</P>
                <Small>2000000 Subscribers</Small>
            </Box>
            <Navcontainer>
                <StyledLink to={`/channelsview/${id}/about/`}>About</StyledLink>
                <StyledLink to={`/channelsview/${id}/videos/`}>Videos</StyledLink>
                <StyledLink to={`/channelsview/${id}/playlists/`}>Playlists</StyledLink>
            </Navcontainer>
            <Outlet />
        </Conatiner>
    )
}

const Conatiner = styled.div`
    width:auto;
    min-height: 100vh;
    margin:auto 0.5em;
    margin-top: 65px;
    color: #fff;

    .active{
        background-color: #303030;
    }
`

const Box = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
    min-height: 35vh;
`

const Img = styled.img`
    width: 100%;
    height: 35vh;
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    mix-blend-mode: color-dodge;
`

const Logo = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 70px;
    box-shadow: 0 8px 15px #303030;
`

const P = styled.p`
    font-size: 28px;
    text-transform: capitalize;
`

const Small = styled.small`
    color: #909090;
`

const Navcontainer = styled.div`
    display: flex;
    align-items: stretch;
    height: 3em;
    background-color: #202020;
`

const StyledLink = styled(NavLink)`
    text-decoration: none;
    color:#909090;
    background-color: transparent;
    padding:0.3em 0.9em;
    margin:0 0.3em ;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;

    &:hover{
        background-color: #303030;
    }
`
