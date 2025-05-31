import { useEffect } from "react"
import {useAuth} from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
const ProtectedRouter = ({children,requireRole}) => {
  const {user} = useAuth()
  const navigate = useNavigate()
  useEffect(
    ()=>{ 
      if(user === undefined) return
      if(!user ){
        navigate("/login")
      }
      if(!requireRole.includes(user.role)){
        navigate('/unauthorized')
      }
    },[user,navigate, requireRole]
  )
  if(!user) return null
  if(!requireRole.includes(user.role)) return null

  return children
}

export default ProtectedRouter