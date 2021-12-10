import {Routes, Route} from 'react-router-dom'
import styled from 'styled-components'
import React, {useState, useEffect} from 'react'
import Loading from '../components/Loading'
import {isBrowser, isTablet} from 'react-device-detect'
import Pravite from './Pravite'

const Home = React.lazy(() => import('../Pages/Home'))
const Landing = React.lazy(()=> import('../Pages/Landing'))
const Explore = React.lazy(()=> import('../Pages/Explore'))
const Subscription = React.lazy(()=> import('../Pages/Subscription'))
const Library = React.lazy(()=> import('../Pages/Library'))
const History = React.lazy(()=> import('../Pages/History'))
const Later = React.lazy(()=> import('../Pages/Later'))
const Like = React.lazy(()=> import('../Pages/Like'))
const Catagories = React.lazy(()=> import('../Pages/Catagories'))
const Libraryview = React.lazy(()=> import('../Pages/Libraryview'))
const Login = React.lazy(()=> import('../Pages/Login'))
const Register = React.lazy(()=> import('../Pages/Register'))
const Channels = React.lazy(()=> import('../Pages/Channels'))
const Settings = React.lazy(()=> import('../Pages/Settings'))
const Watch = React.lazy(()=> import('../Pages/Watch'))
const View = React.lazy(()=> import('../Pages/View'))
const Channelplay = React.lazy(()=> import('../Pages/Channelplay'))
const Channelabout = React.lazy(()=> import('../Pages/Channelabout'))
const Channelvideo = React.lazy(()=> import('../Pages/Channelvideo'))


export default function Mainrouter() {

    const [Bar, setBar] = useState()

    useEffect(() => {
        if (isBrowser){
            setBar(true)
        }
        else if(isTablet){
            setBar(false)
        }
        else{
            setBar(false)
        }
    }, [])

    const changeBar = (value) =>{
        setBar(value)
    }


    return (
        <React.Suspense fallback = {<Loading />}>
            <Home barValue= {changeBar} />
            <Wrap>
                {Bar? <Side></Side> : ''}

                <Content>
                    <Routes>

                        <Route path='/'  element ={<Landing />} />
                        <Route path='/explore/*'  element ={<Explore />} />
                        <Route path='/catagories/:name'  element ={<Catagories />} />
                        <Route path='/channels'  element ={<Channels />} />
                        <Route path='/watch/:id'  element ={<Watch />} />
                        <Route path='/channelview/:id/' element={<View />}>
                            <Route path='/channelview/:id/about' element={<Channelabout />}/>
                            <Route path='/channelview/:id/videos' element={<Channelvideo />}/>
                            <Route path='/channelview/:id/playlists' element={<Channelplay />}/>
                        </Route>

                        <Route path='/subscription' element= {
                            <Pravite bool = {true} where ='/auth/login' >
                                <Subscription />
                            </Pravite>
                        } />
                        <Route path='/library' element= {
                            <Pravite bool = {true} where ='/auth/login' >
                                <Library />
                            </Pravite>
                        } />
                        <Route path='/history' element= {
                            <Pravite bool = {true} where ='/auth/login' >
                                <History />
                            </Pravite>
                        } />
                        <Route path='/Watch-later' element= {
                            <Pravite bool = {true} where ='/auth/login' >
                                <Later />
                            </Pravite>
                        } />
                        <Route path='/liked' element= {
                            <Pravite bool = {true} where ='/auth/login' >
                                <Like />
                            </Pravite>
                        } />
                        <Route path='/videos/:id' element= {
                            <Pravite bool = {true} where ='/auth/login' >
                                <Libraryview />
                            </Pravite>
                        } />
                        <Route path='/auth/login' element= {
                            <Pravite bool = {false} where ='/' >
                                <Login />
                            </Pravite>
                        } />
                        <Route path='/auth/register' element= {
                            <Pravite bool = {false} where ='/' >
                                <Register />
                            </Pravite>
                        } />
                        <Route path='/settings' element= {
                            <Pravite bool = {true} where ='/auth/login' >
                                <Settings />
                            </Pravite>
                        } />
                        
                    </Routes>
                </Content>

            </Wrap>
        </React.Suspense>
    )
}

const Wrap = styled.div`
    width: 100%;
    min-height: 100vh;
    display:flex;
    background-color: transparent;
`

const Side = styled.div`
    width: 224px;
    height: 100vh;
    background-color: transparent;
`

const Content = styled.div`
    background-color: transparent;
    flex: 1;
    min-height: 100vh;
`