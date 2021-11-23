import React from 'react'
import {BrowserView, MobileOnlyView, TabletView} from 'react-device-detect'
import Loading from '../components/Loading'
import Home from './Home'

const Webhistory = React.lazy(()=>import('../components/web/Webhistory'))
// const Mobileexplore = React.lazy(()=>import('../components/mobile/Mobileexpolre'))

export default function Explore() {
    return (
        <React.Suspense fallback = {<Loading />}>
            <BrowserView>
                <Home component = {<Webhistory />} />
            </BrowserView>
            <TabletView>
                <Home component = {<Webhistory />} />
            </TabletView>
            <MobileOnlyView>
                {/* <Home component = {<p>hii<p />} /> */}
            </MobileOnlyView>
        </React.Suspense>
    )
}
