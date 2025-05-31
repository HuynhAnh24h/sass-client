import {BrowserRouter,Router,Routes,Route} from "react-router-dom"
import { Dashboard, Login } from "./pages"
import { Root,ProtectedRouter } from "./utils"
import MainLayout from "./layouts/MainLayout"

const App = () => {
  return (
   <BrowserRouter>
      <Routes>
          <Route path="/" element={<Root/>}/>
          <Route path="/login" element={<Login/>}/>

          {/* Route Admin */}
          <Route path="/admin/dashboard" element={
            <ProtectedRouter requireRole={"admin"}>
              <MainLayout/>
            </ProtectedRouter>
          }>
            <Route index element ={<Dashboard/>}/>
          </Route>
          {/* Route Admin */}


          {/* Route Hr */}
          <Route path="/hr/dashboard" element={
            <ProtectedRouter requireRole={"hr"}>
              <><h1>HrDashboard</h1></>
            </ProtectedRouter>
          }/>
          {/* Route Hr */}

          {/* Route User */}
          <Route path="/user/dashboard" element={
            <ProtectedRouter requireRole={"user"}>
              <><h1>UserDashboard</h1></>
            </ProtectedRouter>
          }/>
          {/* Route User */}

          {/* Route Manager */}
          <Route path="/manager/dashboard" element={
            <ProtectedRouter requireRole={"manager"}>
              <><h1>ManagerDashboard</h1></>
            </ProtectedRouter>
          }/>
          {/* Route Manager */}

          {/* Route Accountant */}
          <Route path="/accountant/dashboard" element={
            <ProtectedRouter requireRole={"accountant"}>
              <><h1>AccountantDashboard</h1></>
            </ProtectedRouter>
          }/>
          {/* Route Accountant */}

          {/* Controll Route Unauthorize */}
          <Route path="/unauthorized" element={
            <ProtectedRouter requireRole={""}>
              <><h1>Un Authorized</h1></>
            </ProtectedRouter>
          }/>
      </Routes>
   </BrowserRouter>
  )
}

export default App