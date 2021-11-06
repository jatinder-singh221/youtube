import {Routes, Route} from 'react-router-dom'
import Notfounded from '../pages/Notfounded'
import About from '../pages/About'
import Home from '../pages/Home'

export default function Mainrouter() {
    return (
        <Routes>
            <Route path = '/' element={<Home />} />
            <Route path = '/not-founded' element={<Notfounded />} />
            <Route path = '/about' element={<About />} />
            <Route path = '/contact-us' element={<p> i am contact us page</p>} />
        </Routes>
    )
}
