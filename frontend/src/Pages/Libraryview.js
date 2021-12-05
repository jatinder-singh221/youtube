import React from 'react'
import {BrowserView, MobileOnlyView, TabletView} from 'react-device-detect'
import Weblibraryview from '../components/web/Weblibraryview'
import Mobilelibraryview from '../components/mobile/Mobilelibraryview'

export default function Libraryview() {
    return (
        <>
            <BrowserView>
                <Weblibraryview />
            </BrowserView>
            <TabletView>
                <Weblibraryview />
            </TabletView>
            <MobileOnlyView>
                <Mobilelibraryview />
            </MobileOnlyView>
        </>
    )
}
