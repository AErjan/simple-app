import React from 'react';
import UsersListItem from './UsersListItem';

const UsersList = ({ users }) => (
  <div className="container">
    <div className="users">
      <ul className="users__list">{usersList(users)}</ul>
    </div>
  </div>
);

const usersList = users =>
  users.map(user => (
    <li className="users__item" key={user.id}>
      <UsersListItem {...user} />
    </li>
  ));

export default UsersList;
