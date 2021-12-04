import React from 'react'
import {BrowserView, MobileOnlyView, TabletView} from 'react-device-detect'
import Weblibrary from '../components/web/Weblibrary'
import Mobilelibrary from '../components/mobile/Mobilelibrary'

export default function Libraray() {
    return (
        <>
            <BrowserView>
               <Weblibrary />
            </BrowserView>
            <TabletView>
               <Weblibrary />
            </TabletView>
            <MobileOnlyView>
               <Mobilelibrary />
            </MobileOnlyView>           
        </>
    )
}
