import React from 'react'
import {BrowserView, MobileOnlyView, TabletView} from 'react-device-detect'
import Webchannelabout from '../components/web/Webchannelabout'
// import MobileAllChannel from '../components/mobile/MobileAllChannel'

export default function Explore() {
    return (
        <>
            <BrowserView>
                <Webchannelabout />
            </BrowserView>
            <TabletView>
                <Webchannelabout />
            </TabletView>
            <MobileOnlyView>
                {/* <MobileAllChannel /> */}
            </MobileOnlyView>
        </>
    )
}
