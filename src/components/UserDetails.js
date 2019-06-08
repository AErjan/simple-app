import React from 'react';

const UserDetails = ({
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => (
  <div className="user-info">
    <div className="container">
      <ul className="user-info__list">
        <li className="user-info__item">Name: {name}</li>
        <li className="user-info__item">Username: {username}</li>
        <li className="user-info__item">Email: {email}</li>
        <li className="user-info__item">Address: {address.street}</li>
        <li className="user-info__item">Phone: {phone}</li>
        <li className="user-info__item">Website: {website}</li>
        <li className="user-info__item">Company: {company.name}</li>
      </ul>
    </div>
  </div>
);

export default UserDetails;
