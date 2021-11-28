import React from 'react'
import {BrowserView, MobileOnlyView, TabletView} from 'react-device-detect'
import Loading from '../components/Loading'

const Webexplore = React.lazy(()=>import('../components/web/Webexplore'))
const Mobileexplore = React.lazy(()=>import('../components/mobile/Mobileexpolre'))

export default function Explore() {
    return (
        <React.Suspense fallback = {<Loading />}>
            <BrowserView>
                <Webexplore />
            </BrowserView>
            <TabletView>
                <Webexplore />
            </TabletView>
            <MobileOnlyView>
                <Mobileexplore />
            </MobileOnlyView>
        </React.Suspense>
    )
}
