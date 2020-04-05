import {take, put, select} from 'redux-saga/effects';

import * as mutations from './mutations';
import uuid from 'uuid';
import axios from 'axios';
import {history} from './history';
let url = "http://localhost:7777";
export function* taskCreationSaga(){
    while(true){
        const {groupId, userId} = yield take(mutations.REQUEST_TASK_CREATION);
        const taskId=uuid();
        const ownerId = userId;
        yield put(mutations.createTask(taskId,ownerId,groupId))
        const {res} =yield axios.post(url + "/tasks/new", {task:{id : taskId,
            owner : ownerId,
            group : groupId,
            name: "jolly play",
            isComplete:false}})
        console.log("RESPONSE IS", res);
    }
}

export function* taskModificationSaga() {
    while (true) {
        let task = yield take([mutations.GROUP_CHANGE, mutations.TASK_NAME_CHANGE, mutations.TASK_INDICATOR_CHANGE]);
        let resp = yield axios.post(url + "/tasks/update", {
           task:{
            name:task.name,
            id:task.id,
            group:task.groupId,
            isComplete:task.indicator
           }
        })
        console.log("resp is ", resp);
    }
}

export function* userAuthenticationSaga(){
    while (true) {
        let { userName, password} = yield take(mutations.REQUEST_AUTHENTICATE_USER);
        try {
            let data = yield axios.post(url + "/authenticate", { userName, password });
            if (!data) {
                throw new Error;
            }
            console.log("Authenticated",data);
            yield put(mutations.setState(data.data.state));
            // yield put(mutations.processAuthenticateUser(mutations.AUTHENTICATED));
            history.push('/dashboard');
        }
        catch (e) {
            console.log("cant 't authenticate");
            yield put(mutations.processAuthenticateUser(mutations.NOT_AUTHENTICATED));
            

        }
    }
}