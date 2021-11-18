import React, {useContext} from "react"
import { Navigate, useLocation } from "react-router-dom"
import {globalContext} from '../App'

export default function Pravite({children, bool, where}) {
    const Value = useContext(globalContext)
    const location = useLocation()
    return Value.isLogin === bool?(
        children
    ):(
        <Navigate to = {where}  state={{from:location}} />
    )
}
