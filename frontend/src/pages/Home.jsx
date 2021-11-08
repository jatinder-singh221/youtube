import React from 'react'
import {BrowserView, MobileOnlyView, TabletView} from 'react-device-detect'
import Webnavbar from '../components/web/Webnavbar'
import Mobilenavbar from '../components/mobile/Mobilenavbar'
import Webaside from '../components/web/Webaside'
import Mobileaside from '../components/mobile/Mobileaside'

export default function Home() {
    return (
        <>
            <BrowserView>
                <Webnavbar />
                <Webaside />
            </BrowserView>
            <TabletView>
                <Webnavbar />
                <Webaside />
            </TabletView>
            <MobileOnlyView>
                <Mobilenavbar />
                <Mobileaside />
            </MobileOnlyView>
        </>
    )
}
