import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { onLoadAddUserStart } from "../redux/action/UserAction";

const AddUserForm = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState({});

  const validationForm = () => {
    let error = {};
    let formValid = true;
    if (!inputValue?.name) {
      formValid = false;
      error["name"] = "Field is Required";
    } else if (!inputValue?.email) {
      formValid = false;
      error["email"] = "Field is Required";
    } else if (!inputValue?.phone) {
      formValid = false;
      error["phone"] = "Field is Required";
    } else if (!inputValue?.address) {
      formValid = false;
      error["address"] = "Field is Required";
    }
    // setErrors(errors);
    return formValid;
  };

  const SubmitHandler = () => {
    if (validationForm()) {
      const data = {
        id: Math.random(),
        ...inputValue
      };
      dispatch(onLoadAddUserStart(data));
      setInputValue({
        id: "",
        name: "",
        email: "",
        phone: "",
        address: "",
      });
    } else {
      alert("Please Fill All Fields");
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  return (
    <>
      <div>
        <label>Name :</label>
        <input
          type="text"
          name="name"
          value={inputValue?.name}
          onChange={(e) => onChangeHandler(e)}
          placeholder="Enter name"
        />
        <br />
        <br />
        <label>Email :</label>
        <input
          type="email"
          name="email"
          value={inputValue?.email}
          onChange={(e) => onChangeHandler(e)}
          placeholder="Enter Email"
        />
        <br />
        <br />
        <label>Phone No. :</label>
        <input
          type="number"
          name="phone"
          value={inputValue?.phone}
          onChange={(e) => onChangeHandler(e)}
          placeholder="Enter phone"
        />
        <br />
        <br />
        <label>Address :</label>
        <input
          type="text"
          name="address"
          value={inputValue?.address}
          onChange={(e) => onChangeHandler(e)}
          placeholder="Enter address"
        />
        <br />
        <br />
        <button type="submit" onClick={() => SubmitHandler()}>
          Submit
        </button>
      </div>
    </>
  );
};

export default AddUserForm;
