import React, {useState, createContext} from 'react'
import Mainrouter from './Routers/Mainrouter'

const globalContext = createContext()

export default function App() {
  

  const [isLogin, setislogin] = useState(false)
  const [hasNotification, sethasnotification] = useState(false)
  const [isCreator, setiscreator] = useState(false)
  const [isAdmin, setisadmin] = useState(false)


  const returnedValue = {
    isLogin, hasNotification, isCreator, isAdmin
  }

  return (

    <globalContext.Provider value = {returnedValue}>
      <Mainrouter />
    </globalContext.Provider>

  )
}

export {globalContext}