import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../pages/pages.css";
import NavBarAdmin from "../../components/Admin/NavBarAdmin";
import Select from "react-select";
import { Link, useParams } from "react-router-dom";

function EditStaffAdmin() {
  const { id } = useParams();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [manager, setManager] = useState("");
  const [data, setData] = useState([]);
  const [status, setStatus] = useState();

  //Getting all the data so that we can get the manager data
  useEffect(() => {
    fetch("http://localhost:5000/staff/getManagers")
      .then((resp) => resp.json())
      .then((data) => setData(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const staff = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      telephoneNumber: telephoneNumber,
      employeeManager: manager.firstname + " " + manager.lastname,
      status: status.value === "Active" ? true : false,
    };

    axios
      .patch(`http://localhost:5000/staff/edit/${id}`, staff)
      .catch((err) => err);

    //Emptying input boxes after entry
    setFirstname("");
    setLastname("");
    setEmail("");
    setTelephoneNumber("");
  };

  const staffStatus = [
    { value: "Active", label: "Active" },
    { value: "Inactive", label: "Inactive" },
  ];
  return (
    <>
      <NavBarAdmin />
      <div className="add_wrapper">
        <h2 className="h2_create"> Edit Employee</h2>
        <form className="form_container">
          <label>Name</label>
          <input
            className="add_input"
            value={firstname}
            name="firstname"
            onChange={(e) => setFirstname(e.target.value)}
          />
          <br />
          <label>Surname: </label>
          <input
            className="add_input"
            value={lastname}
            name="lastname"
            onChange={(e) => setLastname(e.target.value)}
          />
          <br />
          <label>Telephone Number:</label>
          <input
            className="add_input"
            value={telephoneNumber}
            name="telephoneNumber"
            onChange={(e) => setTelephoneNumber(e.target.value)}
          />
          <br />
          <label>Email Adress: </label>
          <input
            className="add_input"
            value={email}
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <div className="label_select_wrapper">
            <label>Manager: </label>
            <Select
              isSearchable
              options={data}
              onChange={setManager}
              getOptionLabel={(option) =>
                option.firstname + " " + option.lastname
              }
              getOptionValue={(option) =>
                option.firstname + " " + option.lastname
              }
              className="selectedOption"
            />
          </div>
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
          <br />
          <br />
          <div className="add_buttons">
            <button onClick={handleSubmit}>Submit</button>
            <Link to={"/main"}>
              <button>Cancel</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditStaffAdmin;
