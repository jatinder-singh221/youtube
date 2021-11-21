import React from 'react'
import {BrowserView, MobileOnlyView, TabletView} from 'react-device-detect'
import Loading from '../components/Loading'
import Home from './Home'

const Weblibrary = React.lazy(() => import('../components/web/Weblibrary'))
const Mobilelibrary = React.lazy(() => import('../components/mobile/Mobilelibrary'))

export default function Libraray() {
    return (
        <React.Suspense fallback = {<Loading />}>
            <BrowserView>
                <Home component = {<Weblibrary />} />
            </BrowserView>
            <TabletView>
                <Home component = {<Weblibrary />} />
            </TabletView>
            <MobileOnlyView>
                <Home component = {<Mobilelibrary />} />
            </MobileOnlyView>           
        </React.Suspense>
    )
}
