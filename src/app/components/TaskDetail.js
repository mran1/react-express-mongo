import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as mutations from '../store/mutations'
export const TaskDetail =({task, groups, handleGroupChange, taskNameChange, taskIndicatorChange})=>(
    <div>
        <div>
            <input type="text" value={task.name} onChange={taskNameChange}/>
        </div>
        <div>
            <button onClick={taskIndicatorChange}>{task.isComplete === true ? "reopen" : "complete"}</button>
        </div>
        <div>
            <select  onChange={handleGroupChange} defaultValue={task.group}>
                {groups.map(group => <option key={group.id} value={group.id}>{group.name}</option>)}
            </select>
        </div>
        <div>
            <Link to="/dashboard">
                <button>done</button>
            </Link>
        </div>
    </div>

)

const mapStateToProps=(state,ownProps)=>{
    let taskId = ownProps.match.params.id;
    let task = state.tasks.find(task => task.id === taskId);
    let groups = state.groups;
    return{
        task,
        groups
    }
}

const mapDispatchToProps=(dispatch,ownProps)=>{
    let id = ownProps.match.params.id;
    return{
        handleGroupChange:(e)=>{
            dispatch(mutations.groupChange(e.target.value,id))
        },
        taskNameChange:(e)=>{
            dispatch(mutations.taskNameChange(e.target.value,id))
        },
        taskIndicatorChange:(e)=>{
            let isComplete = (e.target.innerText === "reopen") ? false: true;
            dispatch(mutations.taskIndicatorChange(isComplete,id))
        }
    }
}


export const TaskDetailConnector = connect(mapStateToProps,mapDispatchToProps)(TaskDetail)