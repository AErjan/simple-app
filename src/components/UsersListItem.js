import React from 'react';
import { Link } from 'react-router-dom';

const UserListItem = ({ id, name, email, phone, website }) => (
  <Link to={`/users/${id}`}>
    <div className="users__cart">
      <div className="users__avatar" style={generateAvatarColor()}>
        <span>{generateAvatar(name)}</span>
      </div>
      <div className="users__name">{name}</div>
      <div className="users__phone">{phone}</div>
      <div className="users__email">{email}</div>
      <div className="users__website">{website}</div>
    </div>
  </Link>
);

const generateAvatar = name =>
  name
    .split(' ')
    .map(name => name.substr(0, 1))
    .join('');

const generateAvatarColor = () => {
  return {
    backgroundColor: `rgba(${randomColor()}, ${randomColor()}, ${randomColor()}, 0.3)`,
  };
};

const randomColor = () => Math.floor(Math.random() * 255).toString();

export default UserListItem;
