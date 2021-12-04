import React from 'react'
import {BrowserView, MobileOnlyView, TabletView} from 'react-device-detect'
import Websub from '../components/web/Websub'
import Mobilesub from '../components/mobile/Mobilesub'

export default function Subscription() {
    return (
        <>
            <BrowserView>
                <Websub />
            </BrowserView>
            <TabletView>
                <Websub />
            </TabletView>
            <MobileOnlyView>
                <Mobilesub />
            </MobileOnlyView>
        </>
    )
}
