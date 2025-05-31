import {BrowserRouter,Router,Routes,Route} from "react-router-dom"
import { Home, Login } from "./pages"
import { Root } from "./components"

const App = () => {
  return (
   <BrowserRouter>
      <Routes>
          <Route path="/" element={<Root/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/admin/dashboard" element={<Root/>}/>
          <Route path="/user/dashboard" element={<Root/>}/>
          <Route path="/hr/dashboard" element={<Root/>}/>
          <Route path="/accountant/dashboard" element={<Root/>}/>
          <Route path="/manager/dashboard" element={<Root/>}/>

      </Routes>
   </BrowserRouter>
  )
}

export default App