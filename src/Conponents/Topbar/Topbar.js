import React from 'react';
import './Topbar.css';
import { Link } from 'react-router-dom';

const Topbar = () => {
    return (
        <div className='topbar'>
            <div className="container">
                <div className="logo">
                    <Link className="menuItem" to='/'><h2>Dhaka Transport</h2></Link>
                </div>
                <div className="menu">
                    <Link className="menuItem" to="/">Home</Link>
                    <Link className="menuItem" to="/search">Destination</Link>
                    <Link className="menuItem" to="/">Blog</Link>
                    <Link className="menuItem" to="/">Contact</Link>
                    <Link to="/login"><button className="btn">Login</button></Link>
                </div>
                
            </div>
        </div>
    );
};

export default Topbar;