import React, {useContext, useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'
import CSRF from '../CSRF'
import Cookies from 'js-cookie'
import {Cover, Icon} from '../web/Webnavbar'
import { ChannelLogo} from '../web/Webhome'
import {globalContext} from '../../App'
import {Container, Player, Make, P,Over,Small, Channellink, Sub, Commint, Input, Button, Ul, Li } from '../web/Webwatch'
import styled from 'styled-components'

export default function Mobilewatch() {

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
            <Mobileplayer src={details.video} poster={details.video_thumb_nail} controls controlsList='nodownload seekable' preload='metadata' id='myVideo'></Mobileplayer>
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


const Mobileplayer = styled(Player)`
    min-height:30vh;
    width:100%;
    max-height:40vh;
`


