import {all,  fork, takeLatest} from 'redux-saga/effects';
import { LOAD_ADD_USER_START, LOAD_DELETE_USER_START, LOAD_USER_START } from './action/UserAction';
import { addUserHandler, deleteUserHandler, userHandler } from './handler/UserHandler';

export function* onLoadStart() {
        yield takeLatest(LOAD_USER_START , userHandler)
}

export function* onLoadAddUser() {
        yield takeLatest(LOAD_ADD_USER_START , addUserHandler)
}
export function* onLoadDeleteUser() {
        yield takeLatest(LOAD_DELETE_USER_START , deleteUserHandler)
}


const users = [fork(onLoadStart)];
const AddUser = [fork(onLoadAddUser)]
const DeleteUser = [fork(onLoadDeleteUser)]

export function* rootSagaWraper() {
    yield all([...users , ...AddUser , ...DeleteUser])
}
