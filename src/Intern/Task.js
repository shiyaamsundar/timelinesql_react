import React from 'react'
import styled from 'styled-components'
import Nav from '../Nav'


const Task=()=> {
    const CArd=()=>{

        return (
            <Carddiv>
                <div className="card ">
            <div className="container row p-5 rounded ">
            <Styledcol>
            <div className="col-1">
                
            </div>
            </Styledcol>
            <div   className="col-11">
                <div className="row">
                    <h5 className="pl-2">Task title</h5>
                </div>
                <div className="row pl-2">
                    <span>created-by:</span>admin
                </div>
                <div className="row pl-2">
                <span>task descritpin:</span>0
 
                </div>

                <div className="row pl-2">
                <span>Status:</span>InCompleted<i className="fa fa-circle pt-1 pl-2" aria-hidden="true" style={{color:"green"}}></i>
                </div>

                <div className="row pt-2 pl-3">
            <button className="btn btn-primary rounded">Raise Issue</button><span className="p-1"></span> <button className="btn btn-success rounded">Finish Task </button>    
            </div>   
           <div className='pt-2'></div>             


            </div>
            
        </div>

        </div>
        </Carddiv>
      
        )
    }




    return (
        <div>
        <Nav/>
        <div className="row">
            <CArd/>
        </div>

        </div>
    )
}

const Carddiv=styled.div`

flex-direction:column;
display:flex;

box-sizing:border-box;
border-radius:1px;

width:31.5rem;
padding-right:10px;
padding-left:5px;
`;
const Styledcol=styled.div`
background-color:grey;
height:6.8rem;
width:8px;
padding-left:12px;

`;

export default Task
