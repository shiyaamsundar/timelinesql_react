import { useAuth0 } from '@auth0/auth0-react'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import Nav from '../Nav'
import { getintern, interndashboard } from './api'



const Dashboard=()=> {
  const {pathname}=useLocation();
    const { user} = useAuth0();
    const [intern,setintern]=useState({
      projects:[],
        loaded:false,
});



const loadintern=()=>{
  console.log('hello')
  interndashboard(window.$id).then(data=>{
      if(data)
      {
          setintern({...intern,projects:data,loaded:true})
           

      
      }

  })
}


console.log('intern',intern.projects)
  const preload=()=>{
      getintern(user.name).then(data=>{
          if(data){
              window.$id=data[0].id
              window.$adminid=data[0].adminId
              loadintern()        
          }
      })
  }

  useEffect(()=>{
    preload()
},[pathname==='/dashboard'])



return (
  <div>
      <Nav/>
      <Sidediv>
  <div className="container col card">

  <span className="pt-5 pl-2 "></span>
  <button className="btn btn-primary">
<i class="fa fa-user" aria-hidden="true"></i><span>{user.name}</span></button>
  <div className="pt-4 pl-3">
  <StyledI>
  <Link to="/project/addtask"> <div className="row container pt-2"> <i class="fa fa-plus" aria-hidden="true"/><h5>
      Create task</h5></div></Link>
     
      <Link to="/issue"> <div className="row container pt-4" ><i class="fa fa-bug" aria-hidden="true"/><h5>View Issue</h5></div></Link>
      <Link><div className="row container pt-4"><i class="fa fa-file-o" aria-hidden="true"/><h5>Code</h5></div></Link>
      <Link><div className="row container pt-4"><i class="fa fa-cog" aria-hidden="true"/><h5>Project Settings</h5></div></Link>
      </StyledI>
  </div>


      
  </div></Sidediv>
  {!intern.loaded &&(
            <div className="d-flex justify-content-center pt-5">
         
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        )}
  {intern.loaded ?(
  <Maindiv>
  <div className="db pt-5">

<div className="container  userdashboard pb-5">
<div className="row">    
<h3 className="mgbt-xs-15 mgtp-10 font-semibold col">
  <i className="fa fa-user-circle pl-5 pt-5">Intern DashBoard <span className="pl-5">id:{intern.projects.intern.id}</span></i>
</h3>

</div>
<hr/>
<div className="row pt-5 line">
<li className="list-group-item col">   
                  <span className="badge bagde-success">First Name:</span>
<span className="det1">{intern.projects.intern.fname}</span>
              </li>
              <li className="list-group-item col">   
                  <span className="badge bagde-success">Last Name:</span>
<span className="det1">{intern.projects.intern.lname}</span>
              </li>
</div>

<div className="row pt-3 line">
<li className="list-group-item col">   
                  <span className="badge bagde-success fa fa-envelope">Email:</span>
<span className="det1">{intern.projects.intern.email}</span>
              </li>
              <li className="list-group-item col">   
                  <span className="badge bagde-success fa fa-phone">Phone:</span>
<span className="det1">{intern.projects.intern.phone}</span>
              </li>
</div>
<div className="row pt-3 line">
<li className="list-group-item col">   
                  <span className="badge fa fa-address-card">Address:</span>
<span className="det1">{intern.projects.intern.address}</span>
              </li>
</div>
<div className="row pt-3 line">
<li className="list-group-item col">   
  <span className="badge bagde-success fa fa-graduation-cap">College:</span>
<span className="det1">{intern.projects.intern.college}</span>
              </li>
</div>
<div className="row pt-3 line">
<div className="col">
<h5 className="pl-3 pb-3">Projects</h5>

{intern.projects.projects.length>0 &&
<ul>


{intern.projects.projects.map((p,idx)=>{
      return( <li className="lst">{intern.projects.projects[idx]["title"]}</li>
  )})}


</ul>}
</div>
<div className="col">
<h5 className="pl-3 pb-3">Tasks</h5>
{intern.projects.task.length>0 &&
<ul>


{intern.projects.task.map((p,idx)=>{
      return( <li className="lst">{intern.projects.task[idx]["title"]}</li>
  )})}


</ul>}
</div>
</div>
<div className="row pt-5 line">
<li className="list-group-item col">   
                  <span className="badge bagde-success fa fa-check">Project Completed:</span>
      <span className="badge badge-primary badge-pill">{intern.projects.projcomp.length}</span>
              </li>
              <li className="list-group-item col">   
                  <span className="badge bagde-success fa fa-exclamation-triangle">Projects Left:</span>
      <span className="badge badge-primary badge-pill">{intern.projects.projleft.length}</span>
              </li>
</div>  


{/* <div class="row progress pt-5 pb-5 ">
<div className="progress col pl-5">
<div className="progress-bar bg-success " role="progressbar" aria-valuenow="60"
aria-valuemin="0" aria-valuemax="100" style={{width:`${intern.pcomp*10+20}%`}}>
{intern.pcomp*10}% Completed 
</div>
</div>
<div className="pl-5 pr-5"></div>
<div className="progress col">
<div className="progress-bar bg-danger" role="progressbar" aria-valuenow="60"
aria-valuemin="0" aria-valuemax="100" style={{width:`${intern.ppend*10+20}%`}}>
{intern.ppend*10}% left 
</div>
</div>
</div> */}
<div className="row pt-3 line">
<li className="list-group-item col">   
                  <span className="badge bagde-success fa fa-check">Task Completed:</span>
      <span className="badge badge-primary badge-pill">{intern.projects.taskcomp.length}</span>
              </li>
              <li className="list-group-item col">   
                  <span className="badge bagde-success fa fa-exclamation-triangle">Task Left:</span>
      <span className="badge badge-primary badge-pill">{intern.projects.taskleft.length}</span>
              </li>
</div>   
{/*     
<div class="row progress pt-5 pb-5">
<div className="progress col pl-5">
<div className="progress-bar bg-success" role="progressbar" aria-valuenow="60"
aria-valuemin="0" aria-valuemax="100" style={{width:`${intern.tcomp*10+20}%`}}>
{intern.tcomp*10}% Complete 
</div>
</div>
<div className="pl-5 pr-5"></div>
<div className="progress col">
<div className="progress-bar bg-danger" role="progressbar" aria-valuenow="60"
aria-valuemin="0" aria-valuemax="100" style={{width:`${intern.tpend*10+20}%`}}>
{intern.tpend*10}% Left
</div>
</div>


</div>          */}
<div className="row pt-3 line">
<li className="list-group-item col">   
                  <span className="badge  fa fa-clock-o">Total Worked Hours:</span>
      <span className="badge badge-primary badge-pill ">{intern.projects.workedhours}</span>
                  <span className="det pl-2">days</span>
              </li>
</div>
</div>
</div>
</Maindiv>):<h1>Loading/.....</h1>}
  </div>

)
}

const Maindiv=styled.div`
padding-left:300px;
padding-top:50px;


`;


const StyledI=styled.div`
i{
color:black;
}

`;

const Sidediv=styled.div`
width:15rem;
height:100%;
position:absolute;

.card{
height:100%;


}
h5{
color:black;
font-size:large;
}
i{
padding-right:15px;
padding-top:4px;

}

button{
i{
  font-weight:500;
}
span{
  font-weight:600;
}
}


`;


export default Dashboard
