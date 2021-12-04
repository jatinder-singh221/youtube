import React,{useState, useEffect} from 'react'
import {Container} from './Mobilehome'
import {Styledlink, P} from '../web/Webexplore'
import axios from 'axios'

export default function Mobileexpolre() {
    const [catagories, setcatagories] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/backendcatagories/')
        .then((response)=>{
            setcatagories(response.data)
        })
    }, [])

    return (
        <Container>
            {catagories.map((items, index) =>{
                return <Styledlink to={`/explore/${items.catagory_name}`} key={index} id={index}>
                    <P id={index}>{items.catagory_name}</P>
                </Styledlink>
            })}
        </Container>
    )
}
