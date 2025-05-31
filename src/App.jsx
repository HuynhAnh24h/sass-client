import {BrowserRouter,Router,Routes,Route} from "react-router-dom"
import { Login } from "./pages"
import { Root,ProtectedRouter } from "./utils"

const App = () => {
  return (
   <BrowserRouter>
      <Routes>
          <Route path="/" element={<Root/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/admin/dashboard" element={
            <ProtectedRouter requireRole={"admin"}>
              <><h1>AdminDashboard</h1></>
            </ProtectedRouter>
          }/>
          <Route path="/hr/dashboard" element={
            <ProtectedRouter requireRole={"hr"}>
              <><h1>HrDashboard</h1></>
            </ProtectedRouter>
          }/>
          <Route path="/user/dashboard" element={
            <ProtectedRouter requireRole={"user"}>
              <><h1>UserDashboard</h1></>
            </ProtectedRouter>
          }/>
          <Route path="/manager/dashboard" element={
            <ProtectedRouter requireRole={"manager"}>
              <><h1>ManagerDashboard</h1></>
            </ProtectedRouter>
          }/>
          <Route path="/accountant/dashboard" element={
            <ProtectedRouter requireRole={"accountant"}>
              <><h1>AccountantDashboard</h1></>
            </ProtectedRouter>
          }/>
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