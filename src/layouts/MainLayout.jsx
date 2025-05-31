import React from 'react'

const MainLayout = ({children}) => {
  return (
    <>
        <header>
            This is Header
        </header>
            <div>
                {children}
            </div>
        <footer>
            This is footer
        </footer>
    </>
  )
}

export default MainLayout