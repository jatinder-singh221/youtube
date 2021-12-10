import React from 'react'
import {BrowserView, MobileOnlyView, TabletView} from 'react-device-detect'
import Webview from '../components/web/Webview'
import Mobileview from '../components/mobile/Mobileview'


export default function Watch() {
    return (
        <>
            <BrowserView>
                <Webview />
            </BrowserView>
            <TabletView>
                <Webview />
            </TabletView>
            <MobileOnlyView>
                <Mobileview />
            </MobileOnlyView>
        </>
    )
}