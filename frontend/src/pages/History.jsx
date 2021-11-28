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
                <Webhistory />
            </BrowserView>
            <TabletView>
                <Webhistory />
            </TabletView>
            <MobileOnlyView>
                {/* <p>hii<p />} /> */}
            </MobileOnlyView>
        </React.Suspense>
    )
}
