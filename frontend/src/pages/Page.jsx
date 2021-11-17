import React from 'react'
import {BrowserView, MobileOnlyView, TabletView} from 'react-device-detect'
import Loading from '../components/Loading'
import Home from './Home'

const Webhome = React.lazy(()=>import('../components/web/Webhome'))
const Mobilehome = React.lazy(() => import('../components/mobile/Mobilehome'))

export default function Page() {
    return (
        <React.Suspense fallback = {<Loading />}>
            <BrowserView>
                <Home component = {<Webhome/>} />
            </BrowserView>
            <TabletView>
                <Home component = {<Webhome/>} />
            </TabletView>
            <MobileOnlyView>
                <Home component = {<Mobilehome />} />
            </MobileOnlyView>
        </React.Suspense>
    )
}
