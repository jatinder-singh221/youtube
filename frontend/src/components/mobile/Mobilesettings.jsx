import React from 'react'
import {Container} from './Mobilehome'
import {Styledlink, } from '../web/Webaside'
import {Icon, Cover} from '../web/Webnavbar'

export default function Mobilesettings() {
    return (
        <Container>
            <Styledlink to = '/account'><Cover><Icon icon='user' /></Cover> Account</Styledlink>
            <Styledlink to = '/channel'><Cover><Icon icon='tv' /></Cover>Your Channel</Styledlink>
        </Container>
    )
}
