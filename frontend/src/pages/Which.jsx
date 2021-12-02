import React from 'react'
import {BrowserView, MobileOnlyView, TabletView} from 'react-device-detect'
import Loading from '../components/Loading'

const Webview = React.lazy(()=>import('../components/web/Webview'))

export default function Which() {
    return (
        <React.Suspense fallback = {<Loading />}>
            <BrowserView>
                <Webview />
            </BrowserView>
            <TabletView>
                <Webview />
            </TabletView>
            <MobileOnlyView>
                {/* <p>hii<p />} /> */}
            </MobileOnlyView>
        </React.Suspense>
    )
}
