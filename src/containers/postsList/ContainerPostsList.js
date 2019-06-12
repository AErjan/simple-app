import React, { Component } from "react";
import { connect } from "react-redux";
import { loadingPosts, loadingUsers } from "../../actions";
import Spinner from "../../components/spinner/Spinner";
import PostsList from "./PostsList";

class ContainerPostsList extends Component {
  componentDidMount() {
    const { loadingPosts, loadingUsers, users, posts } = this.props;
    if (!posts || !posts.length) {
      loadingPosts();
    }

    if (!users || !users.length) {
      loadingUsers();
    }
  }

  render() {
    const { posts, isLoadingPosts, isLoadingUsers } = this.props;

    return (
      <>
        {isLoadingPosts ? (
          <Spinner />
        ) : isLoadingUsers ? (
          <Spinner />
        ) : (
          <PostsList posts={posts} />
        )}
      </>
    );
  }
}

export default connect(
  state => ({
    posts: state.postsReducer.posts,
    users: state.usersReducer.users,
    isLoadingPosts: state.postsReducer.loading,
    isLoadingUsers: state.usersReducer.loading
  }),
  { loadingPosts, loadingUsers }
)(ContainerPostsList);
