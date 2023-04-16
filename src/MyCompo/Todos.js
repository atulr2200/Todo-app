import React from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {
    let h3={
        min:"70vh",
        margin:"40px auto"

    }
  return (
    
    <div className='container'>
        <h3 className='text-center my-3' style={h3}>Todos list</h3>
        {props.todos.length===0? "No todo to display":
         props.todos.map((todo)=>{
            return( <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
              
            )
        }) 
    }
        
    </div>
  )
}

