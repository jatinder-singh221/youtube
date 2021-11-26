import React,{useState} from 'react'
import styled from 'styled-components'
import {BrowserView, MobileOnlyView, TabletView} from 'react-device-detect'
import Loading from '../components/Loading'
import {WebAside} from '../components/web/Webaside'
import Webnotification from '../components/web/Webnotification'
import Weboption from '../components/web/Weboption'
import Mobilenotification from '../components/mobile/Mobilenotification'
import Mobileoption from '../components/mobile/Mobileoption'
const Webnavbar = React.lazy(() => import('../components/web/Webnavbar'))
const Mobilenavbar = React.lazy(() => import('../components/mobile/Mobilenavbar'))
const Mobileaside = React.lazy(() => import('../components/mobile/Mobileaside'))


export default function Home(props) {
    const [showaside, setshowaside] = useState(true)
    const [tabAside, settabAside] = useState(false)
    const [showNotification, setshowNotification] = useState(false)
    const [showoption, setshowoption] = useState(false)

    const changeAside = () =>{
        setshowaside(!showaside)
    }
    const changeAsidetab = () =>{
        settabAside(!tabAside)
    }
    const changeNotification = () =>{
        setshowNotification(!showNotification)
    }
    const changeOption = () =>{
        setshowoption(!showoption)
    }

    return (
        <React.Suspense fallback = {<Loading />}>
            <BrowserView>
                <Webnavbar showHide = {changeAside} notification = {changeNotification} extra ={changeOption}/>
                {showNotification?<Webnotification notification = {changeNotification} />:''}
                {showoption?<Weboption extra ={changeOption} />:''}
                <Grid>
                    {showaside?<WebAside />:''}
                    {props.component}
                </Grid>
            </BrowserView>
            <TabletView >
                <Webnavbar  showHide = {changeAsidetab}  notification = {changeNotification} extra ={changeOption}/>
                {showNotification?<Webnotification notification = {changeNotification}/>:''}
                {showoption?<Weboption extra ={changeOption} />:''}
                <Grid>
                    {tabAside?<WebAside />:''}
                    {props.component}
                </Grid>
            </TabletView>
            <MobileOnlyView>
                <Mobilenavbar notification = {changeNotification} extra ={changeOption} />
                <Mobileaside />
                {showNotification?<Mobilenotification notification = {changeNotification}  />:''}
                {showoption?<Mobileoption extra ={changeOption} />:''}
                {props.component}
            </MobileOnlyView>
        </React.Suspense>
    )
}


const Grid = styled.div`
    display: flex;
    width: 100%;
    position: fixed;
    top: 0;
    
`