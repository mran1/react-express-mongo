export const REQUEST_TASK_CREATION = 'REQUEST_TASK_CREATION';
export const CREATE_TASK = 'CREATE_TASK';
export const GROUP_CHANGE = 'GROUP_CHANGE';
export const TASK_NAME_CHANGE = 'TASK_NAME_CHANGE';
export const TASK_INDICATOR_CHANGE = 'TASK_INDICATOR_CHANGE';

export const requestTaskCreation = (groupId) =>({
    type:REQUEST_TASK_CREATION,
    groupId
})

export const createTask = (taskId,ownerId,groupId) =>({
    type:CREATE_TASK,
    taskId,
    ownerId,
    groupId
})

export const groupChange=(groupId,id)=>{
    return{
        type:GROUP_CHANGE,
        groupId,
        id
    }
}

export const taskNameChange = (name,id) =>{
    return{
        type:TASK_NAME_CHANGE,
        name,
        id
    }
}

export const taskIndicatorChange = (indicator,id) =>{
    return{
        type:TASK_INDICATOR_CHANGE,
        indicator,
        id
    }
}