import React,{useState, useEffect} from 'react'
import {Container} from './Mobilehome'
import {Styledlink, P} from '../web/Webexplore'
import axios from 'axios'

export default function Mobileexpolre() {
    const [catagories, setcatagories] = useState([])

    const getCatagories = (e) =>{
        let id = e.target.id
    }
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/backendcatagories/')
        .then((response)=>{
            setcatagories(response.data)
        })
    }, [])

    return (
        <Container>
            {catagories.map((items, index) =>{
                return <Styledlink to='/catagories/id' key={index} id={index} onClick={getCatagories}>
                    <P id={index}>{items.catagory_name}</P>
                </Styledlink>
            })}
        </Container>
    )
}
