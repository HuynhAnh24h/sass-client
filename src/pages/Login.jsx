
import AuthLayout from '../layouts/AuthLayout'
import { useState } from 'react'
import { LoginComponent } from '../components'
import ResetPasswordComponent from '../components/authcomponents/ResetPasswordComponent'
import { loginUser } from '../apis/authApis'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
const Login = () => {

  const [viewPassword, setViewPassword] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const handleViewPassword = () => {
    setViewPassword((prev) => {
      return !prev
    })
  }
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  })
  const handelChangeLogin = ({ target: { name, value } }) => {
    setLoginData(prev => ({ ...prev, [name]: value }))
  }
  const { login } = useAuth()
  const navigate = useNavigate()
  const handleLogin = async () => {
    setIsLoading(true);
    try {
        // Gọi API đăng nhập
        const response = await loginUser(loginData);
        // Kiểm tra nếu API trả về thành công
        if (response.success) {
            await login(response.data, response.token);
            toast.success("Đăng nhập thành công");

            // Kiểm tra role để điều hướng
            if (response.data.role === "admin") {
                navigate("/admin/dashboard");
            } else {
                navigate("/user/dashboard");
            }
        } else {
            // Hiển thị lỗi từ API (nếu có)
            toast.error(response.message);
        }
    } catch (err) {
      console.log(err.message)
    } finally {
        setIsLoading(false); //
    }
  }

  const [resetPasswordData, setResetPasswordData] = useState({
    email: "",
    fullName: "",
    newPassword: "",
    rePassword: "",
    roleClass: "",
  })
  const handelChangeReset = ({ target: { name, value } }) => {
    setResetPasswordData(prev => ({ ...prev, [name]: value }))
  }
  const handleReset = () => {
    console.log(resetPasswordData)
  }
  const handleViewLogin = () => {
    setIsLogin((prev) => {
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
            control={handleViewLogin}
            controlPassword={handleViewPassword}
            passwordStatus={viewPassword}
            loginData={loginData}
            handleChange={handelChangeLogin}
            handleLogin={handleLogin}
            isLoading={isLoading}
          />) : (<ResetPasswordComponent
            control={handleViewLogin}
            controlPassword={handleViewPassword}
            passwordStatus={viewPassword}
            resetPasswordData={resetPasswordData}
            handleChange={handelChangeReset}
            handleReset={handleReset}
          />)
        }
        <ToastContainer />
      </div>
    </AuthLayout>
  )
}

export default Login