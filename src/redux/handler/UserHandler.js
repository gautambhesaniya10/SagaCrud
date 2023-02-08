import { call, put } from "redux-saga/effects";
import { onLoadAddUserError, onLoadAddUserSucess, onLoadDeleteUserError, onLoadDeleteUserSucess, onLoadUserError, onLoadUserSucess } from "../action/UserAction";
import { DeleteUserApi, getUserApi, postAddUserApi } from "../request/ApiData";

export function* userHandler() {
  try {
    const response = yield call(getUserApi);
    if (response.status === 200) {
      yield put(onLoadUserSucess(response.data));
    }
  } catch (error) {
    yield put(onLoadUserError(error));
  }
}
export function* addUserHandler({payload}) {

  try {
      const response = yield call(postAddUserApi , payload );
      if (response.status === 201) {
          yield put(onLoadAddUserSucess(response.data));
        }
  } catch (error) {
      yield put(onLoadAddUserError(error));
  }
  
}
export function* deleteUserHandler(deleteId) {
  try {
      const response = yield call(DeleteUserApi , deleteId?.id );
      if (response.status === 200) {
          yield put(onLoadDeleteUserSucess(deleteId?.id));
        }
  } catch (error) {
      yield put(onLoadDeleteUserError(error));
  }
  
}
