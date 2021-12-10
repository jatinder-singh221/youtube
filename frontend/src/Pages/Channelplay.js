import React from 'react'
import {BrowserView, MobileOnlyView, TabletView} from 'react-device-detect'
import Webplaylist from '../components/web/Webplaylist'
// import MobileAllChannel from '../components/mobile/MobileAllChannel'

export default function Explore() {
    return (
        <>
            <BrowserView>
                <Webplaylist />
            </BrowserView>
            <TabletView>
                <Webplaylist />
            </TabletView>
            <MobileOnlyView>
                {/* <MobileAllChannel /> */}
            </MobileOnlyView>
        </>
    )
}
