import React from 'react'
import {BrowserView, MobileOnlyView, TabletView} from 'react-device-detect'
import Weblike from '../components/web/Weblike'
import Mobilelike from '../components/mobile/Mobilelike'

export default function Like() {
    return (
        <>
            <BrowserView>
               <Weblike />
            </BrowserView>
            <TabletView>
               <Weblike />
            </TabletView>
            <MobileOnlyView>
                <Mobilelike />
            </MobileOnlyView>
        </>
    )
}
