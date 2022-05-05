import { useState } from "react";
import "./pages.css";
import axios from "axios";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const staff = {
      email: email,
      password: password,
    };
    axios.post("http://localhost:5000/staff/", staff).then((resp) => {
      if (resp.data.token) {
        if (resp.data.status === true) {
          localStorage.setItem("staff", JSON.stringify(resp.data));
          const location = (window.location.href = "/main");
          return resp.data && location;
        } else {
          alert(
            "Your current status is inactive. Please talk to admin to sort you out"
          );
        }
      } else {
        alert("You dont have a valid token");
      }
    });
  };
  localStorage.removeItem("department");
  localStorage.removeItem("status");
  localStorage.removeItem("manager");
  return (
    <div className="login_container_outline">
      <div className="login_container_inside">
        <h2 className="login_header">Login</h2>
        <form onSubmit={handleSubmit}>
          <label className="label_login">Username</label>
          <input
            type="input"
            name="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login_input_box"
          />
          <label className="label_login">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login_input_box"
          />
          <button className="login_button">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
