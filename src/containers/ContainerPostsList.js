import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadingPosts } from '../actions';
import PostsList from '../components/PostsList';

class ContainerPostsList extends Component {
  componentDidMount() {
    this.props.loadingPosts();
  }

  render() {
    return <PostsList posts={this.props.posts} />;
  }
}

export default connect(
  state => ({ posts: state.postsReducer.posts }),
  { loadingPosts },
)(ContainerPostsList);
