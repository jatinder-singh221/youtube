import React ,{useContext} from 'react'
import {Styledusername, StyledLink} from '../web/Weboption'
import {Container, Box} from './Mobilenotification'
import {Hr} from '../web/Webnotification'
import {Cover, Icon} from '../web/Webnavbar'
import { globalContext } from '../../App'

export default function MObileoption(props) {   
    
    const Value = useContext(globalContext)
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
           {Value.isCreator || Value.isAdmins?
                <StyledLink to='/account'>Upload Video</StyledLink>:
           <StyledLink to='/account'>Create Channel</StyledLink>}
           <StyledLink to='/auth/logout'>Sign out</StyledLink>
           <Hr />
           <StyledLink to='/channels'>All Channels</StyledLink> 
           <StyledLink to='/Library'>Library</StyledLink> 
           <Hr />
           <StyledLink to='/help'>Help</StyledLink>
           <StyledLink to='/feedback'>Send Feedback</StyledLink>
           <StyledLink to='/settings'>Settings</StyledLink>
        </Container>
    )
}
