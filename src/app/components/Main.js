import {store} from '../store/index';
import React from 'react';
import {Provider} from 'react-redux';
import {ConnectedDashboard} from './Dashboard'

export const Main = () =>(
    <Provider store={store} >
        <div>
            <ConnectedDashboard />
        </div>
    </Provider>
)