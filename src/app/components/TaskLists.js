import React from 'react';
import {connect } from 'react-redux';

const TaskLists = ({tasks, name}) =>(
    <div>
        <h3>{name}</h3>
        {tasks.map(task => (
            <div>
                {task.name}
            </div>
        ))}
    </div>
)

const mapStateToProps = (state,ownProps) => {
    let groupId = ownProps.id;
    return {
        id:groupId,
        name:ownProps.name,
        tasks:state.tasks.filter(task => task.group === groupId)
    }
}

export const TaskListsConnector = connect(mapStateToProps)(TaskLists);