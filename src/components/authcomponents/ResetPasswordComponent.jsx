import { FaEye } from "react-icons/fa6"
import { FaEyeSlash } from "react-icons/fa"

const ResetPasswordComponent = ({
  control,
  controlPassword,
  passwordStatus,
  resePasswordData,
  handleChange,
  handleReset,
}) => {
  return (
    <>
      <p className='text-center text-lg md:text-xl font-bold text-blue-900'>
        Reset Password
      </p>
      <div className='flex flex-col justify-items-start mx-5 gap-1'>
        <label htmlFor="fullName" className='text-lg font-semibold text-blue-900'>Họ và tên</label>
        <input id='fullName' type='text' placeholder='Nhập tên ...'
          name="fullName"
          value={resePasswordData.fullName}
          onChange={handleChange}
          className='border outline-none border-gray-300 rounded-sm px-2 py-3'
        />
      </div>
      <div className='flex flex-col justify-items-start mx-5 gap-1'>
        <label htmlFor="roleClass" className='text-lg font-semibold text-blue-900'>Bộ phận</label>
        <input id='roleClass' type='text' placeholder='Nhập bộ phận ...'
          name="roleClass"
          value={resePasswordData.roleClass}
          onChange={handleChange}
          className='border outline-none border-gray-300 rounded-sm px-2 py-3'
        />
      </div>
      <div className='flex flex-col justify-items-start mx-5 gap-1'>
        <label htmlFor="Email" className='text-lg font-semibold text-blue-900'>Email</label>
        <input id='email' type='text' placeholder='Nhập bộ email ...'
        name="email"
        value={resePasswordData.email}
        onChange={handleChange}
          className='border outline-none border-gray-300 rounded-sm px-2 py-3'
        />
      </div>
      <div className='flex flex-col justify-items-start mx-5 gap-1 relative'>
        <label htmlFor="password" className='text-lg font-semibold text-blue-900'>Password mới</label>
        <input id='password' type={passwordStatus ? "text" : "password"} placeholder='Nhập password ...'
        name="newPassword"
        value={resePasswordData.newPassword}
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
      <div className='flex flex-col justify-items-start mx-5 gap-1 relative'>
        <label htmlFor="re-password" className='text-lg font-semibold text-blue-900'>Xác nhận password</label>
        <input id='re-password' type={passwordStatus ? "text" : "password"} placeholder='Nhập password ...'
        name="rePassword"
        value={resePasswordData.rePassword}
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
        <button 
        onClick={handleReset}
        className='outline-none
                bg-blue-900 text-md font-bold px-5 py-2 rounded-sm text-white
                transition-all hover:bg-blue-600 hover:rounded-2xl hover:cursor-pointer
        '>
          Xác nhận
        </button>
        <p className='text-md font-semibold text-gray-600'>
          <a href="#" className='text-blue-600 hover:underline hover:cursor-pointer'
            onClick={control}
          >
            Quay về đăng nhập
          </a>
        </p>
      </div>
    </>
  )
}

export default ResetPasswordComponent