import React from "react";
import { connect } from "react-redux";
import PostsDetails from "./PostsDetails";

const ContainerPostDetails = ({ post, back, author }) => (
  <PostsDetails {...post} back={back} author={author} />
);

export default connect((state, ownProps) => {
  const post = state.postsReducer.posts.find(
    post => post.id === Number(ownProps.match.params.id)
  );

  const userName = state.usersReducer.users.find(
    user => user.id === post.userId
  );

  return {
    post,
    author: userName.name,
    back: ownProps.history.goBack
  };
})(ContainerPostDetails);
