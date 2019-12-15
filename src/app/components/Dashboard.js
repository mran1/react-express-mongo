import React from 'react';
import {connect} from 'react-redux';
import {TaskListsConnector} from './TaskLists'
export const Dashboard = ({groups}) =>(
    <div>
        <h2>Dashboard</h2>
        {groups.map((group) => (<TaskListsConnector id={group.id} name={group.name} /> ))}
    </div>
)
function mapStateToProps(state){
    return{
        groups:state.groups
    }
}

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard)