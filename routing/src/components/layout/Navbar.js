import React from 'react'
import { NavLink,Link } from 'react-router-dom'

const Navbar = () => {
  return (
<div className='navbar_start'>
         
         <nav className="navbar navbar-expand-lg  p-3"  style={{boxShadow:"1px 10px 10px 0px #E2E6E1",fontSize:"18px"}}>
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
     
     
    </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
     
          <ul className="navbar-nav">
     
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>
     
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/about">About</NavLink>
            </li>
     
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/contact">Contact</NavLink>
            </li>
            
          </ul>
        </div>
        <Link className='btn btn-outline-primary' to='/user/add'>
            Add User
        </Link>
     
      </div>
         </nav>
          
        </div>
  )
}

export default Navbar
