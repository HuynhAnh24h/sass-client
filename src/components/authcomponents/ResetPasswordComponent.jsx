import { FaEye } from "react-icons/fa6"
import { FaEyeSlash } from "react-icons/fa"
import { useAuthValidate } from "../../hooks"
const ResetPasswordComponent = ({
  control,
  controlPassword,
  passwordStatus,
  resetPasswordData,
  handleChange,
  handleReset,
}) => {
  const {errors, isValid} = useAuthValidate(resetPasswordData,{
    email: {isEmail: true, required: true},
    password: {isStrongPassword: true, required: true}
  })
  return (
    <>
      <p className='text-center text-lg md:text-xl font-bold text-blue-900'>
        Reset Password
      </p>
      <div className='flex flex-col justify-items-start mx-5 gap-1'>
        <label htmlFor="fullName" className='text-lg font-semibold text-blue-900'>Họ và tên</label>
        <input id='fullName' type='text' placeholder='Nhập họ và tên ...'
          name="fullName"
          value={resetPasswordData.fullName}
          onChange={handleChange}
          className='border outline-none border-gray-300 rounded-sm px-2 py-3'
        />
        {resetPasswordData.fullName == "" ? (<p className="text-red-500 text-[10px] font-semibold">Họ và tên không được để trống</p>):""}
      </div>
      <div className='flex flex-col justify-items-start mx-5 gap-1'>
        <label htmlFor="roleClass" className='text-lg font-semibold text-blue-900'>Bộ phận</label>
        <input id='roleClass' type='text' placeholder='Nhập bộ phận ...'
          name="roleClass"
          value={resetPasswordData.roleClass}
          onChange={handleChange}
          className='border outline-none border-gray-300 rounded-sm px-2 py-3'
        />
        {resetPasswordData.roleClass == "" ? (<p className="text-red-500 text-[10px] font-semibold">Bộ phận không được để trống</p>):""}
      </div>
      <div className='flex flex-col justify-items-start mx-5 gap-1'>
        <label htmlFor="Email" className='text-lg font-semibold text-blue-900'>Email</label>
        <input id='email' type='text' placeholder='Nhập bộ email ...'
        name="email"
        value={resetPasswordData.email}
        onChange={handleChange}
          className='border outline-none border-gray-300 rounded-sm px-2 py-3'
        />
        {resetPasswordData.email == "" ? (<p className="text-red-500 text-[10px] font-semibold">Email không được để trống</p>):(
          errors.email ? (<p className="text-red-500 text-[10px] font-semibold">{errors.email}</p>):""
        )}
      </div>
      <div className='flex flex-col justify-items-start mx-5 gap-1 relative'>
        <label htmlFor="newPassword" className='text-lg font-semibold text-blue-900'>Password mới</label>
        <input id='newPassword' type={passwordStatus ? "text" : "password"} placeholder='Nhập password ...'
        name="newPassword"
        value={resetPasswordData.newPassword}
        onChange={handleChange}
          className='border outline-none border-gray-300 rounded-sm px-2 py-3 '
        />
        {resetPasswordData.newPassword === "" ? (<p className="text-red-500 text-[10px] font-semibold">Password không được để trống</p>):(
                     errors.password  ? (<p className="text-red-500 text-[10px] font-semibold">{errors.password}</p>):""
        )}
        <div className='absolute bottom-8 right-5'>
          {
            passwordStatus ? (<FaEyeSlash size={20} className='text-gray-600 hover:text-blue-900 transition-all cursor-pointer' onClick={controlPassword} />) :
              (<FaEye size={20} className='text-gray-600 hover:text-blue-900 transition-all cursor-pointer' onClick={controlPassword} />)
          }
        </div>
      </div>
      <div className='flex flex-col justify-items-start mx-5 gap-1 relative'>
        <label htmlFor="re-password" className='text-lg font-semibold text-blue-900'>Xác nhận password</label>
        <input id='re-password' type={passwordStatus ? "text" : "password"} placeholder='Xác nhận password...'
        name="rePassword"
        value={resetPasswordData.rePassword}
        onChange={handleChange}
          className='border outline-none border-gray-300 rounded-sm px-2 py-3 '
        />
        {resetPasswordData.rePassword == "" ? (<p className="text-red-500 text-[10px] font-semibold">Password không được để trống</p>):(
          errors.password  ? (<p className="text-red-500 text-[10px] font-semibold">{errors.password}</p>):""
        )}
        <div className='absolute bottom-8 right-5'>
          {
            passwordStatus ? (<FaEyeSlash size={20} className='text-gray-600 hover:text-blue-900 transition-all cursor-pointer' onClick={controlPassword} />) :
              (<FaEye size={20} className='text-gray-600 hover:text-blue-900 transition-all cursor-pointer' onClick={controlPassword} />)
          }
        </div>
      </div>
      <div className='flex flex-col justify-center items-center gap-2'>
        <button 
        onClick={handleReset} disabled={!isValid}
        className={`outline-none ${!isValid ? "bg-gray-300 text-blue hover:bg-gray-300 hover:text-blue hover:cursor-grab":""}
                bg-blue-900 text-md font-bold px-5 py-2 rounded-sm text-white
                transition-all hover:bg-blue-600 hover:rounded-2xl hover:cursor-pointer
        `}>
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