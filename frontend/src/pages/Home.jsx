import React from 'react'
import {BrowserView, MobileOnlyView, TabletView} from 'react-device-detect'
import Webnavbar from '../components/web/Webnavbar'
import Mobilenavbar from '../components/mobile/Mobilenavbar'

export default function Home() {
    return (
        <>
            <BrowserView>
                <Webnavbar />
            </BrowserView>
            <TabletView>
                <Webnavbar />
            </TabletView>
            <MobileOnlyView>
                <Mobilenavbar />
            </MobileOnlyView>
        </>
    )
}
