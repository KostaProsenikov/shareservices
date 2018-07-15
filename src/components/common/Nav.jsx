import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import '../../styles/menu.css';
import Header from './Header';
import userService from '../../services/userService';

export default class Nav extends Component {
    render= () => ( 
        <nav className="site-header sticky-top py-1">
        <div className="d-flex flex-column flex-md-row">
           
            <NavLink activeClassName="active" className="py-2 pull-left d-none d-md-inline-block" to="/">Home</NavLink>
            {userService.login.isLogged() === true &&
                <NavLink  activeClassName="active" className="py-2 d-none d-md-inline-block" to="/catalog">Catalog</NavLink>
            }
            {userService.login.isLogged() === true &&
                <NavLink activeClassName="active" className="py-2 d-none d-md-inline-block" to="catalog/create-post">Create Post</NavLink>
             }
            <Header />
        </div>
        </nav>
    )
}

