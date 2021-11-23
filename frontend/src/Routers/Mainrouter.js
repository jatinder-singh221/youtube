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
import Libraray from '../pages/Libraray'
import History from '../pages/History'


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
            <Route path = '/library' element={
                <Pravite bool={true} where = '/auth/login'>
                    <Libraray />
                </Pravite>
            } />
            <Route path = '/history' element={
                <Pravite bool={true} where = '/auth/login'>
                    <History />
                </Pravite>
            } />
            <Route path = '/watch-later' element={
                <Pravite bool={true} where = '/auth/login'>
                    <Libraray />
                </Pravite>
            } />
            <Route path = '/liked' element={
                <Pravite bool={true} where = '/auth/login'>
                    <Libraray />
                </Pravite>
            } />
            <Route path = '/catagories/trending' element={
                <Pravite bool={false} where = '/auth/login'>
                    <Libraray />
                </Pravite>
            } />
            <Route path = '/catagories/movies' element={
                <Pravite bool={false} where = '/auth/login'>
                    <Libraray />
                </Pravite>
            } />
            <Route path = '/catagories/games' element={
                <Pravite bool={false} where = '/auth/login'>
                    <Libraray />
                </Pravite>
            } />
            <Route path = '/catagories/live' element={
                <Pravite bool={false} where = '/auth/login'>
                    <Libraray />
                </Pravite>
            } />
            <Route path = '/help' element={
                <Pravite bool={false} where = '/auth/login'>
                    <Libraray />
                </Pravite>
            } />
            <Route path = '/feedback' element={
                <Pravite bool={true} where = '/auth/login'>
                    <Libraray />
                </Pravite>
            } />
            <Route path = '/settings' element={
                <Pravite bool={true} where = '/auth/login'>
                    <Libraray />
                </Pravite>
            } />
            <Route path = '/not-founded' element={<Notfounded />} />
            <Route path = '/about' element={<About />} />
            <Route path = '/contact-us' element={<p> i am contact us page</p>} />
        </Routes>
    )
}
