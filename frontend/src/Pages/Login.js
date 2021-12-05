import React from 'react'
import {TabletView, MobileOnlyView, BrowserView} from 'react-device-detect'
import Weblogin from '../components/web/Weblogin'
import Mobilelogin from '../components/mobile/Mobilelogin'

export default function Login() {
    return (
        <>
            <BrowserView>
                <Weblogin />
            </BrowserView>
            <TabletView>
                <Weblogin />
            </TabletView>
            <MobileOnlyView>
                <Mobilelogin /> 
            </MobileOnlyView>
        </>
    )
}
