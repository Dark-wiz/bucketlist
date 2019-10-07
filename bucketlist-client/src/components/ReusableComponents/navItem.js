import React from 'react';
import { NavLink } from 'react-router-dom'
export const NavItem = ({ icon, link, label }) => {
    return (
        <li className="nav-item">
            <NavLink className="nav-link" to={link}>
                <i className="material-icons">{icon}</i>
                <span>{label}</span>
            </NavLink>
        </li>
    )
}