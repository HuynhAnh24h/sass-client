import { Sidebar } from "../components"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
     <div className='flex'>
        <Sidebar/>
        <div className='flex-1 bg-gray-100 min-h-screen'>
            <Outlet/>
        </div>
    </div>
  )
}

export default MainLayout