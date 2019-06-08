import React from 'react';

const PostsDetails = ({ title, body }) => (
  <div className="post-content">
    <div className="container">
      <h3 className="post-content__title">{title}</h3>
      <p className="post-content__text">{body}</p>
    </div>
  </div>
);

export default PostsDetails;
