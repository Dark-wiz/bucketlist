import React from 'react';
import { NavLink } from 'react-router-dom'
import AuthServices from '../../utils/authorization';
const NavBar = () => {
    return (
        <div className="main-navbar sticky-top bg-white">
            <nav className="navbar align-items-stretch navbar-light flex-md-nowrap p-0">
                <div className="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
                    <div style={{ display: "none" }}>
                        <form action="#" >
                            <div className="input-group input-group-seamless ml-3">
                                <div className="input-group-prepend">
                                    <div className="input-group-text">
                                        <i className="fas fa-search"></i>
                                    </div>
                                </div>
                                <input className="navbar-search form-control" type="text" placeholder="Search for something..." aria-label="Search" /> </div>
                        </form>

                    </div>
                </div>
                <ul className="navbar-nav border-left flex-row ">
                    <li className="nav-item dropdown">
                        <p className="nav-link text-nowrap px-3">Hello, {AuthServices.getFullName()}</p>
                        {/* <a className="nav-link dropdown-toggle text-nowrap px-3" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                            <img className="user-avatar rounded-circle mr-2" src="images/person.png" alt="User Avatar" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-small" style={{ display: "none" }}>

                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item text-danger" href="#">
                                <i className="material-icons text-danger"></i> Logout </a>
                        </div> */}
                    </li>
                </ul>

                <nav className="nav">
                    <a href="#" className="nav-link nav-link-icon toggle-sidebar d-md-inline d-lg-none text-center border-left" data-toggle="collapse" data-target=".header-navbar" aria-expanded="false" aria-controls="header-navbar">
                        <i className="material-icons"></i>
                    </a>
                </nav>
            </nav>
        </div>
    )

}

export default NavBar;