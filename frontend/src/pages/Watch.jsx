import React from 'react'
import {BrowserView, MobileOnlyView, TabletView} from 'react-device-detect'
import Loading from '../components/Loading'
import Home from './Home'

const Webwatchlater = React.lazy(()=>import('../components/web/Webwatchlater'))
// const Mobileexplore = React.lazy(()=>import('../components/mobile/Mobileexpolre'))

export default function Watch() {
    return (
        <React.Suspense fallback = {<Loading />}>
            <BrowserView>
                <Webwatchlater />
            </BrowserView>
            <TabletView>
                <Webwatchlater />
            </TabletView>
            <MobileOnlyView>
                {/* <p>hii<p />} /> */}
            </MobileOnlyView>
        </React.Suspense>
    )
}
