import React from 'react'
import {Container} from './Webhome'
import {Styledlink} from './Webaside'
import {Icon, Cover} from './Webnavbar'

export default function Websettings() {
    return (
        <Container>
            <Styledlink to = '/' >
                <Cover>
                    <Icon icon='user' />
                </Cover>
                Account
            </Styledlink>
            <Styledlink to = '/explore'><Icon icon='compass' /> Explore</Styledlink>
            <Styledlink to = '/subscription'><Icon icon='briefcase' /> Subscription</Styledlink>
        </Container>
    )
}
