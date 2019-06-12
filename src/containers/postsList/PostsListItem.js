import React from "react";
import PropTypes from "prop-types";

const PostsListItem = ({ title }) => <h3 className="posts__title">{title}</h3>;

PostsListItem.propTypes = {
  title: PropTypes.string.isRequired
};

export default PostsListItem;
