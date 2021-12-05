import React,{useState} from 'react'
import {BrowserView, MobileOnlyView, TabletView} from 'react-device-detect'
import Webnavbar from '../components/web/Webnavbar'
import Webaside from '../components/web/Webaside'
import Webnotification from '../components/web/Webnotification'
import Weboption from '../components/web/Weboption'

import Mobilenavbar from '../components/mobile/Mobilenavbar'
import Mobileaside from '../components/mobile/Mobileaside'
import Mobilenotification from '../components/mobile/Mobilenotification'
import Mobileoption from '../components/mobile/Mobileoption'


export default function Home(props) {
    const [showAside, setshowAside] = useState(true)
    const [tabAside, settabAside] = useState(false)
    const [showNotification, setshowNotification] = useState(false)
    const [showoption, setshowoption] = useState(false)

    const changeAside = () =>{
        setshowAside(!showAside)
        props.barValue(!showAside)
    }

    const changeAsidetab = () =>{
        settabAside(!tabAside)
        props.barValue(!tabAside)
    }
    const changeNotification = () =>{
        setshowNotification(!showNotification)
    }
    const changeOption = () =>{
        setshowoption(!showoption)
    }

    return (
        <>
                <BrowserView>
                <Webnavbar showHide = {changeAside} notification = {changeNotification} extra ={changeOption}/>
                {showAside?<Webaside  />:''}
                {showNotification?<Webnotification notification = {changeNotification} />:''}
                {showoption?<Weboption extra ={changeOption} />:''}
            </BrowserView>
            <TabletView >
                <Webnavbar  showHide = {changeAsidetab}  notification = {changeNotification} extra ={changeOption}/>
                {tabAside?<Webaside  />:''}
                {showNotification?<Webnotification notification = {changeNotification}/>:''}
                {showoption?<Weboption extra ={changeOption} />:''}
            </TabletView>
            <MobileOnlyView>
                <Mobilenavbar notification = {changeNotification} extra ={changeOption} />
                <Mobileaside />
                {showNotification?<Mobilenotification notification = {changeNotification}  />:''}
                {showoption?<Mobileoption extra ={changeOption} />:''}
            </MobileOnlyView>
    
        </>
    )
}
