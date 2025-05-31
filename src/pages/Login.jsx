
import AuthLayout from '../layouts/AuthLayout'
import { useState } from 'react'
import { LoginComponent } from '../components'
import ResetPasswordComponent from '../components/authcomponents/ResetPasswordComponent'

const Login = () => {
  const [viewPassword,setViewPassword] = useState(false)
  const [isLogin,setIsLogin] = useState(true)
  const handleViewPassword = ()=>{
    setViewPassword((prev)=>{
        return !prev
    })
  }
  const [loginData,setLoginData] = useState({
    email: "",
    password: ""
  })
  const handelChangeLogin = ({target: {name,value}}) => {
      setLoginData(prev=>({...prev, [name]:value}))
  }
  const handleLogin = () =>{
    console.log(loginData)
  }
  
  const [resetPasswordData,setResetPasswordData] = useState({
    email: "",
    fullName: "",
    newPassword:  "",
    rePassword: "",
    roleClass: "",
  })
  const handelChangeReset = ({target: {name,value}}) => {
      setResetPasswordData(prev=>({...prev, [name]:value}))
  }
  const handleReset = () => {
    console.log(resetPasswordData)
  }
  const handleViewLogin = ()=>{
    setIsLogin((prev)=>{
      return !prev
    })
  }
  return (
    <AuthLayout>
        <div className='w-full mx-5 h-auto bg-white rounded-sm shadow-sm
          md:max-w-lg md:mx-5
          flex flex-col gap-3 py-10
        '>
          {
            isLogin ? (<LoginComponent 
              control = {handleViewLogin}
              controlPassword = {handleViewPassword}
              passwordStatus = {viewPassword}
              loginData = {loginData}
              handleChange = {handelChangeLogin}
              handleLogin = {handleLogin}
            />):(<ResetPasswordComponent 
              control = {handleViewLogin} 
              controlPassword = {handleViewPassword}
              passwordStatus = {viewPassword}
              resePasswordData = {resetPasswordData}
              handleChange ={handelChangeReset}  
              handleReset = {handleReset}
            />)
          }
        </div>
    </AuthLayout>
  )
}

export default Login