import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">Materials</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">          
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li>
          <li className="navbar-item">
          <Link to="/product" className="nav-link">Create Product</Link>
          </li>
          <li className="navbar-item">
          <Link to="/productlist" className="nav-link">ProductList</Link>
          </li>
        </ul>
        </div>
      </nav>
    );
  }
}