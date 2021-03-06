import React from 'react'
import {BrowserView, MobileOnlyView, TabletView} from 'react-device-detect'
import Webwatch from '../components/web/Webwatch'
import Mobilewatch from '../components/mobile/Mobilewatch'

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
                <Mobilewatch />
            </MobileOnlyView>
        </>
    )
}
