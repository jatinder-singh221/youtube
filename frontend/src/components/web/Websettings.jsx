import React from 'react'
import {Container} from './Webhome'
import {Styledlink} from './Webaside'
import {Icon, Cover} from './Webnavbar'

export default function Websettings() {
    return (
        <Container>
            <Styledlink to = '/account' >
                <Cover>
                    <Icon icon='user' />
                </Cover>
                Account
            </Styledlink>
            <Styledlink to = '/channel' >
                <Cover>
                    <Icon icon='tv' />
                </Cover>
                Your Channel
            </Styledlink>
        </Container>
    )
}
