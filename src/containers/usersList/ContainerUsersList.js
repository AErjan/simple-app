import React, { Component } from "react";
import { connect } from "react-redux";
import { loadingUsers } from "../../actions";
import Spinner from "../../components/spinner/Spinner";
import UsersList from "./UsersList";

class ContainerUsersList extends Component {
  componentDidMount() {
    const { users, loadingUsers } = this.props;
    if (!users || !users.length) {
      loadingUsers();
    }
  }

  render() {
    const { users, isLoading } = this.props;
    return <>{isLoading ? <Spinner /> : <UsersList users={users} />}</>;
  }
}

export default connect(
  state => ({
    users: state.usersReducer.users,
    isLoading: state.usersReducer.loading
  }),
  { loadingUsers }
)(ContainerUsersList);
