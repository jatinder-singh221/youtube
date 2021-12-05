import React from 'react'
import {BrowserView, MobileOnlyView, TabletView} from 'react-device-detect'
import Webcatagory from '../components/web/Webcatagory'
import Mobilecatagory from '../components/mobile/Mobilecatagory'

export default function Catagories() {
    return (
        <>
            <BrowserView>
                <Webcatagory />
            </BrowserView>
            <TabletView>
                <Webcatagory />
            </TabletView>
            <MobileOnlyView>
                <Mobilecatagory />
            </MobileOnlyView>
        </>
    )
}
