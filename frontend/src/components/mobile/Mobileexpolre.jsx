import React,{useState, useEffect} from 'react'
import {Container} from './Mobilehome'
import {Styledlink, P} from '../web/Webexplore'
import axios from 'axios'

export default function Mobileexpolre() {
    const [catagories, setcatagories] = useState([])

    useEffect(() => {
        axios.get('backendcatagories/')
        .then((response)=>{
            setcatagories(response.data)
        })
    }, [])

    return (
        <Container>
            {catagories.map((items, index) =>{
                return <Styledlink to={`/catagories/${items.catagory_name}`} key={index} id={index}>
                    <P id={index}>{items.catagory_name}</P>
                </Styledlink>
            })}
        </Container>
    )
}
