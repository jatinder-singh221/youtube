import React,{useState, useEffect} from 'react'
import {Container} from './Webhome'
import { P , Styledlink} from './Webexplore'
import axios from 'axios'

export default function Weblibrary() {
    const [Library, setLibrary] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/backendlibrary/')
        .then((response) =>{

            setLibrary(response.data)
        })
    }, [])

    return (
        <Container>
            {Library.length !== 0?Library.map((items, index) =>{
                return <Styledlink to='/channel/id' key={index} id={index} >
                    <P id={index}>{items.name}</P>
                </Styledlink>
            }):<P>No Items in Library</P>}
        </Container>
    )
}
