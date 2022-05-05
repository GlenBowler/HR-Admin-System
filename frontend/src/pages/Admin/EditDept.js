import React, { useEffect, useState } from 'react'
import NavBarAdmin from '../../components/Admin/NavBarAdmin';
import Select from "react-select";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function EditDept() {
    const {id} = useParams();
    const [name,setName] = useState("");
    const [manager,setManager] = useState("");
    const [status,setStatus] = useState("");
    const [data,setData]=useState([]);

    //Getting all the data so that we can get the manager data
  useEffect(()=>{
    fetch("http://localhost:5000/staff/getManagers")
    .then(resp=>resp.json())
    .then(data=> setData(data))
  },[]);

  const handleSubmit = (e)=>{
      e.preventDefault();
      const department = {
          "name": name,
          "manager": manager.firstname + " " + manager.lastname,
          "status": status.value==="Active"?true:false
      }
      axios.patch(`http://localhost:5000/dept/${id}`,department);

      setName('');
  }
  
  const deptStatus=[
      {value:"Active", label:"Active"},
      {value:"Inactive", label:"Inactive"}
  ]

  return (
    <div>
        <NavBarAdmin/>
    <div className='add_wrapper'>
        <h2 className='h2_create'> Edit Department</h2>
        <form className='form_container'>
          <label>Name</label>
          <input className='add_input' value={name} name="name" onChange={(e)=>setName(e.target.value)}/>
          <br/>
          <div className='label_select_wrapper'>
          <label>Manager: </label>
          <Select
            isSearchable
            options={data}
            onChange={setManager}
            getOptionLabel={(option)=>option.firstname +" "+ option.lastname}
            getOptionValue={(option)=>option.firstname + " "+ option.lastname}
            className="selectedOption"
          />
          </div>
          <div className='label_select_wrapper'>
          <label>Status</label>
          <Select
            isSearchable
            options={deptStatus}
            onChange={setStatus}
            value={status}
            className="selectedOption"
          />
          </div>
          <br/>
          <div className='add_buttons'>
          <Link to={'/main'}><button onClick={handleSubmit}>Submit</button></Link>
          <Link to={'/department'}><button>Cancel</button></Link>
        
          </div>
        </form>
       
    </div>
    </div>
  )
}

export default EditDept