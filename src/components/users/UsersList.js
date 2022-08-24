import React from "react";
import Card from "../UI/Card";
import './UsersList.css';

const UsersList = (props) => {
  return (
    <Card>
      <ul>
        {props.user.map((username) => (
          <li key={username.id}>
            {username.name} ({username.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
