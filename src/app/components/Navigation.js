import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

export const Navigation = () => (
    <Link to="/dashboard">
        My application
    </Link>
)

export const NavigationConnector = connect(state=>state)(Navigation);