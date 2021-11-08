import React from 'react'
import styled from 'styled-components'
import {NavLink, Link} from 'react-router-dom'
import FeatherIcon from 'feather-icons-react'

export default function Webaside() {
    return (
        <Nav>
            <Styledlink to = '/'><Icon icon='home' /> Home</Styledlink>
            <Styledlink to = '/explore'><Icon icon='compass' /> Explore</Styledlink>
            <Styledlink to = '/subscription'><Icon icon='briefcase' /> Subscription</Styledlink>
            <Hr />
            <Styledlink to = '/library'><Icon icon='book' /> Library</Styledlink>
            <Styledlink to = '/histroy'><Icon icon='clock' /> History</Styledlink>
            <Styledlink to = '/watch-later'><Icon icon='disc' /> Watch later</Styledlink>
            <Styledlink to = '/liked'><Icon icon='thumbs-up' /> Liked</Styledlink>
            <Hr />
            <P>More From YouTube</P>
            <Styledlink to = '/youtubepre'><Icon icon='youtube' /> Premium</Styledlink>
            <Styledlink to = '/explore/trending'><Icon icon='activity' /> Trending</Styledlink>
            <Styledlink to = '/explore/movies'><Icon icon='film' /> Movies</Styledlink>
            <Styledlink to = '/explore/game'><Icon icon='box' /> Games</Styledlink>
            <Styledlink to = '/explore/live'><Icon icon='bar-chart-2' /> Live</Styledlink>
            <Hr />
            <Styledlink to = '/explore/Channels'><Icon icon='plus-circle' /> All channels</Styledlink>
            <Hr />
            <Styledlink to = '/settings'><Icon icon='settings' /> Settings</Styledlink>
            <Styledlink to = '/help'><Icon icon='help-circle' /> Help</Styledlink>
            <Styledlink to = '/feed'><Icon icon='triangle' /> Feedback</Styledlink>
            <Hr />
            <More to= '/about'>About</More>
            <More to= '/contact'>Contact Us</More>
            <P>&copy; YouTube.com</P>
        </Nav>
    )
}

const Nav = styled.nav`
    padding-top: 60px;
    height: calc(100vh - 60px);
    width: 224px;
    background-color: #202020;
    overflow: auto;

    .active{
        background-color: #303030;
    }
`

const Styledlink = styled(NavLink)`
    display: flex;
    align-items: center;
    width: 100%;
    height: 40px;
    color:#fff;
    background-color: transparent;
    text-decoration: none;
    font-size: 18px;

    &:hover{
        background-color: #303030;
    }
`

const Icon = styled(FeatherIcon)`
    width: 18px;
    height: 18px;
    margin:0 2em;
`

const Hr = styled.hr`
    height: 0.04em;
    border:none;
    width: 90%;
    background-color: #303030;
`

const P = styled.p`
    color:#909090;
    font-size: 18px;
    padding-left: 1em;
`

const More = styled(Link)`
    text-decoration: none;
    color: #909090;
    margin:2em 0.4em;

    &:hover{
        color:#fff;
    }
`