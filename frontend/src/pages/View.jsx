import React from 'react'
import {BrowserView, MobileOnlyView, TabletView} from 'react-device-detect'
import Loading from '../components/Loading'

const Webwatch = React.lazy(()=>import('../components/web/Webwatch'))
// const Mobileexplore = React.lazy(()=>import('../components/mobile/Mobileexpolre'))

export default function view() {
    return (
        <React.Suspense fallback = {<Loading />}>
            <BrowserView>
               <Webwatch />
            </BrowserView>
            <TabletView>
               <Webwatch />
            </TabletView>
            <MobileOnlyView>
                {/*<p>hii<p />} /> */}
            </MobileOnlyView>
        </React.Suspense>
    )
}
