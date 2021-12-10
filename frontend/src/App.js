import React, {useState, createContext, useEffect} from 'react'
import Mainrouter from './Routes/Mainrouter'
import Loader from './components/Loader'
import axios from 'axios'

const globalContext = createContext()

export default function App() {
  
  const [id, setid] = useState(0)
  const [username, setusername] = useState('')
  const [isLogin, setislogin] = useState(false)
  const [hasNotification, sethasnotification] = useState(false)
  const [isCreator, setiscreator] = useState(false)
  const [isAdmin, setisadmin] = useState(false)
  const [getUserdetails, setgetUserdetails] = useState(false)

  const updateState = () =>{
      axios.get('/backendauth/')
      .then((response)=>{
        let data = response.data.state
        setid(data.id)
        setusername(data.username)
        setislogin(data.isLogin)
        sethasnotification(data.hasNotification)
        setiscreator(data.isCreator)
        setisadmin(data.isAdmin)
      })
  }

  const getState = (set) =>{
    setTimeout(() => {
      setgetUserdetails(true)
    }, 1000);
  }

  useEffect(() => {
    updateState()
    getState()
  }, [])


  const returnedValue = {
    id,username, isLogin, hasNotification, isCreator, isAdmin, updateState, getState
  }

  return (

    <globalContext.Provider value = {returnedValue}>
      {getUserdetails?<Mainrouter />:<Loader />}
    </globalContext.Provider>

  )
}

export {globalContext}