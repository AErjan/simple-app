import React from 'react';
import PostsListItem from './PostsListItem';
import { Link } from 'react-router-dom';

const PostsList = ({ posts }) => (
  <div className="posts">
    <div className="container">
      <ul className="posts__list">{postsList(posts)}</ul>
    </div>
  </div>
);

const postsList = users =>
  users.map(post => (
    <li className="posts__item" key={post.id}>
      <Link to={`/posts/${post.id}`}>
        <PostsListItem {...post} />
      </Link>
    </li>
  ));

export default PostsList;
