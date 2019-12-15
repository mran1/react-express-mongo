import {store} from '../store/index';
import React from 'react';
import {Provider} from 'react-redux';
import {ConnectedDashboard} from './Dashboard';
import {Router,Route} from 'react-router-dom';
import {history} from '../store/history'
import {NavigationConnector} from './Navigation';
export const Main = () =>(
    <Router history={history}>
        <Provider store={store} >
            <div>
                <NavigationConnector />
                <Route exact path="/dashboard" render={()=>(<ConnectedDashboard />)} />
            </div>
        </Provider>
    </Router>
)