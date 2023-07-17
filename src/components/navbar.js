import React from 'react';
import {Link} from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Navbar = () => {
    const whiteColor = '#FFFFFF';
    return(
        <div className="carousel-navbar">
            <div className="medbots-logo"></div>
            <div className="navbar">
                <nav>
                    <ol>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/">Development</Link></li>
                        <li><Link to="/">Research</Link></li>
                        <li><Link to="/">Future</Link></li>
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
    );
};

export default Navbar;