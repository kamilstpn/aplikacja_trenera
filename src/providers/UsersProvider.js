import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const UsersContext = React.createContext({
  users: [],
  handleAddUser: () => {},
  deleteUser: () => {},
  zmienna: [],
});

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  // const [zmienna, setUsers] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get('/students')
  //     .then(({ data }) => setUsers(data.students))
  //     .catch((err) => console.log(err));
  // }, []);
  // useEffect(() => {
    axios
      .get('/blockchain')
       .then(({ zmienna }) => console.log(zmienna))
       .catch((err) => console.log(err));
       console.log("xddd")
  // }, []);
  

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  const handleAddUser = (values) => {
    const newUser = {
      name: values.name,
      attendance: values.attendance,
      average: values.average,
    };
    setUsers([newUser, ...users]);
  };
  return (
    <UsersContext.Provider
      value={{
        users,
        handleAddUser,
        deleteUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;