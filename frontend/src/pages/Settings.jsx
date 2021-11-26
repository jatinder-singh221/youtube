import React from 'react'
import {BrowserView, MobileOnlyView, TabletView} from 'react-device-detect'
import Home from './Home'
import Websettings from '../components/web/Websettings'


export default function Watch() {
    return (
        <>
            <BrowserView>
                <Home component = {<Websettings />} />
            </BrowserView>
            <TabletView>
                <Home component = {<Websettings />} />
            </TabletView>
            <MobileOnlyView>
                {/* <Home component = {<p>hii<p />} /> */}
            </MobileOnlyView>
        </>
    )
}
