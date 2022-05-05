import React from "react";
import { Container } from "@mui/material";
import Select from "react-select";
import { useState, useEffect } from "react";

function FilterStaffData() {
  const [managerData, setManagerData] = useState([]);
  const [departmentData, setDepartmentData] = useState([]);
  const [status, setStatus] = useState(true);

  //Getting manager data
  useEffect(() => {
    fetch("http://localhost:5000/staff/getManagers")
      .then((resp) => resp.json())
      .then((data) => setManagerData(data));
  }, []);

  //Getting Department details
  useEffect(() => {
    fetch("http://localhost:5000/dept/")
      .then((resp) => resp.json())
      .then((data) => setDepartmentData(data));
  }, []);

  const staffStatus = [
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
  ];
  //Storing our data inisde localstorage so can easily access it in different component
  let managerName = managerData.firstname + " " + managerData.lastname;

  localStorage.setItem("department", departmentData.name);
  localStorage.setItem("status", status.value);
  localStorage.setItem("manager", managerName);
  return (
    <div>
      <Container className="filter_container">
        <h4>Filter</h4>
        <Container className="filter_options_container">
          <div className="label_select_wrapper">
            <label>Status</label>
            <Select
              isSearchable
              options={staffStatus}
              onChange={setStatus}
              value={status}
              className="selectedOption"
            />
          </div>
        </Container>
        <Container className="filter_options_container">
          <div className="label_select_wrapper">
            <label>Department</label>
            <Select
              isSearchable
              options={departmentData}
              onChange={setDepartmentData}
              getOptionLabel={(option) => option.name}
              getOptionValue={(option) => option.name}
              className="selectedOption"
            />
          </div>
        </Container>
        <Container className="filter_options_container">
          <div className="label_select_wrapper">
            <label>Manager</label>
            <Select
              isSearchable
              options={managerData}
              onChange={setManagerData}
              getOptionLabel={(option) =>
                option.firstname + " " + option.lastname
              }
              getOptionValue={(option) =>
                option.firstname + " " + option.lastname
              }
              className="selectedOption"
            />
          </div>
        </Container>
      </Container>
    </div>
  );
}

export default FilterStaffData;
