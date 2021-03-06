import React, {useContext, useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import CSRF from '../CSRF'
import Cookies from 'js-cookie'
import styled from 'styled-components'
import {Cover, Icon} from './Webnavbar'
import { ChannelLogo} from './Webhome'
import {Link} from 'react-router-dom'
import {globalContext} from '../../App'

export default function Webwatch() {

    const {id} = useParams()
    const Value = useContext(globalContext)

    const [details, setvideo] = useState({})

    const [comments, setcomments] = useState([])
    const [how, setview] = useState(0)
    const [isSub, setisSub] = useState()
    const [howmanySub, sethowmanySub] = useState(0)

    useEffect(() => {
        axios.get(`/backendvideo/watch/${id}/`)
        .then((response) =>{
            setvideo(response.data)
        })
        axios.get(`/backendcomments/${id}/`)
        .then((res) =>{
            setcomments(res.data)
        })
        axios.get(`/backendvideo/videoviews/${id}/`)
        .then((res) =>{
            setview(res.data.view)
        })
        axios.get(`/backendsubscriber/view/${details?.channel?.id}/`)
        .then((response)=>{
            setisSub(response.data.is_subscriber)
        })
        axios.get(`/backendsubscriber/${details?.channel?.id}/`)
        .then((response)=>{
            sethowmanySub(response.data.subscriber_count)
        })
        
        
    }, [id, isSub, details?.channel?.id])


    const addRemove = (channelId) =>{
        if (isSub){
            axios.delete(`/backendsubscriber/view/${channelId}/`,{
                headers:{
                    'Accept':'application/json',
                    'Content-type':'application/json',
                    'X-CSRFToken':Cookies.get('csrftoken')
                }
            })
            .then((response) => setisSub(response.data.is_subscriber))
        }
        else{
            let form = new FormData()
            form.append('user',Value.id)
            form.append('channel', channelId)

            axios.put(`/backendsubscriber/view/${channelId}/`, form,{
                headers:{
                    'Accept':'application/json',
                    'Content-type':'application/json',
                    'X-CSRFToken':Cookies.get('csrftoken')
                }
            })
            .then((response) => setisSub(response.data.is_subscriber))
        }
    } 

    return (
        <Container>
            <CSRF />
            <Player src={details.video} poster={details.video_thumb_nail} controls controlsList='nodownload seekable'></Player>
            <Make>
                    <P>{details.video_name}</P>   
                <Make>
                    <Cover>
                        <Icon icon='thumbs-up'/>
                    </Cover>
                    <Cover>
                        <Icon icon='thumbs-down'/>
                    </Cover>
                    <Cover>
                        <Icon icon='disc'/>
                    </Cover>
                </Make>
            </Make>
            <Over>
                <Small>Views : {how}</Small>
                <Small>{new Date (details.upload_time).toLocaleString()}</Small>
                <Small>Subscribers: {howmanySub}</Small>
            </Over>
            <Over>
                <ChannelLogo src={details?.channel?.channel_picture} alt="logo" />
                <Channellink to={`/channelview/${details?.channel?.id}/about/`} >{details?.channel?.channel_name}</Channellink>
                <Sub onClick={() => addRemove(details?.channel?.id)}>{!isSub?'Subscribe':'Subscribed'}</Sub>
            </Over>


            <Commint>
                <form>
                    <Input type="text" placeholder='write your comments' />
                    {Value.isLogin?<Button type='submit'>Post</Button>: <Channellink to='/auth/login'>Login to Post</Channellink>}
                </form>
                <div>
                    <Ul>
                        {comments.length !== 0?
                            comments.map((items, index) =>{
                                return <Li key={index}>{items.comment_text}</Li>
                            }):<Small>No comments</Small>
                        }
                    </Ul>
                </div>
            </Commint>
        </Container>
    )
}

export const Container = styled.div`
    min-height:90vh ;
    margin-top: 65px;
    background-color: transparent;
    overflow:hidden;
    padding:0 0.5em ;
    align-content: flex-start;
    scroll-behavior: smooth;
    justify-content: flex-start;
    flex-direction: column;
    display:flex;
`

export const Player = styled.video`
    object-fit: contain;
    min-width: auto;
    min-height:40vh;
    max-height: 70vh;
    margin:0;
    padding:0;

    &::-webkit-media-controls-play-button{
        background-color: #FF0000;
        width:60px;
        height:40px;
        border-radius:10px;
        margin:0.3em 0.2em;
    }
    &::-webkit-media-controls-current-time-display{
        color:#fff;
        margin-left:0.4em;
    }

    &::-webkit-media-controls-timeline{
        background-color: #f00;
        padding-bottom: 0;
        margin-bottom: 20px;
    }
    &:full-screen{
        margin:0;
        padding:0;
        width: 100vw !important;
        height: 100vh;
    }
`
export const Make = styled.div`
    display:flex;
    align-items:center;
    justify-content: space-between;
`
export const P = styled.p`
 font-size: 30px;
 margin:0;
 margin-top:1em;
 display:flex;
 color:#fff;
 margin-bottom: 0.3em;
`

export const Over = styled.div`
    color:#fff;
    border-bottom: 1px solid #303030;
    padding:0.5em 0;
    display: flex;
   align-items:center;
`
export const Small = styled.small`
    margin:0 1em;
`

export const Commint = styled.div`
    min-height: 60vh;
    margin:1em 0.4em;
`
export const Input = styled.input`
    width: 20em;
    height: 2em;
    border:none;
    outline:none;
    background: none;
    border-bottom: 1px solid #303030;
    color:#fff;

    &:focus{
        border-bottom: 1px solid #f00;
    }

    @media(max-width:540px){
        width: 10em;
    }
`

export const Button = styled.button`
    border:none;
    outline:none;
    padding:0.3em 2em;
    margin:0 0.5em;
    border-radius: 5px;
    background-color: #303030;
    color:#fff;
    
    @media(max-width:540px){
       padding:0.3em 1em;
    }
`

export const Ul = styled.ul`
    list-style-type: none;
    color:#909090;

    
    @media(max-width:540px){
        margin:0;
        padding:0;
    }
`

export const Channellink = styled(Link)`
    text-decoration: none;
    color:#fff;
`

export const Li = styled.li`
    height: 2.5em;
    border-bottom: 1px solid #303030;
    margin:0.4em 0;

    &:hover{
        background-color:#202020;
    }
`

export const Sub = styled.button`
    margin:0 0.2em;
    margin-left:auto;
    padding:0.7em 1em;
    outline:none;
    border:none;
    border-radius: 5px;
    color:#fff;
    background-color: #FF0000;
`

