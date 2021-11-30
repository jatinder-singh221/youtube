import React from 'react'
import {BrowserView, MobileOnlyView, TabletView} from 'react-device-detect'
import Loading from '../components/Loading'

const Webchannel = React.lazy(() => import('../components/web/Webchannel'))
// const Mobilehome = React.lazy(() => import('../components/mobile/Mobilehome'))


export default function Dash(props) {

    return (
        <React.Suspense fallback = {<Loading />}>
            <BrowserView>
                <Webchannel />
            </BrowserView>
            <TabletView >
                <Webchannel />
            </TabletView>
            <MobileOnlyView>
                {/* <Mobilehome /> */}
            </MobileOnlyView>
        </React.Suspense>
    )
}
