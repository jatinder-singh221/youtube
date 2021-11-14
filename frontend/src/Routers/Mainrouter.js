import {Routes, Route} from 'react-router-dom'
import Notfounded from '../pages/Notfounded'
import About from '../pages/About'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'

export default function Mainrouter() {
    return (
        <Routes>
            <Route path = '/' element={<Home />} />
            <Route path = '/auth/login' element={<Login />} />
            <Route path = '/auth/register' element={<Register />} />
            <Route path = '/not-founded' element={<Notfounded />} />
            <Route path = '/about' element={<About />} />
            <Route path = '/contact-us' element={<p> i am contact us page</p>} />
        </Routes>
    )
}
