import {Routes, Route} from 'react-router-dom'
import styled from 'styled-components'
import React, {useState, useEffect} from 'react'
import Pravite from './Pravite'
import Home from '../pages/Home'
import Dash from '../pages/Dash'
import {isBrowser, isTablet} from 'react-device-detect'
import Loading from '../components/Loading'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Explore from '../pages/Explore'
import Subscription from '../pages/Subscription'
import Libraray from '../pages/Libraray'
import Watch from '../pages/Watch'
import Like from '../pages/Like'
import Catagory from '../pages/Catagory'
import Settings from '../pages/Settings'
import History from '../pages/History'
import Channels from '../pages/Channels'
import View from '../pages/View'


export default function Mainrouter() {
    const [bar, setbar] = useState()

    useEffect(() => {
        if (isBrowser){
            setbar(true)
        }
        else if(isTablet){
            setbar(false)
        }
        else{
            setbar(false)
        }
    }, [])

    const change = (value) =>{
        setbar(value)
    }

    return (
        <React.Suspense fallback={<Loading />}>
            <Home what = {change}/>
            <Cover>
                {bar?<div style={{width:'224px'}}></div>:''}
                    <div style={{flex:'1'}}>
                        <Routes>
                            <Route path='/' element= {<Dash />} />
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
                            <Route path='/subscription' element= {
                                <Pravite bool = {true} where ='/auth/login' >
                                    <Subscription />
                                </Pravite>
                            } />
                            <Route path='/library' element= {
                                <Pravite bool = {true} where ='/auth/login' >
                                    <Libraray />
                                </Pravite>
                            } />
                            <Route path='/watch-later' element= {
                                <Pravite bool = {true} where ='/auth/login' >
                                    <Watch />
                                </Pravite>
                            } />
                            <Route path='/liked' element= {
                                <Pravite bool = {true} where ='/auth/login' >
                                    <Like />
                                </Pravite>
                            } />
                            <Route path='/settings' element= {
                                <Pravite bool = {true} where ='/auth/login' >
                                    <Settings />
                                </Pravite>
                            } />
                            <Route path='/history' element= {
                                <Pravite bool = {true} where ='/auth/login' >
                                    <History />
                                </Pravite>
                            } />
                            <Route path='/upload' element= {
                                <Pravite bool = {true} where ='/auth/login' >
                                    <Settings />
                                </Pravite>
                            } />
                            <Route path = '/explore' element={<Explore />}/>
                            <Route path = '/explore/:name' element={<Catagory />}/>
                            <Route path = '/channels' element={<Channels />}/>
                            <Route path = '/watch/:id' element={<View />}/>
                        </Routes>
                    </div>
            </Cover>
        </React.Suspense>
    )
}

const Cover = styled.div`
    display: flex;
    width: 100%;
    overflow: hidden;
`
