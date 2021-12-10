import React,{useState, useEffect} from 'react'
import {Container} from './Webhome'
import { P , Styledlink} from './Webexplore'
import axios from 'axios'

export default function Weblibrary() {
    const [Library, setLibrary] = useState([])

    useEffect(() => {
        axios.get('backendlibrary/')
        .then((response) =>{

            setLibrary(response.data)
        })
    }, [])

    return (
        <Container>
            {Library.length !== 0?Library.map((items, index) =>{
                return <Styledlink to={`/videos/${items.id}`} key={index} id={index} >
                    <P id={index}>{items.name}</P>
                </Styledlink>
            }):<P>No Items in Library</P>}
        </Container>
    )
}
