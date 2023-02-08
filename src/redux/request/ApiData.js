import axios from "axios";

let BaseUrl = "http://localhost:5001/users";

export const getUserApi = async () => {
  let resData = await axios.get(BaseUrl);
  return resData;
};
export const postAddUserApi = async (payload) => {
  let resData = await axios.post(BaseUrl, payload);
  return resData;
};
export const DeleteUserApi = async (id) => {
  let resData = await axios.delete(`${BaseUrl}/${id}`);
  return resData;
};
