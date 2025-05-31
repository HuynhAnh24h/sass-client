import { MdDashboard } from "react-icons/md";
import { HiUserGroup } from "react-icons/hi2";
import { FaPeopleRoof } from "react-icons/fa6"
import { RiHomeOfficeFill } from "react-icons/ri";
import { TbReport } from "react-icons/tb";
import { FaFileExport } from "react-icons/fa6";
import { BiSolidBellRing } from "react-icons/bi";
import { BsFileEarmarkPost } from "react-icons/bs";

const ADMIN_ROUTES = {
    DASHBOARD: "/admin/dashboard",
    USERS: "/admin/users",
    STAFF: "/admin/staff",
    CLASSES: "/admin/classes",
    REPORTS: "/admin/reports",
    EXPORT: "/admin/export",
    CAREEN: "/admin/export",
};
export const SideBarItems =[
        { id: 1, name: "Thống kê", path: ADMIN_ROUTES.DASHBOARD, icon: <MdDashboard /> },
        { id: 2, name: "QL Tài Khoản", path: ADMIN_ROUTES.USERS, icon: <HiUserGroup /> },
        { id: 3, name: "QL Nhân Viên", path: ADMIN_ROUTES.STAFF, icon: <FaPeopleRoof /> },
        { id: 4, name: "QL Bộ Phận", path: ADMIN_ROUTES.CLASSES, icon: <RiHomeOfficeFill /> },
        { id: 5, name: "Quản Lý Nhập", path: ADMIN_ROUTES.REPORTS, icon: <TbReport /> },
        { id: 6, name: "Quản Lý Xuất", path: ADMIN_ROUTES.EXPORT, icon: <FaFileExport /> },
        { id: 7, name: "Đặt Cơm", path: ADMIN_ROUTES.DASHBOARD, icon: <BiSolidBellRing /> },
        { id: 8, name: "Đăng tuyển dụng", path: ADMIN_ROUTES.CAREEN, icon: <BsFileEarmarkPost />},
]
