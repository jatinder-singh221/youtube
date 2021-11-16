import React, {useState, createContext, useEffect} from 'react'
import Mainrouter from './Routers/Mainrouter'
import Loader from './components/Loader'
import axios from 'axios'

const globalContext = createContext()

export default function App() {
  
  const [username, setusername] = useState('')
  const [isLogin, setislogin] = useState(false)
  const [hasNotification, sethasnotification] = useState(false)
  const [isCreator, setiscreator] = useState(false)
  const [isAdmin, setisadmin] = useState(false)
  const [getUserdetails, setgetUserdetails] = useState(false)

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/backendauth/')
    .then((response)=>{
      let data = response.data.state
      setusername(data.username)
      setislogin(data.isLogin)
      sethasnotification(data.hasNotification)
      setiscreator(data.isCreator)
      setisadmin(data.isAdmin)
    })
    setTimeout(() => {
      setgetUserdetails(true)
    }, 1000);
  }, [])


  const returnedValue = {
    username, isLogin, hasNotification, isCreator, isAdmin
  }

  return (

    <globalContext.Provider value = {returnedValue}>
      {getUserdetails?<Mainrouter />:<Loader />}
    </globalContext.Provider>

  )
}

export {globalContext}