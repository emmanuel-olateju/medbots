import React from "react";
import Button from "@mui/material/Button";
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Layout = () => {
    const whiteColor = '#FFFFFF'
    return (
        <div className="carousel">
            <div className="carousel-black-blur">
                <div className="carousel-navbar">
                    <div className="medbots-logo"></div>
                    <div className="navbar">
                        <nav>
                            <ol>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Models</a></li>
                                <li><a href="#">Development</a></li>
                                <li><a href="#">Research</a></li>
                                <li><a href="#">Future</a></li>
                            </ol>
                        </nav>
                    </div>
                    <div className="account">
                        <a href="#">
                            <SearchIcon style={{color:whiteColor}}/>
                        </a>
                        <a href="#" className="accountOptions" style={{fontSize:'30px'}}>
                            <PersonIcon style={{color:whiteColor}}/>
                            <ExpandMoreIcon style={{color:whiteColor}}/>
                        </a>
                    </div>
                </div>
                <div className="carousel-contents">
                    <div></div>
                    <div>
                        <h1>Improved healthcare through optimal data integration</h1>
                        <br />
                        <Button variant="outlined" style={{color:whiteColor, borderColor:whiteColor,fontSize:'18px'}}>
                                Learn About medBots
                        </Button>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default Layout;