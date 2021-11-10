import React,{useState} from 'react'
import {BrowserView, MobileOnlyView, TabletView} from 'react-device-detect'
import Loading from '../components/Loading'
import Webaside from '../components/web/Webaside'
const Webnavbar = React.lazy(() => import('../components/web/Webnavbar'))
const Mobilenavbar = React.lazy(() => import('../components/mobile/Mobilenavbar'))
const Mobileaside = React.lazy(() => import('../components/mobile/Mobileaside'))


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
        <React.Suspense fallback = {<Loading />}>
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
        </React.Suspense>
    )
}
