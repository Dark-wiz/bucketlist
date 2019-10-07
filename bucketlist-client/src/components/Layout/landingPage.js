import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
class LandingPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="error">
                <div className="error__content">
                    <div className="col-lg-8">
                        <div className="card card-small mb-4 pt-3">
                            <div className="card-header border-bottom text-center">
                                <div className="mb-3 mx-auto">
                                    <img className="rounded-circle" src="images/bucketlist.jpg" alt="User Avatar" width="110" /> </div>
                                <h4 className="mb-0">Welcome to Bucketlist</h4>
                                <NavLink to="/login">
                                    <button type="button" className="mb-2 btn btn-sm btn-pill btn-outline-primary mr-2">
                                        <i className="material-icons mr-1"></i>Login</button>
                                </NavLink >
                                <NavLink to="register">
                                    <button type="button" className="mb-2 btn btn-sm btn-pill btn-outline-primary mr-2">
                                        <i className="material-icons mr-1"></i>Register</button>
                                </NavLink>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item p-4">
                                    <strong className="text-muted d-block mb-2">Description</strong>
                                    <span>A simple and fun crud app that lets you add your favourite bucketlist and tasks you wish to accomplish.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;