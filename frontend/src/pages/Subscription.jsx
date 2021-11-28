import React from 'react'
import {BrowserView, MobileOnlyView, TabletView} from 'react-device-detect'
import Loading from '../components/Loading'

const Websub = React.lazy(()=>import('../components/web/Websub'))
const Mobilesub = React.lazy(()=>import('../components/mobile/Mobilesub'))

export default function Subscription() {
    return (
        <React.Suspense fallback = {<Loading />}>
            <BrowserView>
                <Websub />
            </BrowserView>
            <TabletView>
                <Websub />
            </TabletView>
            <MobileOnlyView>
                <Mobilesub />
            </MobileOnlyView>
        </React.Suspense>
    )
}
