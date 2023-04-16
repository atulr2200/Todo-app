import React from 'react'
import './Header.css';
import {Link,} from "react-router-dom";

export default function Header(props) {
  return (
    <div className="navbar">
    <h1>{props.title}</h1>
  <div className="opt">

   <li><Link to="/">home</Link></li>
   <li><Link to="/added">View Todos</Link></li>
   <li><Link to="/About">about</Link></li>

     </div>

<li>
 {props.searchbar?<form> 
  <input type="text" name="search" className="search" placeholder="Search"/>
 <button className=" btn">search</button>
 </form>:""}
</li	>
</div>

  )
}
Header.defaultProps ={
  title:"Your Tital Here",
  searchbar:true
}

