import React from 'react';
import {connect } from 'react-redux';
import {requestTaskCreation} from '../store/mutations'
const TaskLists = ({tasks, name, id, createNewTask}) =>(
    <div >
        <h3>{name}</h3>
        {tasks.map(task => (
            <div key={task.id}>
                {task.name}
            </div>
        ))}
        <button onClick={() => createNewTask(id)}>Add new task</button>
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
const mapDispatchToProps = (dispatch,ownProps) =>{
    return{
        createNewTask:(id)=>{
            console.log("button clicked",id);
            dispatch(requestTaskCreation(id))
        }
    }
}


export const TaskListsConnector = connect(mapStateToProps, mapDispatchToProps)(TaskLists);