import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Avatar from "../../components/avatar/Avatar";

const UserListItem = ({ id, name, email, phone, website }) => (
  <Link to={`/users/${id}`}>
    <div className="users__cart">
      <Avatar name={name} />
      <div className="users__name">{name}</div>
      <div className="users__phone">{phone}</div>
      <div className="users__email">{email}</div>
      <div className="users__website">{website}</div>
    </div>
  </Link>
);

UserListItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired
};

export default UserListItem;
