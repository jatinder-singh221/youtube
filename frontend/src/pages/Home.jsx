import React,{useState} from 'react'
import {BrowserView, MobileOnlyView, TabletView} from 'react-device-detect'
import Webnavbar from '../components/web/Webnavbar'
import Mobilenavbar from '../components/mobile/Mobilenavbar'
import Webaside from '../components/web/Webaside'
import Mobileaside from '../components/mobile/Mobileaside'

export default function Home() {
    const [showaside, setshowaside] = useState(true)
    const [tabAside, settabAside] = useState(false)
    
    const changeAside = () =>{
        setshowaside(!showaside)
    }
    const changeAsidetab = () =>{
        settabAside(!tabAside)
    }
    return (
        <>
            <BrowserView>
                <Webnavbar showHide = {changeAside} />
                {showaside?<Webaside />:''}
            </BrowserView>
            <TabletView >
                <Webnavbar  showHide = {changeAsidetab} />
                {tabAside?<Webaside />:''}
            </TabletView>
            <MobileOnlyView>
                <Mobilenavbar />
                <Mobileaside />
            </MobileOnlyView>
        </>
    )
}
