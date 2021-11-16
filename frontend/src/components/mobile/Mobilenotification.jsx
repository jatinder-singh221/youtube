import React,{useContext} from 'react'
import styled from 'styled-components'
import { Head, Hr, Ul, Li, Goto, Time} from '../web/Webnotification'
import {globalContext} from '../../App'
import {Cover, Icon} from '../web/Webnavbar'

export default function Mobilenotification(props) {

    const Value = useContext(globalContext)
    
    return (
        <Container>
            {Value.isLogin?
            <>
                <Box>
                    <Cover onClick={() => props.notification()}>
                        <Icon icon = 'arrow-left'/>
                    </Cover>
                    <Head>Notifications</Head>
                </Box>
                <Hr />
                <Ul>
                    <Li> 
                        <Goto to ='/watch'>Code with harry added new video</Goto>
                        <Time>3 hours ago</Time>
                    </Li>
                    <Li> 
                        <Goto to ='/watch'>Code with harry added new video</Goto>
                        <Time>3 hours ago</Time>
                    </Li>
                </Ul>
            </>:
            <>
                <Cover onClick={() => props.notification()}>
                    <Icon icon = 'arrow-left'/>
                </Cover>
                <Head>Login to see notifications</Head>
            </>
            }
        </Container>
    )
}

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: auto;
    background-color: #202020;
    padding-top: 60px;
    z-index: 1;
`
export const Box = styled.div`
    display: flex;
    align-items: center;
    padding:0 1em ;
`
