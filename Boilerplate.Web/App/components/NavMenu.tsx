import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    render() {

        return (
            <div id="main-nav" className="navbar-dark">
                <Link className='navbar-brand m-3 text-center' to={'/'}>Boilerplate</Link>
                <nav className="nav nav-pills flex-column">
                    <NavLink exact to={'/'} className="nav-link text-white">
                        <span className='glyphicon glyphicon-home'></span> Home
                    </NavLink>
                    <NavLink exact to={'/counter'} className="nav-link text-white">
                        <span className='glyphicon glyphicon-education'></span> Counter
                    </NavLink>
                    <NavLink exact to={'/fetchdata'} className="nav-link text-white">
                        <span className='glyphicon glyphicon-th-list'></span> Fetch data
                    </NavLink>
                </nav>
            </div>
        );
    }
}
