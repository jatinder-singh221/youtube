import React from 'react'
import {BrowserView, MobileView} from 'react-device-detect'
import Webnavbar from '../components/web/Webnavbar'
import Mobilenavbar from '../components/mobile/Mobilenavbar'

export default function Home() {
    return (
        <>
            <BrowserView>
                <Webnavbar />
            </BrowserView>
            <MobileView>
                <Mobilenavbar />
            </MobileView>
        </>
    )
}
