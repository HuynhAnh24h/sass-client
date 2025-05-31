import { FaEye } from "react-icons/fa6"
import { FaEyeSlash } from "react-icons/fa"
import { useAuthValidate } from "../../hooks"
import Loading from "../common/Loading"

const LoginComponent = ({ 
    control,
    controlPassword,
    passwordStatus,
    loginData,
    handleChange,
    handleLogin,
    isLoading
}) => {
    const {errors, isValid} = useAuthValidate(loginData,{
        email: {isEmail: true, required: true},
        password: {isStrongPassword: true, required: true}
    })
    return (
        <>
            <p className='text-center text-lg md:text-xl font-bold text-gray-900'>
                Quản lý nhân sự
            </p>
            <div className='flex flex-col justify-items-start mx-5 gap-1'>
                <label htmlFor="email" className='text-lg font-semibold text-gray-900'>Email</label>
                <input id='email' type='text' placeholder='Nhập email ...'
                    name="email"
                    value={loginData?.email || ""}
                    onChange={handleChange}
                    className='border outline-none border-gray-300 rounded-sm px-2 py-3'
                />
                {loginData?.email === "" ? (<p className="text-red-500 text-[10px] font-semibold">Email không được để trống</p>):(
                     errors.email ? (<p className="text-red-500 text-[10px] font-semibold">{errors.email}</p>):""
                )}
            </div>
            <div className='flex flex-col justify-items-start mx-5 gap-1 relative'>
                <label htmlFor="password" className='text-lg font-semibold text-gray-900'>Password</label>
                <input id='password' type={ passwordStatus ? "text" : "password"} placeholder='Nhập password ...'
                    name = "password"
                    value = {loginData?.password || ""}
                    onChange={handleChange}
                    className='border outline-none border-gray-300 rounded-sm px-2 py-3 '
                />
                {loginData?.password === "" ? (<p className="text-red-500 text-[10px] font-semibold">Password không được để trống</p>):(
                     errors.password  ? (<p className="text-red-500 text-[10px] font-semibold">{errors.password}</p>):""
                )}
                <p className={`absolute ${errors.password ? "bottom-8" : "bottom-4"} right-5`}>
                    {
                         passwordStatus ? (<FaEyeSlash size={20} className='text-gray-600 hover:text-gray-900 transition-all cursor-pointer' onClick={controlPassword} />) :
                            (<FaEye size={20} className='text-gray-600 hover:text-gray-900 transition-all cursor-pointer' onClick={controlPassword} />)
                    }
                </p>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
                <button className={`outline-none ${!isValid ? "bg-gray-600 px-5 py-2 text-gray-200 font-bold rounded-md":` bg-blue-900 text-md font-bold px-5 py-2 rounded-sm text-white flex justify-between items-center gap-2 transition-all hover:bg-blue-600 hover:rounded-2xl hover:cursor-pointer`}`}
                
                onClick={handleLogin}>
                   Đăng nhập {isLoading? <Loading/>:""}
                </button>
                <p className='text-md font-semibold text-gray-600'>Bạn quên mật khẩu? 
                    <a href="#" className='text-blue-600 hover:underline hover:cursor-pointer px-1' onClick={control}>
                        Liên hệ IT
                    </a>
                </p>
            </div>
        </>
    )
}

export default LoginComponent