import React from 'react'

const AuthLayout = ({children}) => {
  return (
    <div className='h-screen w-screen bg-blue-950 flex justify-center items-center'>
        {children}
    </div>
  )
}

export default AuthLayout