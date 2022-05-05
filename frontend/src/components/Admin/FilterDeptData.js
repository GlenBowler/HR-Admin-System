import React from "react";
import { useState } from "react";
import { Container } from "@mui/material";
import Select from "react-select";

function FilterDeptData() {
  const [status, setStatus] = useState(true);

  const staffStatus = [
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
  ];
  localStorage.setItem("status", status.value);
  return (
    <div>
      <Container className="filter_container">
        <h4 className="h2_create">Filter</h4>
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
      </Container>
    </div>
  );
}

export default FilterDeptData;
