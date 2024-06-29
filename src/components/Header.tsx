import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
    return (
        <header>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/category/star-wars">Star Wars</NavLink>
                <NavLink to="/category/famous-people">Famous People</NavLink>
                <NavLink to="/category/saying">Saying</NavLink>
                <NavLink to="/category/humour">Humour</NavLink>
                <NavLink to="/category/motivational">Motivational</NavLink>
                <NavLink to="/add-quote">Submit New Quote</NavLink>
            </nav>
        </header>
    );
};

export default Header;
