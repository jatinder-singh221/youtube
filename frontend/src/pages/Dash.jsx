import React from 'react'
import {BrowserView, MobileOnlyView, TabletView} from 'react-device-detect'
import Loading from '../components/Loading'

const Webhome = React.lazy(() => import('../components/web/Webhome'))
const Mobilehome = React.lazy(() => import('../components/mobile/Mobilehome'))


export default function Dash(props) {

    return (
        <React.Suspense fallback = {<Loading />}>
            <BrowserView>
                <Webhome />
            </BrowserView>
            <TabletView >
                <Webhome />
            </TabletView>
            <MobileOnlyView>
                <Mobilehome />
            </MobileOnlyView>
        </React.Suspense>
    )
}
