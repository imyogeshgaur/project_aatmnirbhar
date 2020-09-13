import React from 'react'
import {NavLink} from 'react-router-dom'
const Menu = () => {
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <NavLink className="navbar-brand" to="./landing">Aatmnirbhar Bharat</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <NavLink activeClassName="active" className="nav-link" to="./landing">Home<span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="active" className="nav-link" to="./about">About</NavLink>
      </li>
      <li className="nav-item">
      <NavLink activeClassName="active" className="nav-link" to="./product">Product</NavLink>
    </li>
    <li className="nav-item">
    <NavLink activeClassName="active" className="nav-link" to="./signup">Signup</NavLink>
  </li>
    </ul>
  </div>
</nav>
    </>
  );
}

export default Menu;

