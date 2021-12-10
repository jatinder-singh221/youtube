import React from 'react'
import {BrowserView, MobileOnlyView, TabletView} from 'react-device-detect'
import Webchannelvideos from '../components/web/Webchannelvideos'
// import MobileAllChannel from '../components/mobile/MobileAllChannel'

export default function Explore() {
    return (
        <>
            <BrowserView>
                <Webchannelvideos />
            </BrowserView>
            <TabletView>
                <Webchannelvideos />
            </TabletView>
            <MobileOnlyView>
                {/* <MobileAllChannel /> */}
            </MobileOnlyView>
        </>
    )
}
