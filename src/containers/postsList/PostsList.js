import React from "react";
import PropTypes from "prop-types";
import PostsListItem from "./PostsListItem";
import { Link } from "react-router-dom";

import "./style.scss";

const PostsList = ({ posts }) => (
  <div className="posts">
    <div className="container">
      <ul className="posts__list">{postsList(posts)}</ul>
    </div>
  </div>
);

const postsList = posts =>
  posts.map(post => (
    <li className="posts__item" key={post.id}>
      <Link to={`/posts/${post.id}`}>
        <PostsListItem {...post} />
      </Link>
    </li>
  ));

PostsList.propTypes = {
  posts: PropTypes.array.isRequired
};

export default PostsList;
