import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Addtask from './Intern/Addtask';
import Dashboard from './Intern/Dashboard';
import EditProgress from './Intern/EditProgress';
import Home from './Intern/Home';
import Issue from './Intern/Issue';
import Projects from './Intern/Projects';
import Task from './Intern/Task';
import ViewProject from './Intern/ViewProject';


function Routes() {
    return (
       <BrowserRouter>
        <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/dashboard" exact component={Dashboard}></Route>
        <Route path="/project" exact component={Projects}></Route>
        <Route path="/project/viewproject" exact component={ViewProject}></Route>
        <Route path="/project/editprogress" exact component={EditProgress}></Route>
        <Route path="/project/addtask" exact component={Addtask}></Route>
        <Route path="/project/issue" exact component={Issue}></Route>
        <Route path="/task" exact component={Task}></Route>

        </Switch>
        </BrowserRouter>
    )
}

export default Routes
