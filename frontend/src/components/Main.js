import { useState } from "react";
import MainPageAdmin from "../pages/Admin/MainPageAdmin";
import MainPageMan from "../pages/Manager/MainPageMan";
import MainPageEmp from "../pages/Employee/MainPageEmp";

function Main() {
  const staff = JSON.parse(localStorage.getItem("staff"));
  const [role] = useState(staff.role);
  return (
    <div>
      {role === "admin" && <MainPageAdmin />}
      {role === "manager" && <MainPageMan />}
      {role === "employee" && <MainPageEmp />}
    </div>
  );
}

export default Main;
