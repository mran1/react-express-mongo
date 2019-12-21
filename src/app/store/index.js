import {createStore,applyMiddleware,combineReducers} from 'redux';
import {defaultState} from '../../server/defaultState';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import * as sagas from './sagas';
import * as mutations from './mutations';

const sagaMiddleware = createSagaMiddleware();
export const store=createStore(
    combineReducers({
        tasks(tasks = defaultState.tasks, action){
            switch (action.type) {
                case mutations.CREATE_TASK: return [...tasks, {
                    name: "jolly play",
                    id: action.taskId,
                    owner: action.ownerId,
                    group: action.groupId,
                    isComplete: false
                }];
                case mutations.GROUP_CHANGE : return tasks.map((task) => {
                return (task.id === action.id) ? {...task,group:action.groupId} : task;
                });
                case mutations.TASK_NAME_CHANGE : return tasks.map((task) =>{
                   return (task.id === action.id) ? {...task,name:action.name}:task
                });
                case mutations.TASK_INDICATOR_CHANGE : return tasks.map((task) =>{
                    return (task.id === action.id) ?  {...task,isComplete:action.indicator}:task
                 })
            }
            return tasks; 
        },
        comments(comments=defaultState.comments,action){
            return comments;

        },
        users(users=defaultState.users,action){
            return users;
        },
        groups(groups=defaultState.groups,action){
            return groups;
        }
    }), applyMiddleware(createLogger, sagaMiddleware)
)

for(let saga in sagas){
    sagaMiddleware.run(sagas[saga]);
}