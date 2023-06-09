import React from 'react'
import { NavLink } from 'react-router-dom';

export const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/movies">Movies</NavLink>
                </div>
            </div>
        </nav>
    );
}
