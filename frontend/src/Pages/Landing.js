import React from 'react'
import {BrowserView, MobileOnlyView, TabletView} from 'react-device-detect'
import Webhome from '../components/web/Webhome'
import Mobilehome from '../components/mobile/Mobilehome'


export default function Landing(props) {
    return (
        <>
            <BrowserView>
                <Webhome />
            </BrowserView>
            <TabletView >
                <Webhome />
            </TabletView>
            <MobileOnlyView>
                <Mobilehome />
            </MobileOnlyView>
        </>
    )
}
