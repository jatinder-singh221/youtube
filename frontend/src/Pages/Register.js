import React from 'react'
import {TabletView, MobileOnlyView, BrowserView} from 'react-device-detect'
import Webregister from '../components/web/Webregister'
import Mobileregister from '../components/mobile/Mobileregister'

export default function Login() {
    return (
        <>
            <BrowserView>
                <Webregister />
            </BrowserView>
            <TabletView>
                <Webregister />
            </TabletView>
            <MobileOnlyView>
                <Mobileregister />
            </MobileOnlyView>
        </>
    )
}
