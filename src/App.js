import React, { useState } from 'react';
import AddUser from './components/users/AddUser';
import UsersList from './components/users/UsersList';
import './index.css'



function App() {

  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (username, userAge) => {
    setUsersList((prevUserList) => {
      return [...prevUserList, {
        id: Math.random().toString(),
        name: username,
        age: userAge,

      }]
    });
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList user={usersList} />
    </div>
  );
}

export default App;
