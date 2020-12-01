import { useAuth0 } from '@auth0/auth0-react'
import React, { useState } from 'react'
import styled from 'styled-components'
import Nav from '../Nav'




const Dashboard=()=> {
    const { user} = useAuth0();
    const [intern,setintern]=useState({

        firstname:"",
        lastname:"",
        phone:"",
        college:"",
        address:"",
        email:"",
        project:[],
        pcomp:"",
        ppend:"",
        ptot:"",
        task:[],
        tcomp:"",
        tpend:"",
        ttot:"",
        hrs:"",
        period:"",
        uid:"",
        loaded:"false",
});


const DashboardMain=()=>{
        return (
            <div className="db pt-5">
    
                <div className="container  userdashboard pb-5">
                <div className="row">    
                <h3 className="mgbt-xs-15 mgtp-10 font-semibold col">
                <i className="fa fa-user-circle pl-5 pt-5">User DashBoard </i>
                </h3>
        <p className="col pt-5"><h5 className="col">id:-</h5><h6 className="col">{intern.uid}</h6></p>
                </div>
                <hr/>
                <div className="row pt-5 line">
                <li className="list-group-item col">   
                                    <span className="badge bagde-success">First Name:</span>
        <span className="det1">{intern.firstname}</span>
                                </li>
                                <li className="list-group-item col">   
                                    <span className="badge bagde-success">Last Name:</span>
        <span className="det1">{intern.lastname}</span>
                                </li>
                </div>
                
                <div className="row pt-3 line">
                <li className="list-group-item col">   
                                    <span className="badge bagde-success fa fa-envelope">Email:</span>
            <span className="det1">abcd@gmail.com</span>
                                </li>
                                <li className="list-group-item col">   
                                    <span className="badge bagde-success fa fa-phone">Phone:</span>
        <span className="det1">{intern.phone}</span>
                                </li>
                </div>
                <div className="row pt-3 line">
                <li className="list-group-item col">   
                                    <span className="badge fa fa-address-card">Address:</span>
        <span className="det1">{intern.address}</span>
                                </li>
                </div>
                <div className="row pt-3 line">
                <li className="list-group-item col">   
                    <span className="badge bagde-success fa fa-graduation-cap">College:</span>
        <span className="det1">{intern.college}</span>
                                </li>
                </div>
                <div className="row pt-3 line">
                <div className="col">
                <h5 className="pl-3 pb-3">Projects</h5>
                
                {/* {intern.project.length>0 &&
                <ul>
                
                
                {intern.project.map((p,idx)=>{
                        return( <li className="lst">{project[idx]}</li>
                    )})}

    
    </ul>} */}
                </div>
                <div className="col">
                <h5 className="pl-3 pb-3">Tasks</h5>
                {/* {intern.task.length>0 &&
                <ul>
                
                
                {intern.task.map((p,idx)=>{
                        return( <li className="lst">{task[idx]}</li>
                    )})}

    
    </ul>} */}
                </div>
                </div>
                <div className="row pt-5 line">
                <li className="list-group-item col">   
                                    <span className="badge bagde-success fa fa-check">Project Completed:</span>
                        <span className="badge badge-primary badge-pill">{intern.pcomp}</span>
                                </li>
                                <li className="list-group-item col">   
                                    <span className="badge bagde-success fa fa-exclamation-triangle">Projects Left:</span>
                        <span className="badge badge-primary badge-pill">{intern.ppend}</span>
                                </li>
                </div>  
    
    
                <div class="row progress pt-5 pb-5 ">
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
      </div>
                <div className="row pt-3 line">
                <li className="list-group-item col">   
                                    <span className="badge bagde-success fa fa-check">Task Completed:</span>
                        <span className="badge badge-primary badge-pill">{intern.tcomp}</span>
                                </li>
                                <li className="list-group-item col">   
                                    <span className="badge bagde-success fa fa-exclamation-triangle">Task Left:</span>
                        <span className="badge badge-primary badge-pill">{intern.tpend}</span>
                                </li>
                </div>   
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
    
    
      </div>         
      <div className="row pt-3 line">
                <li className="list-group-item col">   
                                    <span className="badge  fa fa-clock-o">Total Worked Hours:</span>
                        <span className="badge badge-primary badge-pill ">{intern.hrs}</span>
                                    <span className="det">Hours</span>
                                </li>
                </div>
                </div>
            </div>
        )
    
    }

    
    return (
        <div>
            <Nav/>
            

            <DashboardMain/>
            

            
        </div>
    )
}

export default Dashboard
