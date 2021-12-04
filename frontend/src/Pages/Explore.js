import React from 'react'
import {BrowserView, MobileOnlyView, TabletView} from 'react-device-detect'
import Webexplore from '../components/web/Webexplore'
import Mobileexpolre from '../components/mobile/Mobileexpolre'

export default function Explore() {
    return (
        <>
            <BrowserView>
                <Webexplore />
            </BrowserView>
            <TabletView>
                <Webexplore />
            </TabletView>
            <MobileOnlyView>
                <Mobileexpolre />
            </MobileOnlyView>
        </>
    )
}
