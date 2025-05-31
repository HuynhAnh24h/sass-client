import { FaEye } from "react-icons/fa6"
import { FaEyeSlash } from "react-icons/fa"

const LoginComponent = ({ 
    control,
    controlPassword,
    passwordStatus,
    loginData,
    handleChange,
    handleLogin
}) => {
    return (
        <>
            <p className='text-center text-lg md:text-xl font-bold text-blue-900'>
                Quản lý nhân sự
            </p>
            <div className='flex flex-col justify-items-start mx-5 gap-1'>
                <label htmlFor="email" className='text-lg font-semibold text-blue-900'>Email</label>
                <input id='email' type='text' placeholder='Nhập email ...'
                    name="email"
                    value={loginData.email}
                    onChange={handleChange}
                    className='border outline-none border-gray-300 rounded-sm px-2 py-3'
                />
            </div>
            <div className='flex flex-col justify-items-start mx-5 gap-1 relative'>
                <label htmlFor="password" className='text-lg font-semibold text-blue-900'>Password</label>
                <input id='password' type={ passwordStatus ? "text" : "password"} placeholder='Nhập password ...'
                    name = "password"
                    value = {loginData.password}
                    onChange={handleChange}
                    className='border outline-none border-gray-300 rounded-sm px-2 py-3 '
                />
                <div className='absolute top-3/5 right-5'>
                    {
                         passwordStatus ? (<FaEyeSlash size={20} className='hover:text-blue-900 transition-all cursor-pointer' onClick={controlPassword} />) :
                            (<FaEye size={20} className='hover:text-blue-900 transition-all cursor-pointer' onClick={controlPassword} />)
                    }
                </div>
            </div>
            <div className='flex flex-col justify-center items-center gap-2'>
                <button className='outline-none
                bg-blue-900 text-md font-bold px-5 py-2 rounded-sm text-white
                transition-all hover:bg-blue-600 hover:rounded-2xl hover:cursor-pointer
               ' onClick={handleLogin}>
                    Đăng nhập
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