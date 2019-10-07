import React from 'react';
import SideBar from './sideBar';
import NavBar from './navBar';
const Layout = props => {
    return (
        <div className="container-fluid">
            <div className="row">
                {/* <EditContract /> */}
                <SideBar />
                <div className="main-content col-lg-10 col-md-9 col-sm-12 p-0 offset-lg-2 offset-md-3">
                    <NavBar />
                    <div className="main-content-container container-fluid px-4">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Layout;