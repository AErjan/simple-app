import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import UsersList from "./containers/usersList/ContainerUsersList";
import UserDetails from "./containers/userDetails/ContainerUserDetails";
import PostsList from "./containers/postsList/ContainerPostsList";
import PostsDetails from "./containers/postDetails/ContainerPostDetails";

const App = () => (
  <div className="wrapper">
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/users" component={UsersList} />
      <Route path="/users/:id" component={UserDetails} />
      <Route exact path="/posts" component={PostsList} />
      <Route path="/posts/:id" component={PostsDetails} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
