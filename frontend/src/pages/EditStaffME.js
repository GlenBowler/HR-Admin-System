import React, { useState } from "react";
import axios from "axios";
import "./pages.css";
import { Link, useParams } from "react-router-dom";
import NavBarME from "../components/NavBarME";

function EditStaffME() {
  const { id } = useParams();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const staff = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      telephoneNumber: telephoneNumber,
    };

    axios
      .patch(`http://localhost:5000/staff/editMe/${id}`, staff)
      .then(alert("Succesfully edited user"))
      .catch((err) => err);

    //Emptying input boxes after entry
    setFirstname("");
    setLastname("");
    setEmail("");
    setTelephoneNumber("");
  };

  return (
    <>
      <NavBarME />
      <div className="add_wrapper">
        <h2> Edit Employee</h2>
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

export default EditStaffME;
