import React,{useState} from 'react'
import {Container} from '../web/Webhome'
import {Styledlink, P} from '../web/Webexplore'

export default function Mobilesub() {
    const [subscribed, setsubscribed] = useState([])

    const getCatagories = (e) =>{
        let id = e.target.id
    }

    return (
        <Container>
            {subscribed.length !== 0?subscribed.map((items, index) =>{
                return <Styledlink to='/channel/id' key={index} id={index} onClick={getCatagories}>
                    <P id={index}>{items.name}</P>
                </Styledlink>
            }):<P>No channel Subscribed</P>}
        </Container>
    )
}
