import React from 'react'
import {BrowserView, MobileOnlyView, TabletView} from 'react-device-detect'
import Loading from '../components/Loading'

const Weblibrary = React.lazy(() => import('../components/web/Weblibrary'))
const Mobilelibrary = React.lazy(() => import('../components/mobile/Mobilelibrary'))

export default function Libraray() {
    return (
        <React.Suspense fallback = {<Loading />}>
            <BrowserView>
               <Weblibrary />
            </BrowserView>
            <TabletView>
               <Weblibrary />
            </TabletView>
            <MobileOnlyView>
               <Mobilelibrary />
            </MobileOnlyView>           
        </React.Suspense>
    )
}
