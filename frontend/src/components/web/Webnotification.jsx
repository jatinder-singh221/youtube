import React, {useEffect, useRef, useContext} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {globalContext} from '../../App'

export default function Webnotification(props) {
    const notifyref = useRef()
    const Value = useContext(globalContext)

    useEffect(() => {
        const notifyClickoutside = (e) =>{
            if (notifyref.current && !notifyref.current.contains(e.target)){
                props.notification()
            }
        }
        document.addEventListener('click', notifyClickoutside)
        return () => {
            document.removeEventListener('click',notifyClickoutside)
        }
    }, [notifyref, props])

    return (
        <Cover ref = {notifyref}>
            {Value.isLogin?
            <>
                <Head>Notifications</Head>
                <Hr />
                <Ul>
                    <Li> 
                        <Goto to ='/watch'>Code with harry added new video</Goto>
                        <Time>3 hours ago</Time>
                    </Li>
                </Ul>
            </>:<Head>Login to see notifications</Head>
            }
        </Cover>
        
    )
}

const Cover = styled.div`
    position: absolute;
    width: 30%;
    top:0;
    margin-top: 62px;
    min-height: 70vh;
    right: 0;
    background-color: #212121;
    border-radius: 5px 0 0 5px;

    @media(max-width:1024px){
        width: 50%;
    }
`

export const Head = styled.h4`
    color: #909090;
    padding-left: 2em;
`

export const Hr = styled.hr`
    height: 0.01em;
    border:none;
    background-color: #313131;
`

export const Ul = styled.ul`
    list-style: none;
    padding:0;
`

export const Li = styled.li`
    display: flex;
    flex-direction: column;
    padding:1em 1em;

    &:hover{
        background-color: #303030;
    }

`

export const Goto = styled(Link)`
    color:#909090;
    text-decoration: none;
`

export const Time = styled.small`
    color: #909090;
    padding: 0.2em;
`
