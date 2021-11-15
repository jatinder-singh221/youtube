import React from 'react'
import {Styledusername, StyledLink} from '../web/Weboption'
import {Container, Box} from './Mobilenotification'
import {Hr} from '../web/Webnotification'
import {Cover, Icon} from '../web/Webnavbar'

export default function MObileoption(props) {    
    return (
        <Container>
            <Box>
                <Cover onClick={() => props.extra()}>
                    <Icon icon = 'arrow-left'/>
                </Cover>
                <Styledusername to = '/account'>Jatinder singh</Styledusername>
            </Box>
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
        </Container>
    )
}
