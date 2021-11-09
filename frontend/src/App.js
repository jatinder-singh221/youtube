import React, {useState, createContext, useEffect} from 'react'
import Mainrouter from './Routers/Mainrouter'
import Loader from './components/Loader'

const globalContext = createContext()

export default function App() {
  
  const [username, setusername] = useState('')
  const [isLogin, setislogin] = useState(false)
  const [hasNotification, sethasnotification] = useState(false)
  const [isCreator, setiscreator] = useState(false)
  const [isAdmin, setisadmin] = useState(false)
  const [getUserdetails, setgetUserdetails] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setgetUserdetails(true)
    }, 1000);
  }, [])


  const returnedValue = {
    isLogin, hasNotification, isCreator, isAdmin
  }

  return (

    <globalContext.Provider value = {returnedValue}>
      {getUserdetails?<Mainrouter />:<Loader />}
    </globalContext.Provider>

  )
}

export {globalContext}