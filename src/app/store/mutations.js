export const REQUEST_TASK_CREATION = 'REQUEST_TASK_CREATION';
export const CREATE_TASK = 'CREATE_TASK';
export const GROUP_CHANGE = 'GROUP_CHANGE';
export const TASK_NAME_CHANGE = 'TASK_NAME_CHANGE';
export const TASK_INDICATOR_CHANGE = 'TASK_INDICATOR_CHANGE';
export const REQUEST_AUTHENTICATE_USER = 'REQUEST_AUTHENTICATE_USER';
export const PROCESS_AUTHENTICATE_USER = 'PROCESS_AUTHENTICATE_USER';
export const AUTHENTICATED = 'AUTHENTICATED'
export const AUTHENTICATING = 'AUTHENTICATING'
export const NOT_AUTHENTICATED = 'NOT_AUTHENTICATED'
export const SET_STATE = "SET_STATE"

export const requestTaskCreation = (groupId, userId) =>({
    type:REQUEST_TASK_CREATION,
    groupId,
    userId
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

export const requestAuthenticateUser = (userName, password) =>{
    return{
        type : REQUEST_AUTHENTICATE_USER,
        userName,
        password
    }
}

export const processAuthenticateUser = (status = AUTHENTICATING, session = null) => {
    return{
        type : PROCESS_AUTHENTICATE_USER,
        session,
        authenticated : status

    }
}
export const setState = (state = {}) =>{
    return{
        type : SET_STATE,
        state
    }
}