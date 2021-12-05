import React from 'react'
import {BrowserView, MobileOnlyView, TabletView} from 'react-device-detect'
import Webwatchlater from '../components/web/Webwatchlater'
import Mobilewatchlater from '../components/mobile/Mobilewatchlater'

export default function Later() {
    return (
        <>
            <BrowserView>
                <Webwatchlater />
            </BrowserView>
            <TabletView>
                <Webwatchlater />
            </TabletView>
            <MobileOnlyView>
                <Mobilewatchlater />
            </MobileOnlyView>
        </>
    )
}
