import React from 'react'
import Loading from '../components/Loading'
import {TabletView, MobileOnlyView, BrowserView} from 'react-device-detect'

const Webregister = React.lazy(()=>import('../components/web/Webregister'))

export default function Login() {
    return (
        <React.Suspense fallback = {<Loading />}>
            <BrowserView>
                <Webregister />
            </BrowserView>
            <TabletView>
                <Webregister />
            </TabletView>
            <MobileOnlyView>
                'mobile' 
            </MobileOnlyView>
        </React.Suspense>
    )
}
