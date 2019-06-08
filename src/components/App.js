import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import ContainerUsersList from '../containers/ContainerUsersList';
import ContainerUserDetails from '../containers/ContainerUserDetails';
import ContainerPostsList from '../containers/ContainerPostsList';
import ContainerPostsDetails from '../containers/ContainerPostDetails';

const App = () => (
  <div className="wrapper">
    <Header />

    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/users" component={ContainerUsersList} />
      <Route path="/users/:id" component={ContainerUserDetails} />
      <Route exact path="/posts" component={ContainerPostsList} />
      <Route path="/posts/:id" component={ContainerPostsDetails} />
      <Redirect to="/" />
    </Switch>
  </div>
);

export default App;
