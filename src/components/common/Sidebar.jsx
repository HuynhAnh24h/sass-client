import { SideBarItems } from "../../constants/SideBarItems"
import { LuLogOut } from "react-icons/lu"
import { IoSettings } from "react-icons/io5"

const Sidebar = () => {
    return (
        <div className="flex flex-col bg-gray-800 gap-10 w-64 py-5 relative">
            <p className="text-center px-5 py-3 font-bold text-2xl text-white">Kornbest SASS</p>
            <ul>
                {SideBarItems.map((value, index) => (
                    <li key={value.id}>
                        <a href={value.path} className="flex items-center gap-2 font-bold text-gray-300 text-lg 
                            transition-all px-10 py-3 rounded-sm
                            hover:text-white hover:cursor-pointer hover:bg-gray-600
                        ">
                            <span>{value.icon}</span>
                            <span>{value.name}</span>
                        </a>
                    </li>
                ))}
            </ul>
            <div className="absolute w-full bottom-5">
                <button className="flex items-center gap-2 font-bold text-gray-300 text-lg transition-all px-10 py-3 rounded-sm w-full
                hover:text-white hover:cursor-pointer hover:bg-gray-600">
                    <span><LuLogOut /></span>
                    <span>Đăng xuất</span>
                </button>
                <button className="flex items-center gap-2 font-bold text-gray-300 text-lg transition-all px-10 py-3 rounded-sm w-full
                hover:text-white hover:cursor-pointer hover:bg-gray-600">
                    <span><IoSettings /></span>
                    <span>Cài Đặt</span>
                </button>
            </div>
        </div>
    )
}

export default Sidebar