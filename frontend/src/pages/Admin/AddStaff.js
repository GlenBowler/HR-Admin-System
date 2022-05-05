import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../pages/pages.css";
import NavBarAdmin from "../../components/Admin/NavBarAdmin";
import Select from "react-select";
import { Link } from "react-router-dom";

function AddStaff() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [manager, setManager] = useState("");
  const [data, setData] = useState([]);

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
    };
    axios.post("http://localhost:5000/staff/add", staff);

    //Emptying input boxes after entry
    setFirstname("");
    setLastname("");
    setEmail("");
    setTelephoneNumber("");
  };

  return (
    <>
      <NavBarAdmin />
      <div className="add_wrapper">
        <h2 className="h2_create"> Create Employee</h2>
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
            <br />
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

          <br />
          <div className="add_buttons">
            <Link to={"/main"}>
              <button onClick={handleSubmit}>Submit</button>
            </Link>
            <Link to={"/main"}>
              <button>Cancel</button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddStaff;
