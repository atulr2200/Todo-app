import React, { useState } from 'react'

export default function AddTodo(addTodo) {
const [title, setTitle] = useState("");
const [desc, setDesc] = useState("");
const submit=(e)=>{
    e.preventDefault();
    if(!title || !desc){
        alert("Title or Descreption can not be black.");
    }
    else{
     addTodo.addTodo(title,desc);
     setTitle("");
     setDesc("");
    }
}

  return (
    <div className="container my-3">

        <h3>Add a Todo</h3>
        <form onSubmit={submit}>
  <div className="form-group">
    <label htmlFor="title">Todo Title</label>
    <input type="text" className="form-control" value={title} onChange={(e)=>{setTitle(e.target.value)}} id="title" aria-describedby="emailHelp" placeholder=""/>
    
  </div>
  <div className="form-group">
    <label htmlFor='desc'>Description</label>
    <input type="text" className="form-control" value={desc} onChange={(e)=>{setDesc(e.target.value)}} id="desc" placeholder=""/>
  </div>
  
  <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
</form>
    </div>
  )
}
