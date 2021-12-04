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
                        <Route path='/explore'  element ={<Explore />} />

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