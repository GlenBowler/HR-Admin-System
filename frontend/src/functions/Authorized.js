import {Navigate } from "react-router-dom";
import AddStaff from "../pages/Admin/AddStaff";
import AddDept from "../pages/Admin/AddDept";
import EditDept from "../pages/Admin/EditDept";
import EditStaffAdmin from "../pages/Admin/EditStaffAdmin";
import DepartmentPage from "../pages/Admin/DepartmentPage";

//Admin protected routes
//Add staff 
export const RequireAuthAddStaff = () => {
    const staff =JSON.parse(localStorage.getItem("staff"));
    const staffRole = staff.role;
 
    return (
        staffRole==='admin'? <AddStaff/> :
                <Navigate to="/unauthorized" replace />
    );
}
//Add dept
export const RequireAuthAddDept = () => {
    const staff =JSON.parse(localStorage.getItem("staff"));
    const staffRole = staff.role;
 
    return (
        staffRole==='admin'? <AddDept/> :
                <Navigate to="/unauthorized" replace />
    );
}

//Edit dept
export const RequireAuthEditDept = () => {
    const staff =JSON.parse(localStorage.getItem("staff"));
    const staffRole = staff.role;
 
    return (
        staffRole==='admin'? <EditDept/> :
                <Navigate to="/unauthorized" replace />
    );
}

//Edit staff
export const RequireAuthEdStaff = () => {
    const staff =JSON.parse(localStorage.getItem("staff"));
    const staffRole = staff.role;
 
    return (
        staffRole==='admin'? <EditStaffAdmin/> :
                <Navigate to="/unauthorized" replace />
    );
}
//Showing the department table
export const RequireAuthDept = () => {
    const staff =JSON.parse(localStorage.getItem("staff"));
    const staffRole = staff.role;
 
    return (
        staffRole==='admin'? <DepartmentPage/> :
                <Navigate to="/unauthorized" replace />
    );
}
