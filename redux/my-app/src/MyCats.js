import React from 'react'
import { NavLink, Link, Outlet,useLocation } from "react-router-dom";
 
const MyCats = () => {
    let cats=[{id:1,desc:'dairy'},{id:2,desc:'salty'},{id:3,desc:'juices'}]
    
  return (
    <div style={{backgroundColor:"pink"}}>MyCats
        {cats.map((cat) => (
        <NavLink  key={cat.id} to={`/categories/${cat.id}`}>
          {cat.desc} {" "} {" "} {" "} {" "}
        </NavLink>
      ))}

        <Outlet></Outlet>
    </div>
  )
}

export default MyCats