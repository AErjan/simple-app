import React from "react";
import UsersListItem from "./UsersListItem";
import PropTypes from "prop-types";

import "./style.scss";

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

UsersList.propTypes = {
  users: PropTypes.array.isRequired
};

export default UsersList;
