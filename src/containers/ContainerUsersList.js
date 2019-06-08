import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadingUsers } from '../actions';
import UsersList from '../components/UsersList';

class ContainerUsersList extends Component {
  componentDidMount() {
    this.props.loadingUsers();
  }

  render() {
    return <UsersList users={this.props.users} />;
  }
}

export default connect(
  state => ({ users: state.usersReducer.users }),
  { loadingUsers },
)(ContainerUsersList);
