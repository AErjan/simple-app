import React from 'react';
import { connect } from 'react-redux';
import PostsDetails from '../components/PostsDetails';

const ContainerPostDetails = ({ post }) => <PostsDetails {...post} />;

export default connect((state, ownProps) => ({
  post: state.postsReducer.posts.find(
    post => post.id === Number(ownProps.match.params.id),
  ),
}))(ContainerPostDetails);
