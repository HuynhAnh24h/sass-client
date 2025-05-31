import { useEffect } from "react"
import { useAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom"

// Định tuyến router phân quyền xác thực người dùng
const Root = () =>{
    const {user} = useAuth()
    const navigate = useNavigate()
    console.log(user)
    // "user","admin","hr","accountant","manager"
    useEffect(()=>{
        switch(user){
            case user.role === "admin":
                navigate("/admin/dashboard")
                break
            case user.role === "hr":
                navigate("/hr/dashboard")
                break
            case user.role === "accountant":
                navigate("/accountant/dashboard")
                break
            case user.role === "manager":
                navigate("/manager/dashboard")
                break
            default:
                navigate("/login")
                break
        }
    },[user,navigate])
}

export default Root