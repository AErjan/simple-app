import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Avatar from "../../components/avatar/Avatar";

import "./style.scss";

const PostsDetails = ({ title, body, back, author, userId }) => (
  <div className="post-content">
    <div className="container">
      <button className="post-content__back back" onClick={back}>
        back
      </button>
      <h3 className="post-content__title">{title}</h3>
      <p className="post-content__text">{body}</p>
      <Link className="author" to={`/users/${userId}`}>
        <Avatar name={author} />
        <span className="author__title">{author}</span>
      </Link>
    </div>
  </div>
);

PostsDetails.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  back: PropTypes.func.isRequired,
  author: PropTypes.string.isRequired,
  userId: PropTypes.number.isRequired
};

export default PostsDetails;
