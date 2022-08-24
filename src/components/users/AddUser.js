// this component is to handle adding the user
import React, { useState } from "react";
import Card from "../UI/Card";
import "./AddUser.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [addUsername, setAddUsername] = useState("");
  const [addAge, setAddAge] = useState("");
    const [errorModal, setErrorModal] = useState();

  const onAddUsername = (e) => {
    setAddUsername(e.target.value);
  };
  const onAddAge = (e) => {
    setAddAge(e.target.value);
  };

  const addUserHandler = (e) => {
    e.preventDefault();

    if (addUsername.length <= 2) {
        setErrorModal({
            title: 'Invalid Username',
            message: 'Username  must not be shorter than 2 characters.'
        })
      return;
    } else if (addAge.trim().length === 0 || +addAge < 12) {
        setErrorModal({
            title: 'Invalid Age',
            message: 'You must be 13 years of age to use this website.'
        })
      return;
    } else {
      props.onAddUser(addUsername, addAge);
      setAddUsername("");
      setAddAge("");
    }
  };

  const errorHandler = () => {
      setErrorModal(null);
  }

  return (
      <div>
      {errorModal && <ErrorModal errorHandler={errorHandler}title={errorModal.title} message={errorModal.message}/>}
    <Card >
      <form className="form-control" onSubmit={addUserHandler}>
        <label className="label-control" htmlFor="username">
          Username:
        </label>
        <input
          className="input-control"
          id="username"
          type="text"
          value={addUsername}
          onChange={onAddUsername}
        />
        <label className="label-control" htmlFor="age">
          Age (years):
        </label>
        <input
          className="input-control"
          id="age"
          type="number"
          value={addAge}
          onChange={onAddAge}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
  );
};

export default AddUser;
