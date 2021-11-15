import React,{useEffect, useRef} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {Hr} from './Webnotification'

export default function Weboption(props) {
        const optionref = useRef()

        useEffect(() => {
            const optionchange = (e) =>{
                if (optionref.current && !optionref.current.contains(e.target)){
                    props.extra()
                }
            }
            document.addEventListener('click', optionchange)
            return () => {
                document.removeEventListener('click', optionchange)
            }
        }, [props, optionref])

    return (
        <Cover ref ={optionref}>
            <Styledusername to = '/account'>Jatinder singh</Styledusername>
            <Hr />
           <StyledLink to='/account'>Account</StyledLink>
           <StyledLink to='/account'>Create Channel</StyledLink>
           <StyledLink to='/account'>Upload Video</StyledLink>
           <StyledLink to='/account'>Sign out</StyledLink>
           <Hr />
           <StyledLink to='/account'>Notifications</StyledLink> 
           <StyledLink to='/account'>Library</StyledLink> 
           <Hr />
           <StyledLink to='/account'>Help</StyledLink>
           <StyledLink to='/account'>Send Feedback</StyledLink>
           <StyledLink to='/account'>Settings</StyledLink>
        </Cover>
    )
}


const Cover = styled.div`
    position:absolute;
    top: 0;
    right: 0;
    margin-top: 62px;
    width: 200px;
    background-color: #202020;
    border-radius: 5px 0 0 5px;
`
export const Styledusername = styled(Link)`
    text-decoration: none;
    color: #ff0000;
    padding:0 1em;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: #909090;
    padding: 0.4em 1em;
    display: flex;
    align-items: center;
    font-size: 18px;

    &:hover{
        background-color: #303030;
    }
`