import React from 'react';
import { connect } from 'react-redux';
import UserDetails from '../components/UserDetails';

const ContainerUserDetails = ({ user }) => <UserDetails {...user} />;

export default connect((state, ownProps) => ({
  user: state.usersReducer.users.find(
    user => user.id === Number(ownProps.match.params.id),
  ),
  users: state.usersReducer.users,
}))(ContainerUserDetails);
