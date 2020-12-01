import React from 'react'
import Nav from '../Nav'



const EditProgress=()=> {
    return (
        <div>
            <Nav/>

            <div className="container pt-5">
            <h1 class="display-4 pb-5">Edit Progress</h1>
            <div className="form-row">
    <div class="form-group col-md-6">
      <label>Title</label>
      <input type="text" className="form-control"/>
    </div>

    <div class="form-group col-md-6">
      <label>Assigned to</label>
      <input type="email" className="form-control"/>
    </div>
    <div class="form-group col-md-6">
      <label>Project Id</label>
      <input type="text" className="form-control"/>
    </div>
    <div class="form-group col-md-6">
      <label>Created By</label>
      <input type="email" className="form-control"/>
    </div>
    <div class="form-group col-12">
      <label>Description</label>
      <input type="text" className="form-control"/>
      

    </div>
    <label className="pt-3">Choose a car:</label>
    <div className="pl-5 pt-3">
    <select className="row">
    <option value="volvo">TO-DO</option>
    <option value="mercedes">IN-Progress</option>
    <option value="saab">Completed</option>
  
  
</select></div>
<br/>
        <div className="pt-2">
    <span className="pt-2 pl-5 "></span>
    <button className="btn btn-success p-2"> Save Progress</button></div>
    </div>
    </div>            
        </div>
    )
}

export default EditProgress
