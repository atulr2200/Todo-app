
import './App.css';
import Header from './MyCompo/Header';
import Todos from './MyCompo/Todos';
import About from './MyCompo/About';
import Footer from './MyCompo/Footer';
import React,{useState , useEffect} from 'react';
import Addtodo from './MyCompo/AddTodo';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {
    let initTodo;
    if (localStorage.getItem("todos")===null) {
    initTodo=[]
    } else
     {
       initTodo=JSON.parse(localStorage.getItem("todos"));
    }
  const onDelete=(todo)=>{
    
    console.log("I am onDelete",todo);
    //let index = todos.indexOf(todo);
    //todos.splice(index, 1);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  const addTodo=(title, desc)=>{
    console.log("i am adding this todo",title,desc);
    let sno;
    if (todos.length===0) {
      sno=0;
    }
    else{
      sno=todos[todos.length-1].sno+1;
    }
    
    const mytodo={
      sno:sno,
      title:title,
      desc:desc,
    }
    

    setTodos([...todos, mytodo]);
    console.log(mytodo);
    useEffect(() => {
      localStorage.setItem("todos",JSON.stringify(todos))
      
    }, [todos])
    
  }
  const [todos,setTodos] =useState(initTodo)
  
  return (
    <>
    <Router>
      <Header title="Todo App | AR" searchbar={true}/>
      <Routes>
          <Route path="/"  element={
            <Addtodo addTodo={addTodo}/>
            }>
          </Route>
          <Route path="/added"  element={
            <Todos todos={todos} onDelete={onDelete}/>
            
            }>
          </Route>
          <Route path="/about"element={<About />}>
            
          </Route>
        </Routes>
      <Footer />
      </Router>
    </>   
  );
}

export default App;
