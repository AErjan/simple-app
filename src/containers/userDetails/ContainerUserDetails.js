import React from "react";
import { connect } from "react-redux";
import UserDetails from "./UserDetails";

const ContainerUserDetails = ({ user, back }) => (
  <UserDetails {...user} back={back} />
);

export default connect((state, ownProps) => ({
  user: state.usersReducer.users.find(
    user => user.id === Number(ownProps.match.params.id)
  ),
  users: state.usersReducer.users,
  back: ownProps.history.goBack
}))(ContainerUserDetails);
