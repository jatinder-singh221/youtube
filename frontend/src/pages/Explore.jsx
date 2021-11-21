import React from 'react'
import {BrowserView, MobileOnlyView, TabletView} from 'react-device-detect'
import Loading from '../components/Loading'
import Home from './Home'

const Webexplore = React.lazy(()=>import('../components/web/Webexplore'))
const Mobileexplore = React.lazy(()=>import('../components/mobile/Mobileexpolre'))

export default function Explore() {
    return (
        <React.Suspense fallback = {<Loading />}>
            <BrowserView>
                <Home component = {<Webexplore />} />
            </BrowserView>
            <TabletView>
                <Home component = {<Webexplore />} />
            </TabletView>
            <MobileOnlyView>
                <Home component = {<Mobileexplore />} />
            </MobileOnlyView>
        </React.Suspense>
    )
}