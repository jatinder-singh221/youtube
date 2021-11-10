import React from 'react'
import Loading from '../components/Loading'
import {TabletView, MobileOnlyView, BrowserView} from 'react-device-detect'

const Weblogin = React.lazy(()=>import('../components/web/Weblogin'))
const Mobilelogin = React.lazy(()=>import('../components/mobile/Mobilelogin'))

export default function Login() {
    return (
        <React.Suspense fallback = {<Loading />}>
            <BrowserView>
                <Weblogin />
            </BrowserView>
            <TabletView>
                <Weblogin />
            </TabletView>
            <MobileOnlyView>
                <Mobilelogin /> 
            </MobileOnlyView>
        </React.Suspense>
    )
}
