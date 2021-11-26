import React from 'react'
import {BrowserView, MobileOnlyView, TabletView} from 'react-device-detect'
import Loading from '../components/Loading'
import Home from './Home'

const Webcatagory = React.lazy(()=>import('../components/web/Webcatagory'))
// const Mobileexplore = React.lazy(()=>import('../components/mobile/Mobileexpolre'))

export default function Catagory() {
    return (
        <React.Suspense fallback = {<Loading />}>
            <BrowserView>
                <Home component = {<Webcatagory />} />
            </BrowserView>
            <TabletView>
                <Home component = {<Webcatagory />} />
            </TabletView>
            <MobileOnlyView>
                {/* <Home component = {<p>hii<p />} /> */}
            </MobileOnlyView>
        </React.Suspense>
    )
}
