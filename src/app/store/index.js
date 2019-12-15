import {createStore,applyMiddleware,combineReducers} from 'redux';
import {defaultState} from '../../server/defaultState';
import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import * as sagas from './sagas.mock';
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
                }]
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