import React from "react";

import Navbar from './navbar';

import Button from "@mui/material/Button";

import {Outlet, Link} from "react-router-dom";

const Layout = () => {
    const whiteColor = '#FFFFFF';
    return (
        <div className="carousel">
            <div className="carousel-black-blur">
                <Navbar />
                <div className="carousel-contents">
                    <div></div>
                    <div>
                        <h1>Improved healthcare through optimal data integration</h1>
                        <br />
                        <Button variant="outlined" style={{color:whiteColor, borderColor:whiteColor,fontSize:'100%'}}>
                                Learn About medBots
                        </Button>
                    </div>
                    <div></div>
                </div>
            </div>
            <Outlet />
        </div>
    );
};

export default Layout;