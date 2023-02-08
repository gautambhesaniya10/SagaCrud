import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onLoadDeleteUserStart, onLoadUserStart } from "../redux/action/UserAction";
import AddUserForm from "./AddUserForm";

const Home = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state?.userData?.users);

  useEffect(() => {
    dispatch(onLoadUserStart());
  }, []);

  const deleteUser = (id) => {
    console.log("idddddd", id);
    dispatch(onLoadDeleteUserStart(id));
  };

  return (
    <>
      <div style={{ margin: "2% 5% 0 5%" }} className="">
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>PhoneNo</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
          {userData?.map((item) => {
            return (
              <>
                <tr>
                  <td>{item?.name}</td>
                  <td>{item?.email}</td>
                  <td>{item?.phone}</td>
                  <td>{item?.address}</td>
                  <td style={{ cursor: "pointer" }} onClick={() => deleteUser(item?.id)}>
                    Delete
                  </td>
                </tr>
              </>
            );
          })}
        </table>
        <br />
      </div>
      <div className="main_form_div">
        <AddUserForm />
      </div>
    </>
  );
};

export default Home;
