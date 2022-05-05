import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../src/pages/LoginPage";
import Main from "../src/components/Main";
import AddStaff from "./pages/Admin/AddStaff";
import AddDept from "./pages/Admin/AddDept";
import EditDept from "./pages/Admin/EditDept";
import EditStaffAdmin from "./pages/Admin/EditStaffAdmin";
import EditStaffME from "./pages/EditStaffME";
import DepartmentPage from "./pages/Admin/DepartmentPage";
import Unauthorized from "./components/UnAuthorized";
import {
  RequireAuthAddStaff,
  RequireAuthAddDept,
  RequireAuthEditDept,
  RequireAuthEdStaff,
  RequireAuthDept

} from './functions/Authorized.js'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
           {/*Public routes */}
           <Route path="/" element={<Login />} />
          <Route path="/editStaffME/:id" element={<EditStaffME />} />
          <Route path = "/unauthorized" element={<Unauthorized/>}/>
          <Route path="/main" element={<Main />} />

          {/*Admin routes PROTECTED */}
          <Route element={<RequireAuthAddStaff />}>
          <Route path="/add" element={<AddStaff/>} />
          </Route>
          <Route element={<RequireAuthAddDept/>}>
          <Route path="/addDept" element={<AddDept />} />
          </Route>
          <Route element={<RequireAuthEditDept/>}>
          <Route path="/editDept/:id" element={<EditDept />} />
          </Route>
          <Route element={<RequireAuthEdStaff/>}>
          <Route path="/editStaffAdmin/:id" element={<EditStaffAdmin />} />
          </Route>
          <Route element={<RequireAuthDept/>}>
          <Route path="/department" element={<DepartmentPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
