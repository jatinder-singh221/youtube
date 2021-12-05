import React from 'react'
import {BrowserView, MobileOnlyView, TabletView} from 'react-device-detect'
import WebAllchannel from '../components/web/WebAllchannel'
import MobileAllChannel from '../components/mobile/MobileAllChannel'

export default function Explore() {
    return (
        <>
            <BrowserView>
                <WebAllchannel />
            </BrowserView>
            <TabletView>
                <WebAllchannel />
            </TabletView>
            <MobileOnlyView>
                <MobileAllChannel />
            </MobileOnlyView>
        </>
    )
}
