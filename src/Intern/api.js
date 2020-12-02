const API="http://localhost:5000"


export const interndashboard=(id)=>{
    return fetch(`${API}/interns/${id}/dashboard`,
    {method:'GET',}
    )
    .then(res=>{
        return res.json()
    })
    .catch(err=>console.log(err))
}


export const addtask=(id,data)=>{
    console.log("task",data)
    
    return fetch(`${API}/admin/projects/${id}/tasks`,{
        method:"POST",
        headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
    },
    body:JSON.stringify(data)
    
    
    
    },).then(res=>{
        console.log(res)
        return res.json()
    }).catch(err=>console.log(err))
}

export const internalltask=(id)=>{
    return fetch(`${API}/interns/${id}/alltasks`,
    {method:'GET',}
    )
    .then(res=>{
        return res.json()
    })
    .catch(err=>console.log(err))
}

export const updatetask=(id,task)=>{
    console.log(id,task)
    return fetch(`${API}/admins/task/${id}`,{
        method:"PUT",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
        },

    body:JSON.stringify(task)

},).then(res=>{
        console.log(task)
        return res.json()
    }).catch(err=>console.log(err))
}


export const updateproject=(id,proj)=>{
    console.log("proj",proj,id)
    return fetch(`${API}/admins/project/${id}`,{
        method:"PUT",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
        },

    body:JSON.stringify(proj)

},).then(res=>{
        console.log(proj)
        return res.json()
    }).catch(err=>console.log(err))
}
export const gettask=(id)=>{
    return fetch(`${API}/task/${id}`,
    {method:'GET',}
    )
    .then(res=>{
        return res.json()
    })
    .catch(err=>console.log(err))

}

export const projecttasks=(id)=>{
    return fetch(`${API}/intern/projects/${id}/tasks`,
    {method:'GET',}
    )
    .then(res=>{
        return res.json()
    })
    .catch(err=>console.log(err))

}

export const getintern=(id)=>{
    return fetch(`${API}/interngmail/${id}`,
    {method:'GET',}
    )
    .then(res=>{
        return res.json()
    })
    .catch(err=>console.log(err))

}

export const Allinternproject=(id)=>{
    return fetch(`${API}/interns/${id}/allprojects`,
    {method:'GET',}
    )
    .then(res=>{
        return res.json()
    })
    .catch(err=>console.log(err))

}