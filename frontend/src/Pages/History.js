import React from 'react'
import {BrowserView, MobileOnlyView, TabletView} from 'react-device-detect'
import Webhistory from '../components/web/Webhistory'
import Mobilehistory from '../components/mobile/Mobilehistory'

export default function History() {
    return (
        <>
            <BrowserView>
                <Webhistory />
            </BrowserView>
            <TabletView>
                <Webhistory />
            </TabletView>
            <MobileOnlyView>
                <Mobilehistory />
            </MobileOnlyView>
        </>
    )
}
