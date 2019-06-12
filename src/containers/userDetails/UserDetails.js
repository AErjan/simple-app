import React from "react";
import PropTypes from "prop-types";

import "./style.scss";

const UserDetails = ({
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
  back
}) => (
  <div className="user-info">
    <div className="container">
      <button className="user-info__back back" onClick={back}>
        back
      </button>
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

UserDetails.propTypes = {
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  address: PropTypes.shape({
    street: PropTypes.string.isRequired
  }).isRequired,
  phone: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  company: PropTypes.shape({
    name: PropTypes.string.isRequired
  }).isRequired,
  back: PropTypes.func.isRequired
};

export default UserDetails;
