import React from 'react'
import {BrowserView, MobileOnlyView, TabletView} from 'react-device-detect'
import Webwatch from '../components/web/Webwatch'
import Mobilesub from '../components/mobile/Mobilesub'

export default function Subscription() {
    return (
        <>
            <BrowserView>
                <Webwatch />
            </BrowserView>
            <TabletView>
                <Webwatch />
            </TabletView>
            <MobileOnlyView>
                {/* <Mobilesub /> */}
            </MobileOnlyView>
        </>
    )
}
