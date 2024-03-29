import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav'

import { useAuth0 } from "@auth0/auth0-react";
import { addtask } from './api';


const  Addtask=({match})=> {
  const { user, isAuthenticated,loginWithRedirect } = useAuth0();

  
  const [values, setValues] = useState({

      title: "",
      description: "",
      createdby: user.name,
      assignedto: "",
      estimation: "",
      status: "not completed",
      adminId: window.$adminid,
      projectId:match.params.id,
})

const [result,setresult]=useState({
  error:false,
  success:"",
})







  const {error,success}=result;
  const {title,description,createdby,assignedto,estimation,status,adminId,projectId}=values;

  const handlechange=name=>event=>{
    setValues({...values,[name]:event.target.value})
}


const successmessgae=()=>{

  return (
<div className="alert alert-success mt-3" 
      style={{display:success?"":"none"}}        >
         Task has been Added Successfully by {title}  <Link to="/">Click here</Link> to go back Home
      </div> 
  )
}
const onsubmit=event =>{
  event.preventDefault();
  if(!values.title || !values.createdby || !values.projectId|| !values.estimation || !values.description || !values.assignedto )
{
  alert("please include all fields")
}
else{
  alert("Task has been added successfully")

  setValues({...values})
  setresult({...result,error:false,success:"true"}) 
  
  addtask(values.projectId,values)

  
  .then(data=>{
    setValues({...values,
      title: "",
      description: "",
      createdby: "",
      assignedto: "",
      estimation: "",
      status: "not completed",
      adminId: window.$id,
      projectId:0,
    
    })

  }).catch(err=>console.log(err))
}
}

    return (
        <div>
            <Nav/>
            {successmessgae}

            <div className="container pt-5">
            <h1 class="display-4 pb-5">ADD TASK</h1>
            <div className="form-row">
    <div class="form-group col-md-6">
      <label>Title</label>
      <input type="text" className="form-control" onChange={handlechange("title")} autoFocus required placeholder="Task Title" value={title}/>
    </div>

    <div class="form-group col-md-6">
      <label>Assigned to</label>
      <input type="email" className="form-control" onChange={handlechange("assignedto")} autoFocus required placeholder="Assigning To-intern email" value={assignedto}/>
    </div>
    <div class="form-group col-md-6">
      <label>Project Id</label>
      <input type="text" className="form-control" onChange={handlechange("projectId")} autoFocus required placeholder="Project Id" value={projectId}/>
    </div>
    <div class="form-group col-md-6">
      <label>Created By</label>
      <input type="email" className="form-control" onChange={handlechange("createdby")} autoFocus required placeholder="Created BY-admin email" value={createdby}/>
    </div>
    <div class="form-group col-10">
      <label>Description</label>
      <input type="text" className="form-control" onChange={handlechange("description")} autoFocus required placeholder="Description" value={description}/>
    </div>
    <div class="form-group col-2">
      <label>Estimation</label>
      <input type="text" className="form-control" onChange={handlechange("estimation")} autoFocus required placeholder="Estimation-time" value={estimation}/>
    </div>

    <span className="pt-5"></span>
    <button className="btn btn-primary p-2" onClick={onsubmit}> Add Task</button>
    </div>
    </div>            
        </div>
    )
}

export default Addtask
