import React from 'react';
import {connect } from 'react-redux';
import {requestTaskCreation} from '../store/mutations'
import {Link} from 'react-router-dom'
const TaskLists = ({tasks, name, id, users, createNewTask}) =>(
    <div >
        <h3>{name}</h3>
        {tasks.map(task => (
            <Link key={task.id} to={`/task/${task.id}`}>
                <div >
                    {task.name}
                </div>
            </Link>
        ))}
        <button onClick={() => createNewTask(id,users.id)}>Add new task</button>
    </div>
)

const mapStateToProps = (state,ownProps) => {
    let groupId = ownProps.id;
    return {
        id:groupId,
        name:ownProps.name,
        users:state.users,
        tasks:state.tasks.filter(task => task.group === groupId)
    }
}
const mapDispatchToProps = (dispatch,ownProps) =>{
    return{
        createNewTask:(id, userId)=>{
            console.log("button clicked",id);
            dispatch(requestTaskCreation(id, userId))
        }
    }
}


export const TaskListsConnector = connect(mapStateToProps, mapDispatchToProps)(TaskLists);