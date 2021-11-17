import React, {useContext} from "react"
import { Navigate, useLocation } from "react-router-dom"
import {globalContext} from '../App'

export default function Pravite({children}) {
    const Value = useContext(globalContext)
    const location = useLocation()
    return !Value.isLogin?(
        children
    ):(
        <Navigate to = '/' state={{from:location}} />
    )
}
