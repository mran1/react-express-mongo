import {store} from '../store/index';
import React from 'react';
import {Provider} from 'react-redux';
import {ConnectedDashboard} from './Dashboard';
import {Router,Route} from 'react-router-dom';
import {history} from '../store/history'
import {NavigationConnector} from './Navigation';
import {TaskDetailConnector} from './TaskDetail';
import {Redirect} from 'react-router-dom';
import {LoginConnector} from './Login';

const RouteGuard = Component => ({match}) =>{
    console.log("ROUTE GUARD", match);
    if (!store.getState().session.authenticate) {
        return <Redirect to="/" />

    } else{
        return <Component match={match} />
    }
}
export const Main = () =>(
    <Router history={history}>
        <Provider store={store} >
            <div>
                <NavigationConnector />
                <Route exact path="/" render={() => <LoginConnector />} />
                <Route exact path="/dashboard" render={RouteGuard(ConnectedDashboard)} />
                <Route exact path="/task/:id" render={RouteGuard(TaskDetailConnector)}  />
            </div>
        </Provider>
    </Router>
)