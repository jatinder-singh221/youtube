import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useParams } from 'react-router'

export default function Webchannelabout() {
    const {id} = useParams()
    const [channel, setchannel] = useState({})

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/backendchannel/about/${id}/`)
        .then((response) =>{
            setchannel(response.data)
        })
    }, [id])
    return (
        <Div>
            <p>Name: {channel.channel_name}</p>
            <p>Description: {channel.channel_description}</p>
        </Div>
    )
}

const Div = styled.div`
    margin-top: 1em;
`
