import React from 'react'
import {BrowserView, MobileOnlyView, TabletView} from 'react-device-detect'
import Websettings from '../components/web/Websettings'
import Mobilesettings from '../components/mobile/Mobilesettings'


export default function Watch() {
    return (
        <>
            <BrowserView>
                <Websettings />
            </BrowserView>
            <TabletView>
                <Websettings />
            </TabletView>
            <MobileOnlyView>
                <Mobilesettings />
            </MobileOnlyView>
        </>
    )
}
