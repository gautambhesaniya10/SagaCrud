export const LOAD_USER_START = "LOAD_USER_START";
export const LOAD_USER_SUCESS = "LOAD_USER_SUCESS";
export const LOAD_USER_ERROR = "LOAD_USER_ERROR";

export const LOAD_ADD_USER_START = "LOAD_ADD_USER_START";
export const LOAD_ADD_USER_SUCCESS = "LOAD_ADD_USER_SUCCESS";
export const LOAD_ADD_USER_ERROR = "LOAD_ADD_USER_ERROR";

export const LOAD_DELETE_USER_START = "LOAD_DELETE_USER_START";
export const LOAD_DELETE_USER_SUCCESS = "LOAD_DELETE_USER_SUCCESS";
export const LOAD_DELETE_USER_ERROR = "LOAD_DELETE_USER_ERROR";

// Get All Users
export const onLoadUserStart = () => {
  return {
    type: LOAD_USER_START,
  };
};
export const onLoadUserSucess = (data) => {
  return {
    type: LOAD_USER_SUCESS,
    payload: data,
  };
};
export const onLoadUserError = (error) => {
  return {
    type: LOAD_USER_ERROR,
    payload: error,
  };
};

//  Add User
export const onLoadAddUserStart = (data) => {
  return {
    type: LOAD_ADD_USER_START,
    payload: data,
  };
};
export const onLoadAddUserSucess = (data) => {
  console.log("ddddddddddddd", data);
  return {
    type: LOAD_ADD_USER_SUCCESS,
    payload: data,
  };
};
export const onLoadAddUserError = (error) => {
  return {
    type: LOAD_ADD_USER_ERROR,
    payload: error,
  };
};

// Delete User
export const onLoadDeleteUserStart = (id) => {
  return {
    type: LOAD_DELETE_USER_START,
    id,
  };
};
export const onLoadDeleteUserSucess = (deleteId) => {
  return {
    type: LOAD_DELETE_USER_SUCCESS,
    payload : deleteId
  };
};
export const onLoadDeleteUserError = (error) => {
  return {
    type: LOAD_DELETE_USER_ERROR,
    payload: error,
  };
};



const initialState = {
  users: [],
  error: "",
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER_SUCESS:
      return {
        ...state,
        users: action.payload,
      };
    case LOAD_USER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case LOAD_ADD_USER_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case LOAD_ADD_USER_ERROR:
      return {
        ...state,
        error: action.payload,
      };
      case LOAD_DELETE_USER_SUCCESS:
        let remainingData = state?.users?.filter(item => item?.id !== action.payload)
        return {
          ...state,
          users: remainingData,
        };
    default:
      return state;
  }
};

export default UserReducer;
