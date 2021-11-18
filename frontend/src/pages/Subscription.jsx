import React from 'react'
import {BrowserView, MobileOnlyView, TabletView} from 'react-device-detect'
import Loading from '../components/Loading'
import Home from './Home'

const Websub = React.lazy(()=>import('../components/web/Websub'))
const Mobilesub = React.lazy(()=>import('../components/mobile/Mobilesub'))

export default function Subscription() {
    return (
        <React.Suspense fallback = {<Loading />}>
            <BrowserView>
                <Home component = {<Websub />} />
            </BrowserView>
            <TabletView>
                <Home component = {<Websub />} />
            </TabletView>
            <MobileOnlyView>
                <Home component = {<Mobilesub />} />
            </MobileOnlyView>
        </React.Suspense>
    )
}
