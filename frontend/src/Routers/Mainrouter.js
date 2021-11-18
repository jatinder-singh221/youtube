import {Routes, Route} from 'react-router-dom'
import Notfounded from '../pages/Notfounded'
import About from '../pages/About'
import Home from '../pages/Page'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Pravite from './Pravite'
import Logout from '../components/Logout'
import Explore from '../pages/Explore'
import Subscription from '../pages/Subscription'


export default function Mainrouter() {
    return (
        <Routes basename = '/static'>
            <Route path = '/' element={<Home />} />
            <Route path = '/auth/login' element={
                <Pravite bool={false} where = '/'>
                    <Login />
                </Pravite>
            } />
            <Route path = '/auth/register' element={
                <Pravite bool={false} where = '/'>
                    <Register />
                </Pravite>
            } />
            <Route path='auth/logout' element={<Logout />}/>
            <Route path='/explore' element={<Explore />}/>
            <Route path = '/subscription' element={
                <Pravite bool={true} where = '/auth/login'>
                    <Subscription />
                </Pravite>
            } />
            <Route path = '/not-founded' element={<Notfounded />} />
            <Route path = '/about' element={<About />} />
            <Route path = '/contact-us' element={<p> i am contact us page</p>} />
        </Routes>
    )
}
